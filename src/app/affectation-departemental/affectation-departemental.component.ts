import { Component, OnInit ,ViewChild} from '@angular/core';
import {GestionProjetService} from '../services/gestion-projet.service';
import {Projet} from '../model/projet.model';
import {ActivatedRoute, Router} from '@angular/router';
import {SaveProjetService} from '../services/save-projet.service';
import {HideComponentService} from '../services/hide-component.service';
import {ModalManager} from 'ngb-modal';
import { ModelServiceService } from '../model-service.service';
@Component({
  selector: 'app-affectation-departemental',
  templateUrl: './affectation-departemental.component.html',
  styleUrls: ['./affectation-departemental.component.css']
})
export class AffectationDepartementalComponent implements OnInit {

  public contrats : any;
  public departements : any;
  idDept: number;
  projet: Projet;
  @ViewChild('ContratCreation') myModal;
  constructor(private modalService: ModalManager,private modalSer :ModelServiceService,public projetService : GestionProjetService, public route : Router, public saveProjetService : SaveProjetService, public hideComponentService :HideComponentService) { }

  ngOnInit(): void {
    this.getDepartement();
    this.onGetProjet();
  }
  getDepartement()
  {
    this.projetService.getDepartements()
      .subscribe(res => {
        this.departements = res;
        console.log(res);
      }, err => {
        console.log(err);
      });
  }
  affectProject() {
    this.projetService.affectationDepartemental(this.projetService.host + "/Projets/Affectation/" + this.saveProjetService.idProject + "/Departement/" + this.idDept, null)
      .subscribe(res => {
        console.log(res);
        this.saveProjetService.idDept = this.idDept;
        this.hideComponentService.showComponent = 0;
        
        this.route.navigateByUrl("/details");
        this.modalService.close(this.modalSer.modalRef);
       

      }, err => {
        console.log(err);
      });
  }
  onGetProjet()
  {
    this.projetService.getProjectById(this.projetService.host + "/Projets/" + this.saveProjetService.idProject)
      .subscribe(res => {
        console.log(res);
        this.projet = res;
      }, err => {
        console.log(err);
      });
  }
}
