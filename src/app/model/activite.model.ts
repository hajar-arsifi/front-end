import { Profil } from './profil.model';

export class Activite{
    public id :number;
    public libelle :string;
    public mois :number
    public annee :number ;
    public jour :number;
    public profil :Profil;
    public nombreHeures :number ;
    public estValide :boolean;
}