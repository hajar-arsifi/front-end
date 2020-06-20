import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Client} from '../model/client.model';
import {Projet} from '../model/projet.model';

@Injectable({
  providedIn: 'root'
})
export class GestionClientService {

  public host : string = "http://localhost:8080";
  constructor(private httpClient : HttpClient) { }


  public saveClient(url, data) : Observable<Client>
  {
    return this.httpClient.post<Client>(url, {
      nom : data.nom,
      adresse : data.adresse,
      rc : data.rc,
      ice : data.ice,
      archive : false
    });
  }
  public getClients()
  {
    return this.httpClient.get(this.host + "/SortedClients");
  }
  public getClientByProject(url) : Observable<Client>
  {
    return this.httpClient.get<Client>(url);
  }
  public getPageClients(page:number,size:number){
    return this.httpClient.get(this.host + "/Clients?page=" + page + "&size=" + size);
  }
  getPageClientsArchives(page: number, size: number) {
    return this.httpClient.get(this.host + "/Clients/Archives?page=" + page + "&size=" + size);
  }
  public deleteClient(id:number){
    return this.httpClient.put(this.host + "/Clients/Archiver/"+id, null);

  }
  public getClient(id) {
    return  this.httpClient.get(this.host+"/Clients/" + id);
  }
  public updateClient(id, data){
    return this.httpClient.put(this.host+"/Clients/Modifier/" + id, data);
  }
  public getClientByKeyWord(currentPage: number, size: number, motCle: any) {
    return this.httpClient.get(this.host + "/Clients/ParNom/" + motCle + "?page=" + currentPage + "&size=" + size);
  }
}
