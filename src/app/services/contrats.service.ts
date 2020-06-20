import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Profil} from '../model/profil.model';

@Injectable({
  providedIn: 'root'
})
export class ContratsService {
  public n=0;
  private host:String="http://localhost:8080";

  constructor(private httpClient : HttpClient) { }
  public getContrats(page:number,size:number){
    return this.httpClient.get(this.host+"/Projets?page="+page+"&size="+size);
  }
  public getContratsArchives(page:number,size:number){
    return this.httpClient.get(this.host+"/Projets/Archives?page="+page+"&size="+size);
  }
  public deleteContrat(id){
    return this.httpClient.put(this.host+"/Projets/Archiver/"+id, null);
  }
  public getContrat(id) {
    return  this.httpClient.get(this.host+"/Projets/"+id);
  }
  public updateContrat(id,data){
    return this.httpClient.put(this.host+"/Projets/Modifier/"+id,data);
  }
  public getClients(){
    return this.httpClient.get(this.host+"/SortedClients");

  }
  public getContratByClient(id,page:number,size:number){
    return this.httpClient.get(this.host+"/Projets/ParClientId/"+id+"?page="+page+"&size="+size);
  }
  public getProfilsByProjet(id){
    return this.httpClient.get(this.host+"/Profils/ParProjet/"+id);

  }
  public getFacturesByProjet(id){
    return this.httpClient.get(this.host+"/Factures/ParIdProjet/"+id);

  }

 public getProjetsTermines(page:number,size:number){
  return this.httpClient.get(this.host+"/Projets/ParEtat/termine?page="+page+"&size="+size);

 }
 public getProjetsEnAttente(page:number,size:number){
  return this.httpClient.get(this.host+"/Projets/ParEtat/en attente?page="+page+"&size="+size);

 }
 public getProjetsEnCours(page:number,size:number){
  return this.httpClient.get(this.host+"/Projets/ParEtat/en cours?page="+page+"&size="+size);

 }

 public getAnneesOfProjets(){
  return this.httpClient.get(this.host+"/Projets/ListAnnees");

 }
 public getContratByAnnee(annee,page:number,size:number){
  return this.httpClient.get(this.host+"/Projets/ParDate/Annee/"+annee+"?page="+page+"&size="+size);

 }
 public getMoisByAnnee(annee : number){
   return this.httpClient.get(this.host + "/Projets/ListMoisParAnnee/" + annee)

 }
 public getContratByAnneeAndMois(annee,mois,page:number,size:number){
  return this.httpClient.get(this.host+"/Projet/ParDate/Annee/"+annee+"/Mois/"+mois+"?page="+page+"&size="+size);
}
  public getClientByProjet(id:number){
    return this.httpClient.get(this.host+"/Clients/ParProjet/"+id);
  }
  public getDepartement(id){
    return this.httpClient.get(this.host+"/Departements/ParProjet/"+id);
  }
  public getProfil(id) {
    return this.httpClient.get(this.host+"/Profils/"+id);
  }
  public deleteProfil(id){
    return this.httpClient.delete(this.host+"/Profils/Supprimer/"+id);
  }
  public updateProfil(id,data){
    return this.httpClient.put(this.host+"/Profils/Modifier/"+id,data);
  }
  public saveProfil(id, data) : Observable<Profil>
  {
    return this.httpClient.post <Profil>(this.host+"/Profils/Ajouter/"+id,data);
  }
  public listeProjets(){
    return this.httpClient.get(this.host+"/ListeProjets");
}
}