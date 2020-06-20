import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Facture} from '../model/facture.model';

@Injectable({
  providedIn: 'root'
})
export class GestionFactureService {

  public host : string = "http://localhost:8080";
  constructor(private httpFacture : HttpClient) { }

  public getFactureByProject(url) : Observable<Facture>
  {
    return this.httpFacture.get<Facture>(url);
  }

  public saveFacture(url, data) : Observable<Facture>
  {

    return this.httpFacture.post<Facture>(url, {
      devise : data.devise,
      taux : data.taux,
      tva:data.tva,
      dureeEcheance :data.dureeEcheance,
      etat : 'en attente'
    });
  }
  public deleteResource(url)
  {
    return this.httpFacture.delete(url);
  }

  public getFacture(id){
    return this.httpFacture.get(this.host+"/Factures/"+id);
  }
  public getProjetByFacture(id){
    return this.httpFacture.get(this.host+"/Projet/ParFacture/"+id);
  }
   public getClientByFacture(id){
    return this.httpFacture.get(this.host+"/Client/ParFacture/"+id);
  }
  public genererFacture(id,annee,mois,jour){
    return this.httpFacture.put(this.host+"/Factures/Generer/"+id+"/Date/"+jour+"/"+mois+"/"+annee,null);
  }
  public getFacturesByProjet(id){
    return this.httpFacture.get(this.host+"/Factures/ParIdProjet/"+id);
  }
  public getFacturesGeneres(id){
    return this.httpFacture.get(this.host+"/FacturesGenerees/"+id);
  }
 
 
  public archiverFacture(id){
     return this.httpFacture.put(this.host+"/Factures/Archiver/"+id,null);
  }
 public getFacturesArchives(id,page:number,size:number){
     return this.httpFacture.get(this.host+"/Factures/ParIdProjet/Archives/"+id+"?page="+page+"&size="+size);
 }
 public getFacturesNonArchives(id,page:number,size:number){
  return this.httpFacture.get(this.host+"/Factures/ParIdProjet/Non_Archives/"+id+"?page="+page+"&size="+size);
}
 public validerPaiement(id,jour,mois,annee){
    return this.httpFacture.put(this.host+"/Factures/ValiderPaiement/"+id+"/Date/"+jour+"/"+mois+"/"+annee,null);
 }
 public getLastFacture(id){
  return this.httpFacture.get(this.host+"/LastFacture/"+id);
 }
 public getActiviteByProfilAndDate(id,jour1,jour2,mois1,mois2,annee1,annee2){
  return this.httpFacture.get(this.host+"/NombreHeuresActivites/ParProfil/"+id+"/DateBetween/"+jour1+"/"+mois1+"/"+annee1+"/And/"+jour2+"/"+mois2+"/"+annee2);
 }
 public getActivitesByProfil(id){
  return this.httpFacture.get(this.host+"/NombreHeuresActivites/ParProfil/"+id)
 }
 public modifierFacture(id,data){
  return this.httpFacture.put(this.host+"/Factures/Modifier/"+id,data);
 }
 public modifierMontant(id,montant:number){
  return this.httpFacture.put(this.host+"/Factures/Modifier/"+id+"/Montant/"+montant,null);
 }

}
