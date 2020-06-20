import { Component, OnInit } from '@angular/core';
import {GestionFactureService} from '../services/gestion-facture.service';
import {SaveProjetService} from '../services/save-projet.service';
import {HideComponentService} from '../services/hide-component.service';
import {Facture} from '../model/facture.model';
import {GestionProjetService} from '../services/gestion-projet.service';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent implements OnInit {
  public currentFacture: Facture;
  public defaultTaux=1;
  public defaultDevise:string="MAD";

  constructor(private gestionFactureService : GestionFactureService, private gestionProjetService: GestionProjetService, public saveProjet : SaveProjetService, public hideComponentService :HideComponentService) { }

  ngOnInit(): void {
  }

  ajouterFacture(value: any) {
    if(this.saveProjet.idProject != -1)
    {
      this.gestionFactureService.saveFacture(this.gestionFactureService.host+"/Factures/Ajouter/"+ this.saveProjet.idProject, value)
        .subscribe(res => {
          console.log(res);
          this.currentFacture = res;
          this.saveProjet.idFacture = this.currentFacture.numero;
        },error => {
          console.log(error);
        });
      this.hideComponentService.showComponent = 3;
      this.saveProjet.goBack = 2;
    }
  }
  back() {
    if(this.saveProjet.idFacture != -1)
    {
      this.gestionFactureService.deleteResource(this.gestionFactureService.host+"/Factures/Supprimer/" + this.saveProjet.idFacture)
        .subscribe(res => {
          console.log(res);
        },error => {
          console.log(error);
        });
      this.gestionProjetService.deleteResource(this.gestionProjetService.host+"/Projets/Supprimer/" + this.saveProjet.idProject)
        .subscribe(res => {
          console.log(res);
        },error => {
          console.log(error);
        });
      this.hideComponentService.showComponent = 1;
    }
  }

}
