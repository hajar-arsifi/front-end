import { Injectable } from '@angular/core';
import {Projet} from '../model/projet.model';
import {Profil} from '../model/profil.model';
import {Departement} from '../model/departement.model';
import {ContratsService} from './contrats.service';
import {GestionProjetService} from './gestion-projet.service';
import {ActivatedRoute, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EditContratService {

  constructor(private services: ContratsService, private projetService: GestionProjetService) { }

  public currentContrat: Projet;
  public annee: any;
  public mois: any;
  public jour: any;
  public profil: Profil;
  public departements: any;
  public departement: Departement;
  public n: number = 0;
  public id: number ;


  init(id, n, currentContrat, annee, jour, mois, profil, departement, departements)
  {
    this.id = id;
    this.n = n;
    this.currentContrat = currentContrat;
    this.annee = annee;
    this.mois = mois;
    this.jour = jour;
    this.profil = profil;
    this.departement = departement;
    this.departements = departements;
  }

  onLoad(id , n, currentContrat, annee, jour, mois, profil, departement, departements)
  {
    this.init(id, n, currentContrat, annee, jour, mois, profil, departement, departements)
    this.services.getContrat(id)
      .subscribe((data: Projet) => {
        console.log(data);
        this.id = id;
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
        currentContrat = data;
        this.currentContrat.date = new Date(str);
      }, err => {
        console.log(err);
      });
    this.services.getDepartement(id)
      .subscribe((data: Departement) => {
        this.departement = data;
        departement = data;
        this.currentContrat.departement = this.departement.libelle;
        currentContrat = this.currentContrat;
        console.log(this.departement);
      }, err => {
        console.log(err);
      });

    this.projetService.getDepartements()
      .subscribe(res => {
        this.departements = res;
        departements = this.departements
        console.log(res);
      }, err => {
        console.log(err);
      });
  }
  public onUpdateContrat(value: any) {
    const liste1 = value.date;
    const liste2 = liste1.split("-");
    value.annee = liste2[0];
    value.mois = liste2[1];
    value.jour = liste2[2];
    this.services.updateContrat(+this.id, value)
      .subscribe(data => {
        alert("Mise à jour effectuée avec succès")

      }, err => {
        console.log(err);
      });
  }
  public onGetProfil(p) {
    this.n = 1;
    this.services.getProfil(p.code)
      .subscribe((data: Profil) => {
        this.profil = data;
        console.log(this.profil);
      }, err => {
        console.log(err);
      });
  }
  public onUpdateProfil(value) {
    this.services.updateProfil(value.code, value)
      .subscribe(data => {
        this.onLoad(this.id, this.n, this.currentContrat, this.annee, this.jour, this.mois, this.profil, this.departement, this.departements);
        this.n = 0;
      }, err => {
        console.log(err);
      })
  }
  public onDeleteProfil(p) {
    let conf = confirm("Etes-vous sûre de vouloir supprimer");
    if (conf) {
      this.services.deleteProfil(p.code).subscribe(res => {
          this.onLoad(this.id, this.n, this.currentContrat, this.annee, this.jour, this.mois, this.profil, this.departement, this.departements);
        }
        , err => {
          console.log(err);

        });
    }

  }
  public affectDepartement(value: any) {
    this.projetService.affectationDepartemental(this.projetService.host + "/Projets/Affectation/" + this.id + "/Departement/" + value.departement, null)
      .subscribe(res => {
        console.log(res);
        alert("Mise à jour effectuée avec succès")
        this.onLoad(this.id, this.n, this.currentContrat, this.annee, this.jour, this.mois, this.profil, this.departement, this.departements);
      }, err => {
        console.log(err);
      });
  }
}
