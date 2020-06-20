import { Component, OnInit,ViewChild } from '@angular/core';
import {Projet} from '../model/projet.model';
import {GestionClientService} from '../services/gestion-client.service';
import {GestionFactureService} from '../services/gestion-facture.service';
import {GestionProjetService} from '../services/gestion-projet.service';
import {GestionProfilService} from '../services/gestion-profil.service';
import {Facture} from '../model/facture.model';
import {Client} from '../model/client.model';
import {SaveProjetService} from '../services/save-projet.service';
import {Profil} from '../model/profil.model';
import {ModalManager} from 'ngb-modal';
import { ModelServiceService } from '../model-service.service';

@Component({
  selector: 'app-detals-contrat',
  templateUrl: './details-contrat.component.html',
  styleUrls: ['./details-contrat.component.css']
})
export class DetailsContratComponent implements OnInit {

  projet : Projet;
  facture : Facture;
  public dateEcheance =new Date();
  client : Client;
  profils : Profil[];
  departement: any;
  montantHT:number=0;
  prixProfil:number;
  @ViewChild('ContratCreation') myModal;
  constructor(private modalService: ModalManager,private modalSer :ModelServiceService,public gestionClientService : GestionClientService, public gestionFactureService : GestionFactureService,
              public gestionProjetService : GestionProjetService, public gestionProfilService : GestionProfilService,
              public saveProjetService : SaveProjetService) { }

  ngOnInit(): void {
    this.onGetClient();
    this.onGetProjet();
    this.onGetFacture();
    this.onGetProfils();
    this.onGetDepartement();
  }

  onGetClient()
  {
    this.gestionClientService.getClientByProject(this.gestionClientService.host + "/Clients/ParProjet/" + this.saveProjetService.idProject)
      .subscribe(data => {
          this.client = data;
        },
        err => {
          console.log(err);
        });
  }
  onGetProjet()
  {
    this.gestionProjetService.getProjectById(this.gestionProjetService.host + "/Projets/" + this.saveProjetService.idProject)
      .subscribe(data => {
          this.projet = data;
        },
        err => {
          console.log(err);
        });
  }
  onGetFacture()
  {
    this.gestionFactureService.getFactureByProject(this.gestionFactureService.host + "/Factures/" + this.saveProjetService.idFacture)
      .subscribe(data => {
          this.facture = data;
          console.log(this.dateEcheance);
          this.dateEcheance.setDate(this.dateEcheance.getDate()+data.dureeEcheance);
          this.facture.montant=this.montantHT;
          console.log(this.dateEcheance);
        },
        err => {
          console.log(err);
        });
  }
  onGetProfils()
  {
    this.gestionProfilService.getProfilByProject(this.gestionProfilService.host + "/Profils/ParProjet/" + this.saveProjetService.idProject)
      .subscribe((data :any)=> {
          this.profils = data;
         for (var i=0;i<this.profils.length;i++){
           this.prixProfil=this.profils[i].tjm*this.profils[i].nombreJourLimite;
           this.prixProfil=+this.prixProfil;
           this.montantHT=this.montantHT+this.prixProfil;
         }
         console.log(this.montantHT);
        },
        err => {
          console.log(err);
        });
       

  }
  onGetDepartement()
  {
    this.gestionProjetService.getDepartementById(this.saveProjetService.idDept)
      .subscribe(data => {
        this.departement = data;
      },
      err => {
        console.log(err);
      });
  }
}
