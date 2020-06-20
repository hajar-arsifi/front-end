import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Profil} from '../model/profil.model';

@Injectable({
  providedIn: 'root'
})
export class GestionProfilService {

  public host : string = "http://localhost:8080";
  constructor(private httpProfil : HttpClient) { }

  public getProfilByProject(url) : Observable<Profil>
  {
    return this.httpProfil.get<Profil>(url);
  }

  public saveProfil1(url, data)
  {
    return this.httpProfil.post(url, {
      libelle: data.profil1,
      nombreJourLimite: data.nbjour1,
      tjm : data.tarif1
    });
  }
  public saveProfil2(url, data) : Observable<Profil>
  {
    return this.httpProfil.post<Profil>(url, {
      libelle: data.profil2,
      nombreJourLimite: data.nbjour2,
      tjm : data.tarif2
    });
  }
  public saveProfil3(url, data) : Observable<Profil>
  {
    return this.httpProfil.post<Profil>(url, {
      libelle: data.profil3,
      nombreJourLimite: data.nbjour3,
      tjm : data.tarif3
    });
  }
  public saveProfil4(url, data) : Observable<Profil>
  {
    return this.httpProfil.post<Profil>(url, {
      libelle: data.profil4,
      nombreJourLimite: data.nbjour4,
      tjm : data.tarif4
    });
  }
  public saveProfil5(url, data) : Observable<Profil>
  {
    return this.httpProfil.post<Profil>(url, {
      libelle: data.profil5,
      nombreJourLimite: data.nbjour5,
      tjm : data.tarif5
    });
  }
  public saveProfil6(url, data) : Observable<Profil>
  {
    return this.httpProfil.post<Profil>(url, {
      libelle: data.profil6,
      nombreJourLimite: data.nbjour6,
      tjm : data.tarif6
    });
  }
}
