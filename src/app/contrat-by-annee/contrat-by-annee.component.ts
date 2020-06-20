import {Component, OnInit, Input, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ContratsService } from '../services/contrats.service';
import { Router, ActivatedRoute } from '@angular/router';
import {Projet} from '../model/projet.model';
import {SaveProjetService} from '../services/save-projet.service';
import {ModalManager} from 'ngb-modal';
import {GestionProjetService} from '../services/gestion-projet.service';
import {Profil} from '../model/profil.model';
import {Departement} from '../model/departement.model';

@Component({
  selector: 'app-contrat-by-annee',
  templateUrl: './contrat-by-annee.component.html',
  styleUrls: ['./contrat-by-annee.component.css']
})
export class ContratByAnneeComponent implements OnInit {
  @ViewChild('EditContrat') myModal;
  private modalRef;
  contrats :any ;
  public mois :any;
  public size:number=8;
  public clients:any;
  public currentPage:number=0;
  public totalPages:number;
  public pages:Array<number>;
  public annee:number;
  constructor(private services : ContratsService,private router : Router,private activatedRoute: ActivatedRoute,
                private modalService: ModalManager, public saveProjetService : SaveProjetService,
              public projetService: GestionProjetService, ) { }

  ngOnInit(): void {
    this.annee = this.activatedRoute.snapshot.params['annee'];
    this.services.getContratByAnnee(this.annee, this.currentPage, this.size)
      .subscribe((data: any) => {
        this.totalPages = data["totalPages"];
        this.pages = new Array<number>(this.totalPages);
        this.contrats = data;
        console.log(data);
        console.log(this.annee);
      }, err => {
        console.log(err);
      });
    this.services.getMoisByAnnee(this.annee)
      .subscribe((data: any) => {
        this.mois = data;
        console.log(data);
        console.log(this.annee);
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
  public currentContrat: Projet;
  public jour: any;
  public moisEdit: any;
  public profil: Profil;
  public departements: any;
  public departement: Departement;
  public n: number = 0;
  public id: number;
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
  onLoad(id)
  {
    this.id = id;
    this.services.getContrat(id)
      .subscribe((data: Projet) => {
        this.annee = data.annee;
        this.moisEdit = data.mois;
        this.jour = data.jour;
        if (this.moisEdit < 10) {
          this.moisEdit = '0' + this.moisEdit;
        }
        if (this.jour < 10) {
          this.jour = '0' + this.jour;
        }
        let str = this.annee + '-' + this.moisEdit + '-' + this.jour;
        this.currentContrat = data;
        this.services.getProfilsByProjet(id)
          .subscribe(res =>{
            this.currentContrat.profils = res;
            console.log("from profil " + this.currentContrat.profils);
          }, err =>{
            console.log(err);
          });
        this.currentContrat.date = new Date(str);
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
    const liste1 = value.date;
    const liste2 = liste1.split("-");
    value.annee = liste2[0];
    value.mois = liste2[1];
    value.jour = liste2[2];
    this.services.updateContrat(this.id, value)
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
        this.onLoad(this.id);
        this.n = 0;
      }, err => {
        console.log(err);
      })
  }
  onDeleteProfil(p) {
    let conf = confirm("Etes-vous sûre de vouloir supprimer");
    if (conf) {
      this.services.deleteProfil(p.code).subscribe(res => {
          this.onLoad(this.id);
        }
        , err => {
          console.log(err);

        });
    }

  }

  affectDepartement(value: any) {
    this.projetService.affectationDepartemental(this.projetService.host + "/Projets/Affectation/" + this.id + "/Departement/" + value.departement, null)
      .subscribe(res => {
        console.log(res);
        alert("Mise à jour effectuée avec succès");
        this.onLoad(this.id);
      }, err => {
        console.log(err);
      });
  }
}
