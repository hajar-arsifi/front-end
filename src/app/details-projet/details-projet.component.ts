import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ContratsService } from '../services/contrats.service';
import { Client } from '../model/client.model';
import { Projet } from '../model/projet.model';
import { Departement } from '../model/departement.model';
import { ModalManager } from 'ngb-modal';
import { SaveProjetService } from '../services/save-projet.service';
import { GestionFactureService } from '../services/gestion-facture.service';
import { Facture } from '../model/facture.model';
import { Profil } from '../model/profil.model';
import { ModelServiceService } from '../model-service.service';

@Component({
  selector: 'app-details-projet',
  templateUrl: './details-projet.component.html',
  styleUrls: ['./details-projet.component.css']
})
export class DetailsProjetComponent implements OnInit {
  @ViewChild('addProfil') myModal;
  private modalRef;
  public currentFacture:Facture;
  public currentContrat: Projet;
  public profils: any;
  public factures: any;
  public allFactures:Facture[];
  public lastFacture: Facture;
  public facture: Facture;
  public client: Client;
  public departement: Departement;
  public date = new Date();
  public test = false;
  public annee: any;
  public mois: any;
  public jour: any;
  public nombreFactureGenerees: number;
  public nombreMoisProjet: number;
  public countOfFactures: number;
  public size: number = 6;
  public currentPage1: number = 0;
  public currentPage2: number = 0;
  public totalPages: number;
  public pages: Array<number>;
  public archive: boolean = false;
  public facturesArchives: any;
  public lastAnnee;
  public lastMois;
  public lastJour;
  public jourFin:any;
  public moisFin:any;
  public anneeFin:any;
  public profil: Profil;
  public idProjet:number;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private services: ContratsService,
    private modalService: ModalManager, private saveProject: SaveProjetService, private factureService: GestionFactureService,
    private modalSer: ModelServiceService) { }

  ngOnInit(): void {
    this.idProjet = this.activatedRoute.snapshot.params['id'];
  
    console.log(this.idProjet);
    this.services.getContrat(this.idProjet)
      .subscribe((data: any) => {
        this.currentContrat = data;
        this.annee = data.annee;
        this.mois = data.mois;
        this.jour = data.jour;
        this.anneeFin = data.anneeFin;
        this.moisFin = data.moisFin;
        this.jourFin = data.jourFin;
        this.nombreMoisProjet = data.duree / 30;
      
        if (this.mois < 10) {
          this.mois = '0' + this.mois;
        }
        if (this.jour < 10) {
          this.jour = '0' + this.jour;
        }
          if (this.moisFin < 10) {
          this.moisFin = '0' + this.mois;
        }
        if (this.jourFin < 10) {
          this.jourFin = '0' + this.jour;
        }
        this.factureService.getLastFacture(this.idProjet)
          .subscribe((data: any) => {
            this.lastFacture = data;
            console.log("last"+this.lastFacture)
            this.lastAnnee =this.lastFacture.anneeCreation;
            this.lastMois = this.lastFacture.moisCreation;
            this.lastJour = this.lastFacture.jourCreation;
            if (this.lastMois < 10) {
              this.lastMois = '0' + this.lastMois;
            }
            if (this.lastJour < 10) {
              this.lastJour = '0' + this.lastJour;
            }
            let str = this.annee + '-' + this.mois + '-' + this.jour;
            this.currentContrat.date = new Date(str);
            this.saveProject.idProject = this.currentContrat.id;
            let str2 = this.lastAnnee + '-' + this.lastMois + '-' + this.lastJour;

            let lastDate = new Date(str2);
            let str3 = this.anneeFin + '-' + this.moisFin + '-' + this.jourFin;
            this.currentContrat.dateFin = new Date(str3);
          
            if (this.lastFacture.jourCreation == 0) {
              lastDate = this.currentContrat.date;
            }
            if(this.currentContrat.type=="Régie"){
              if (this.date.getTime() >= lastDate.setDate(lastDate.getDate() + 30)){
                this.test = true;
              }
              else{
                this.test=false;
              }
            
            }
            
            else if(this.currentContrat.type=="Forfait"){
            const id = this.activatedRoute.snapshot.params['id'];
              
               this.factureService.getFacturesGeneres(this.idProjet)
               .subscribe((data: any) => {

                  if(data.length==1){
                  this.test=false;
                }
              }, err => {
                console.log(err);
              });

               if(new Date().getTime()>=this.currentContrat.dateFin.getTime()){
                 this.test=true;
               }
               else {
                 this.test=false;
               }
            }
           
          }, err => {
            console.log(err);
          });
      }, err => {
        console.log(err);
      });



    this.factureService.getFacturesNonArchives(this.idProjet, this.currentPage1, this.size)
      .subscribe((data: any) => {
        this.factures = data;
        this.totalPages = data["totalPages"];
        this.pages = new Array<number>(this.totalPages);
        console.log(data.length);
      }, err => {
        console.log(err);
      });
    this.factureService.getFacturesArchives(this.idProjet, this.currentPage2, this.size)
      .subscribe((data: any) => {
        this.facturesArchives = data;
        this.totalPages = data["totalPages"];
        this.pages = new Array<number>(this.totalPages);
        console.log(data.length);
      }, err => {
        console.log(err);
      });
    this.services.getClientByProjet(this.idProjet)
      .subscribe((data: any) => {
        this.client = data;
  
      }, err => {
        console.log(err);
      });
    this.services.getDepartement(this.idProjet)
      .subscribe((data: Departement) => {
        this.departement = data;
        this.currentContrat.departement = this.departement.libelle;
      }, err => {
        console.log(err);
      });
  }
  openModal() {
    this.modalSer.modalRef = this.modalService.open(this.myModal, {
      size: "lg",
      modalClass: 'addProfil',
      hideCloseButton: false,
      centered: false,
      backdrop: true,
      animation: true,
      keyboard: false,
      closeOnOutsideClick: false,
      backdropClass: "modal-backdrop"
    });
  }

  validerPaiement(value) {
    let currentDate=new Date();
    let anneeFacturation=currentDate.getFullYear();
    let moisFacturation=currentDate.getMonth()+1;
    let jourFacturation=currentDate.getDate();
    this.factureService.validerPaiement(value,jourFacturation,moisFacturation,anneeFacturation)
      .subscribe((data: Facture) => {
      }, err => {
        console.log(err);
      });
    this.ngOnInit();
  }
  onPageFacture(i) {
    this.currentPage1 = i;
    this.ngOnInit();
  }
  Supprimer(value) {
    let conf = confirm("Etes-vous sûre de vouloir supprimer");
    if (conf) {
      this.factureService.archiverFacture(value)
        .subscribe((data: Facture) => {
        }, err => {
          console.log(err);
        });
      this.ngOnInit();
    }
  }

  onPageFactureArchives(i) {
    this.currentPage2 = i;
    this.ngOnInit();
  }
  ajouterProfil(value: any) {
    const id = this.saveProject.idProject;
    this.services.saveProfil(id, value)
      .subscribe((data: any) => {
        this.profil = data;
        console.log(data);
      }, err => {
        console.log(err);
      });
    this.ngOnInit();
    this.modalService.close(this.myModal)

  }

  
  }

