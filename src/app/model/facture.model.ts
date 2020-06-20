import { Detail } from './detail.model';

export class Facture {
  public numero : number;
  public etat : string;
  public montant : number;
  public anneeEcheance : number;
  public moisEcheance : number;
  public jourEcheance : number;
  public dureeEcheance :number;
  public dateFacturation :Date;
  public anneeFacturation :number;
  public moisFacturation:number;
  public jourFacturation :number;
  public jourCreation:number;
  public moisCreation:number;
  public anneeCreation:number;
  public idProjet : number;
  public devise : string;
  public taux : number=1;
  public tva : number=0;
  public details : Detail [];
}
