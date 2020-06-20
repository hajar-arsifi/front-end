import { Component, OnInit } from '@angular/core';
import {SaveProjetService} from '../services/save-projet.service';
import {GestionProfilService} from '../services/gestion-profil.service';
import {Router} from '@angular/router';
import {HideComponentService} from '../services/hide-component.service';
import { GestionFactureService } from '../services/gestion-facture.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  public nbProfil: number = 0;
  public nb: number = 0;
  public nb1: number = 0;
  public nb2: number = 0;
  public nb3: number = 0;
  public nb4: number = 0;
  public nb5: number = 0;
  public nb6: number = 0;
  public nb7: number = 0;
  public nb8: number = 0;
  public nb9: number = 0;
  public nb10: number = 0;
  public nb11: number = 0;
  public nb12: number = 0;

  constructor(private gestionProfilService : GestionProfilService, private saveProjet : SaveProjetService, 
    public hideComponentService :HideComponentService, private gestionFactureService:GestionFactureService) { }

  ngOnInit(): void {
  }

  addRowProfils() {
    this.nbProfil = 1;
  }

  ajouterProfils(value: any) {
    console.log(value);
    if(this.saveProjet.idProject != -1) {
      if(this.nb >= 1)
      {
        this.gestionProfilService.saveProfil1(this.gestionProfilService.host + "/Profils/Ajouter/" + this.saveProjet.idProject, value)
          .subscribe(res => {
            console.log(res);
          }, error => {
            console.log(error);
          });
        if(this.nb >= 2)
        {
          this.gestionProfilService.saveProfil2(this.gestionProfilService.host + "/Profils/Ajouter/" + this.saveProjet.idProject, value)
            .subscribe(res => {
              console.log(res);
            }, error => {
              console.log(error);
            });
          if(this.nb >= 3)
          {
            this.gestionProfilService.saveProfil3(this.gestionProfilService.host + "/Profils/Ajouter/" + this.saveProjet.idProject, value)
              .subscribe(res => {
                console.log(res);
              }, error => {
                console.log(error);
              });
            if(this.nbProfil == 1) {
              if(this.nb >= 4)
              {
                this.gestionProfilService.saveProfil4(this.gestionProfilService.host + '/Profils/Ajouter/' + this.saveProjet.idProject, value)
                  .subscribe(res => {
                    console.log(res);
                  }, error => {
                    console.log(error);
                  });
                if(this.nb >= 5)
                {
                  this.gestionProfilService.saveProfil5(this.gestionProfilService.host + '/Profils/Ajouter/' + this.saveProjet.idProject, value)
                    .subscribe(res => {
                      console.log(res);
                    }, error => {
                      console.log(error);
                    });
                  if(this.nb >= 6)
                  {
                    this.gestionProfilService.saveProfil6(this.gestionProfilService.host + '/Profils/Ajouter/' + this.saveProjet.idProject, value)
                      .subscribe(res => {
                        console.log(res);
                      }, error => {
                        console.log(error);
                      });
                  }
                }
              }
            }
          }
        }
      }
      this.hideComponentService.showComponent = 4;
    }
    
  } 

  Increment(event) {
    this.nb++;
    console.log(this.nb);
  }

  sommeTarif() {
    return this.nb1 + this.nb3 + this.nb5 + this.nb7 + this.nb9 + this.nb11;
  }

  sommeJour() {
    return this.nb2 + this.nb4 + this.nb6 + this.nb8 + this.nb10 + this.nb11;
  }

  TotalPrix() {
      return this.nb1 * this.nb2 + this.nb3 * this.nb4 + this.nb5 * this.nb6 +
      this.nb7 * this.nb8 + this.nb9 * this.nb10 + this.nb11 * this.nb12;
  }

}
