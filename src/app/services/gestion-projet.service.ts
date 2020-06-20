import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Projet} from '../model/projet.model';

@Injectable({
  providedIn: 'root'
})
export class GestionProjetService {
  public annee;
  public mois;
  public jour;
  public host : string = "http://localhost:8080";
  constructor(private httpProjet : HttpClient) { }

  public getProjectById(url) : Observable<Projet>
  {
    return this.httpProjet.get<Projet>(url);
  }

  public saveProjet(url, data) : Observable<Projet>
  {
    let date1 = new Date(data.dateContrat);
    let date2=new Date(data.dateFin);
    let d1=date1.getTime()/86400000;
    let d2=date2.getTime()/86400000;
    return this.httpProjet.post<Projet>(url, {
      nom : data.nomProjet,
      description : data.description,
      duree : Number(d2-d1).toFixed(0),
      etat : "Non commencé",
      type : data.type,
      annee : data.dateContrat.split("-")[0],
      mois : data.dateContrat.split("-")[1],
      jour : data.dateContrat.split("-")[2],
      anneeFin :data.dateFin.split("-")[0],
      moisFin :data.dateFin.split("-")[1],
      jourFin :data.dateFin.split("-")[2],
      archive : false
    });
  }
 
  public deleteResource(url)
  {
    return this.httpProjet.delete(url);
  }
  public getDepartementById(idDept : number)
  {
    return this.httpProjet.get(this.host + "/Departements/" + idDept);
  }
  public getDepartements()
  {
    return this.httpProjet.get(this.host + "/Departements");
  }
  public  affectationDepartemental(url,data)
  {
    return this.httpProjet.put(url,data);
  }
}
