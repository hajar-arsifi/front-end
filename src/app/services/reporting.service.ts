import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReportingService {

  public host : string = "http://localhost:8080";
  constructor(private httpClient : HttpClient) { }
  public countConges()
  {
    return this.httpClient.get<number>(this.host + "/Activities/Conges/" + (+new Date().getMonth() + 1));
  }
  public countAbsences()
  {
    return this.httpClient.get<number>(this.host + "/Activities/Absences/" + (+new Date().getMonth() + 1));
  }
  public countActivities()
  {
    return this.httpClient.get<number>(this.host + "/Activities/Calculable/" + (+new Date().getMonth() + 1));
  }

  /*****************************Salarie*****************************/
  public CAEParSalarieParJour(jour, mois, annee, id)
  {
    return this.httpClient.get(this.host + "/ChiffreAffaireEstime/ParSalarie/" + id + "/ParDate/" + jour + "/" + mois + "/" + annee);
  }
  public CAEParSalarieParMois(mois, annee, id)
  {
    return this.httpClient.get(this.host + "/ChiffreAffaireEstime/ParSalarie/" + id + "/ParDate/" + mois + "/" + annee);
  }
  public CAEParSalarieParAnnee(annee, id)
  {
    return this.httpClient.get(this.host + "/ChiffreAffaireEstime/ParSalarie/" + id + "/ParDate/" + annee);
  }
  public CARParSalarieParJour(jour, mois, annee, id)
  {
    return this.httpClient.get(this.host + "/ChiffreAffaireRealise/ParSalarie/" + id + "/ParDate/" + jour + "/" + mois + "/" + annee);
  }
  public CARParSalarieParMois(mois, annee, id)
  {
    return this.httpClient.get(this.host + "/ChiffreAffaireRealise/ParSalarie/" + id + "/ParDate/" + mois + "/" + annee);
  }
  public CARParSalarieParAnnee(annee, id)
  {
    return this.httpClient.get(this.host + "/ChiffreAffaireRealise/ParSalarie/" + id + "/ParDate/" + annee);
  }
  /*****************************Equipe*****************************/
  public CAEParEquipeParJour(jour, mois, annee, id)
  {
    return this.httpClient.get(this.host + "/ChiffreAffaireEstime/ParEquipe/" + id + "/ParDate/" + jour + "/" + mois + "/" + annee);
  }
  public CAEParEquipeParMois(mois, annee, id)
  {
    return this.httpClient.get(this.host + "/ChiffreAffaireEstime/ParEquipe/" + id + "/ParDate/" + mois + "/" + annee);
  }
  public CAEParEquipeParAnnee(annee, id)
  {
    return this.httpClient.get(this.host + "/ChiffreAffaireEstime/ParEquipe/" + id + "/ParDate/" + annee);
  }
  public CARParEquipeParJour(jour, mois, annee, id)
  {
    return this.httpClient.get(this.host + "/ChiffreAffaireRealise/ParEquipe/" + id + "/ParDate/" + jour + "/" + mois + "/" + annee);
  }
  public CARParEquipeParMois(mois, annee, id)
  {
    return this.httpClient.get(this.host + "/ChiffreAffaireRealise/ParEquipe/" + id + "/ParDate/" + mois + "/" + annee);
  }
  public CARParEquipeParAnnee(annee, id)
  {
    return this.httpClient.get(this.host + "/ChiffreAffaireRealise/ParEquipe/" + id + "/ParDate/" + annee);
  }
  /*****************************Departement*****************************/
  public CAEParDepartementParJour(jour, mois, annee, id)
  {
    return this.httpClient.get(this.host + "/ChiffreAffaireEstime/ParDepartement/" + id + "/ParDate/" + jour + "/" + mois + "/" + annee);
  }
  public CAEParDepartementParMois(mois, annee, id)
  {
    return this.httpClient.get(this.host + "/ChiffreAffaireEstime/ParDepartement/" + id + "/ParDate/" + mois + "/" + annee);
  }
  public CAEParDepartementParAnnee(annee, id)
  {
    return this.httpClient.get(this.host + "/ChiffreAffaireEstime/ParDepartement/" + id + "/ParDate/" + annee);
  }
  public CARParDepartementParJour(jour, mois, annee, id)
  {
    return this.httpClient.get(this.host + "/ChiffreAffaireRealise/ParDepartement/" + id + "/ParDate/" + jour + "/" + mois + "/" + annee);
  }
  public CARParDepartementParMois(mois, annee, id)
  {
    return this.httpClient.get(this.host + "/ChiffreAffaireRealise/ParDepartement/" + id + "/ParDate/" + mois + "/" + annee);
  }
  public CARParDepartementParAnnee(annee, id)
  {
    return this.httpClient.get(this.host + "/ChiffreAffaireRealise/ParDepartement/" + id + "/ParDate/" + annee);
  }
  /*****************************Societe*****************************/
  public CAEParSocieteParJour(jour, mois, annee)
  {
    return this.httpClient.get(this.host + "/ChiffreAffaireEstime/ParSociete/ParDate/" + jour + "/" + mois + "/" + annee);
  }
  public CAEParSocieteParMois(mois, annee)
  {
    return this.httpClient.get(this.host + "/ChiffreAffaireEstime/ParSociete/ParDate/" + mois + "/" + annee);
  }
  public CAEParSocieteParAnnee(annee)
  {
    return this.httpClient.get(this.host + "/ChiffreAffaireEstime/ParSociete/ParDate/" + annee);
  }
  public CARParSocieteParJour(jour, mois, annee)
  {
    return this.httpClient.get(this.host + "/ChiffreAffaireRealise/ParSociete/ParDate/" + jour + "/" + mois + "/" + annee);
  }
  public CARParSocieteParMois(mois, annee)
  {
    return this.httpClient.get(this.host + "/ChiffreAffaireRealise/ParSociete/ParDate/" + mois + "/" + annee);
  }
  public CARParSocieteParAnnee(annee)
  {
    return this.httpClient.get(this.host + "/ChiffreAffaireRealise/ParEquParSocieteipe/ParDate/" + annee);
  }
  /*****************************PROJET*************************************** */
  public CAEParProjetParJour(jour, mois, annee, id)
  {
    return this.httpClient.get(this.host + "/ChiffreAffaireEstime/ParProjet/" + id + "/ParDate/" + jour + "/" + mois + "/" + annee);
  }
  public CAEParProjetParMois(mois, annee, id)
  {
    return this.httpClient.get(this.host + "/ChiffreAffaireEstime/ParProjet/" + id + "/ParDate/" + mois + "/" + annee);
  }
  public CAEParProjetParAnnee(annee, id)
  {
    return this.httpClient.get(this.host + "/ChiffreAffaireEstime/ParProjet/" + id + "/ParDate/" + annee);
  }
  public CARParProjetParJour(jour, mois, annee, id)
  {
    return this.httpClient.get(this.host + "/ChiffreAffaireRealise/ParProjet/" + id + "/ParDate/" + jour + "/" + mois + "/" + annee);
  }
  public CARParProjetParMois(mois, annee, id)
  {
    return this.httpClient.get(this.host + "/ChiffreAffaireRealise/ParProjet/" + id + "/ParDate/" + mois + "/" + annee);
  }
  public CARParProjetParAnnee(annee, id)
  {
    return this.httpClient.get(this.host + "/ChiffreAffaireRealise/ParProjet/" + id + "/ParDate/" + annee);
}
 /*****************************PROFIL*************************************** */
 public CAEParProfilParJour(jour, mois, annee, id)
 {
   return this.httpClient.get(this.host + "/ChiffreAffaireEstime/ParProfil/" + id + "/ParDate/" + jour + "/" + mois + "/" + annee);
 }
 public CAEParProfilParMois(mois, annee, id)
 {
   return this.httpClient.get(this.host + "/ChiffreAffaireEstime/ParProfil/" + id + "/ParDate/" + mois + "/" + annee);
 }
 public CAEParProfilParAnnee(annee, id)
 {
   return this.httpClient.get(this.host + "/ChiffreAffaireEstime/ParProfil/" + id + "/ParDate/" + annee);
 }
 public CARParProfilParJour(jour, mois, annee, id)
 {
   return this.httpClient.get(this.host + "/ChiffreAffaireRealise/ParProfil/" + id + "/ParDate/" + jour + "/" + mois + "/" + annee);
 }
 public CARParProfilParMois(mois, annee, id)
 {
   return this.httpClient.get(this.host + "/ChiffreAffaireRealise/ParProfil/" + id + "/ParDate/" + mois + "/" + annee);
 }
 public CARParProfilParAnnee(annee, id)
 {
   return this.httpClient.get(this.host + "/ChiffreAffaireRealise/ParProfil/" + id + "/ParDate/" + annee);
}
/**********************************CLIENT**************************************************************/
public CAEParClientParJour(jour, mois, annee, id)
{
  return this.httpClient.get(this.host + "/ChiffreAffaireEstime/ParClient/" + id + "/ParDate/" + jour + "/" + mois + "/" + annee);
}
public CAEParClientParMois(mois, annee, id)
{
  return this.httpClient.get(this.host + "/ChiffreAffaireEstime/ParClient/" + id + "/ParDate/" + mois + "/" + annee);
}
public CAEParClientParAnnee(annee, id)
{
  return this.httpClient.get(this.host + "/ChiffreAffaireEstime/ParClient/" + id + "/ParDate/" + annee);
}
public CARParClientParJour(jour, mois, annee, id)
{
  return this.httpClient.get(this.host + "/ChiffreAffaireRealise/ParClient/" + id + "/ParDate/" + jour + "/" + mois + "/" + annee);
}
public CARParClientParMois(mois, annee, id)
{
  return this.httpClient.get(this.host + "/ChiffreAffaireRealise/ParClient/" + id + "/ParDate/" + mois + "/" + annee);
}
public CARParClientParAnnee(annee, id)
{
  return this.httpClient.get(this.host + "/ChiffreAffaireRealise/ParClient/" + id + "/ParDate/" + annee);
}
public caParAnnee(id,annees){
  return this.httpClient.get(this.host + "/listeChiffreAffaire/"+annees+"/projet/"+id);
}
}