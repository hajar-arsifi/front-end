import { Activite } from './activite.model';

export class Profil {
  public code : number;
  public libelle : string;
  public nombreJourLimite : number;
  public tjm : number;
  public idProjet : number;
  public activites :Activite[];
  public prix :number=0;
  public nombreHeures :number=0;



}
