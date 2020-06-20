export class Detail{
    public id:number;
    public commentaire :string;
    public nombreHeures: number;
    public sousPrix : number;
    public nomProfil:string;
    public tjm:number;

    constructor(commentaire:string,nombreHeures:number,sousPrix:number){
        this.commentaire=commentaire
        this.nombreHeures=nombreHeures;
        this.sousPrix=sousPrix;
      

        
    }
}