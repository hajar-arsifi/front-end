export class Projet {
  public id : number;
  public nom : string;
  public description : string;
  public duree : number;
  public etat : string;
  public type : string;
  public annee : number;
  public mois : number;
  public jour : number;
  public anneeFin : number;
  public moisFin : number;
  public jourFin : number;
  public date:Date;
  public dateFin:Date;
  public archive : boolean;
  departement: any;
  profils: any;
}
