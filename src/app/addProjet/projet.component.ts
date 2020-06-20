import {Component, Input, OnInit} from '@angular/core';
import {GestionProjetService} from '../services/gestion-projet.service';
import {Projet} from '../model/projet.model';
import {SaveProjetService} from '../services/save-projet.service';
import {HideComponentService} from '../services/hide-component.service';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})
export class ProjetComponent implements OnInit {

  public currentDate = new Date();
  public currentProjet : Projet;
 
  public duree :number=0;
  @Input() public parentData;

  constructor(private gestionProjetService : GestionProjetService, public saveProjet : SaveProjetService, public hideComponentService :HideComponentService) { }

  ngOnInit(): void {
    

  }

  ajouterProjet(value: any) {
 
  this.ngOnInit();
    if(this.parentData != -1)
    {
      this.gestionProjetService.saveProjet(this.gestionProjetService.host+"/Projets/Ajouter/" + this.parentData, value)
        .subscribe(res => {
          this.currentProjet = res;
          this.saveProjet.idProject = this.currentProjet.id;
          console.log(res);
          if(this.currentProjet.type=="Non facturé"){
            this.hideComponentService.showComponent = 4;
            this.hideComponentService.hideComponent=1;
          }
          if(this.currentProjet.type=="Régie" || this.currentProjet.type=="Forfait" ){
            this.hideComponentService.showComponent = 2;
           
          }
      
        },error => {
          console.log(error);
        });
        this.saveProjet.goBack = 1;
     
    }
  }

  back() {
    if(this.saveProjet.idProject != -1)

    {
        this.gestionProjetService.deleteResource(this.gestionProjetService.host+"/Projets/Supprimer/" + this.saveProjet.idProject)
          .subscribe(res => {
            console.log(res);
          },error => {
            console.log(error);
          });
      this.hideComponentService.showComponent = 0;
    }
  }
}
