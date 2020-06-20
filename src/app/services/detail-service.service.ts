import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Detail } from '../model/detail.model';
@Injectable({
  providedIn: 'root'
})
export class DetailServiceService {
  private host:String="http://localhost:8080";

  constructor(private httpClient : HttpClient) { } 
  public getDetailsByFacture(id){
   return   this.httpClient.get(this.host+"/Details/ParFacture/"+id);
  }
  public addDetailByFactureAndProfil(id,code,data): Observable <Detail>
  {
    return  this.httpClient.post <Detail>(this.host+"/Details/Ajouter/ParFacture/"+id+"/ParProfil/"+code,data);
    
  }
  public getProfilByDetail(id){
    return   this.httpClient.get(this.host+"/Profils/ParDetail/"+id);
  }
  public updateDetail(id,data){
    return this.httpClient.put(this.host+"/Details/Modifier/"+id,data);
  }

  


}
