import { Component, OnInit, Input } from '@angular/core';
import { ContratsService } from '../services/contrats.service';
import { Projet } from '../model/projet.model';
import { SaveProjetService } from '../services/save-projet.service';
import { Profil } from '../model/profil.model';
import { GestionProjetService } from '../services/gestion-projet.service';
import { Departement } from '../model/departement.model';

@Component({
  selector: 'app-edit-contrat',
  templateUrl: './edit-contrat.component.html',
  styleUrls: ['./edit-contrat.component.css']
})
export class EditContratComponent implements OnInit {
  @Input() public currentId;
  public currentContrat: Projet;
  public annee: any;
  public mois: any;
  public jour: any;
  public profil: Profil;
  public departements: any;
  public departement: Departement;
  public n: number = 0;
  constructor(private services: ContratsService, private saveProject: SaveProjetService, private projetService: GestionProjetService) { }

  ngOnInit(): void {
    const id = this.saveProject.idProject;
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
        this.currentContrat.date = new Date(str);
        console.log(this.currentContrat.date);

      }, err => {
        console.log(err);
      });
    const id2 = this.saveProject.idProject;
    this.services.getDepartement(+id2)
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
    const id = this.saveProject.idProject;
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
    const id2 = this.saveProject.idProject;
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





