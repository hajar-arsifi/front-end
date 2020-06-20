import {Component, OnInit, ViewChild} from '@angular/core';
import { ContratsService } from '../services/contrats.service';
import { Router, ActivatedRoute } from '@angular/router';
import {ModalManager} from 'ngb-modal';
import {SaveProjetService} from '../services/save-projet.service';
import {Projet} from '../model/projet.model';
import {Profil} from '../model/profil.model';
import {Departement} from '../model/departement.model';
import {GestionProjetService} from '../services/gestion-projet.service';

@Component({
  selector: 'app-projet-en-attente',
  templateUrl: './projet-en-attente.component.html',
  styleUrls: ['./projet-en-attente.component.css']
})
export class ProjetEnAttenteComponent implements OnInit {
  @ViewChild('EditContrat') myModal;
  private modalRef;
  contrats: any;
  public size: number = 8
  public currentPage: number = 0;
  public totalPages: number;
  public pages: Array<number>;
  constructor(private services: ContratsService, private router: Router, private activatedRoute: ActivatedRoute,
              private modalService: ModalManager, public saveProjetService : SaveProjetService,
              public projetService: GestionProjetService) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.services.getProjetsEnAttente(this.currentPage, this.size)
      .subscribe((data: any) => {
        this.totalPages = data["totalPages"];
        this.pages = new Array<number>(this.totalPages);
        this.contrats = data;
        console.log(data);
        console.log(id);
      }, err => {
        console.log(err);
      });

  }
  onPageContrat(i) {
    this.currentPage = i;
    this.ngOnInit();

  }
  onDeleteContrat(c) {
    let conf = confirm("Etes-vous sûre de vouloir supprimer");
    if (conf) {
      this.services.deleteContrat(c.id).subscribe(res => {

        this.ngOnInit();
      }
        , err => {
          console.log(err);

        });
    }
  }
  openModalEdit(id){
    this.modalRef = this.modalService.open(this.myModal, {
      size: "lg",
      modalClass: 'EditContrat',
      hideCloseButton: false,
      centered: false,
      backdrop: true,
      animation: true,
      keyboard: false,
      closeOnOutsideClick: false,
      backdropClass: "modal-backdrop"
    });
    this.onLoad(id);
  }
  public currentContrat: Projet;
  public annee: any;
  public mois: any;
  public jour: any;
  public profil: Profil;
  public departements: any;
  public departement: Departement;
  public n: number = 0;

  onLoad(id)
  {
    this.services.getContrat(id)
      .subscribe((data: Projet) => {
        this.annee = data.annee;
        this.mois = data.mois;
        this.jour = data.jour;
        if (this.mois < 10) {
          this.mois = '0' + this.mois;
        }
        if (this.jour < 10) {
          this.jour = '0' + this.jour;
        }
        let str = this.annee + '-' + this.mois + '-' + this.jour;
        this.currentContrat = data;
        this.services.getProfilsByProjet(id)
          .subscribe(res =>{
            this.currentContrat.profils = res;
            console.log("from profil " + this.currentContrat.profils);
          }, err =>{
            console.log(err);
          });
        this.currentContrat.date = new Date(str);
        console.log(this.currentContrat.date);
        this.saveProjetService.idProject = -1;
      }, err => {
        console.log(err);
      });
    this.services.getDepartement(id)
      .subscribe((data: Departement) => {
        this.departement = data;
        this.currentContrat.departement = this.departement.libelle;

        console.log(this.departement);
      }, err => {
        console.log(err);
      });

    this.projetService.getDepartements()
      .subscribe(res => {
        this.departements = res;
        console.log(res);
      }, err => {
        console.log(err);
      });
  }
  onUpdateContrat(value: any) {
    const id = this.saveProjetService.idProject;
    const liste1 = value.date;
    const liste2 = liste1.split("-");
    value.annee = liste2[0];
    value.mois = liste2[1];
    value.jour = liste2[2];
    this.services.updateContrat(+id, value)
      .subscribe(data => {
        alert("Mise à jour effectuée avec succès")

      }, err => {
        console.log(err);
      });
  }
  onGetProfil(p) {
    this.n = 1;
    this.services.getProfil(p.code)
      .subscribe((data: Profil) => {
        this.profil = data;
        console.log(this.profil);
      }, err => {
        console.log(err);
      })
  }
  onUpdateProfil(value) {
    this.services.updateProfil(value.code, value)
      .subscribe(data => {
        this.ngOnInit();
        this.n = 0;
      }, err => {
        console.log(err);
      })
  }
  onDeleteProfil(p) {
    let conf = confirm("Etes-vous sûre de vouloir supprimer");
    if (conf) {
      this.services.deleteProfil(p.code).subscribe(res => {
          this.ngOnInit();
        }
        , err => {
          console.log(err);

        });
    }

  }

  affectDepartement(value: any) {
    const id2 = this.saveProjetService.idProject;
    this.projetService.affectationDepartemental(this.projetService.host + "/Projets/Affectation/" + id2 + "/Departement/" + value.departement, null)
      .subscribe(res => {
        console.log(res);
        alert("Mise à jour effectuée avec succès")
        this.ngOnInit();

      }, err => {
        console.log(err);
      });
  }

}





