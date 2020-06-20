import { Component, OnInit } from '@angular/core';
import { ContratsService } from '../services/contrats.service';
import { Projet } from '../model/projet.model';
import { HideComponentService } from '../services/hide-component.service';
import { Chart } from 'chart.js';  
import { ReportingService } from '../services/reporting.service';
@Component({
  selector: 'app-reporting',
  templateUrl: './reporting.component.html',
  styleUrls: ['./reporting.component.css']
})
export class ReportingComponent implements OnInit {
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public test=false;
  public caEstimeInverse:number[]=new Array();
  public caEstime:number[]=this.caEstimeInverse.reverse();
   public caRealiseInverse:number[]=new Array();
  public caRealise:number[]=this.caRealiseInverse.reverse();
  public barChartType = 'line';
  public barChartLegend = true;
  public barChartData = [
    {data: this.caEstime, label: 'CA Estimé'},
    {data: this.caRealise, label: 'CA Réalisé'}
  ];
  public selectedCritere=0;
  public selectedAnneeDebut=0;
  public selectedAnneeFin=0;
  public projets :Projet[];
  public anneeDebut:number=0;
  public anneeFin:number=0;
  public differenceAnnees:number=0;
  public selectedProjet=0;
  public projet:Projet;
  public listeAnnees:number[]=new Array();
  public anneesProjet :number[]=new Array();
 
 
 
  public LineChart: any;
  constructor(private projetService : ContratsService,public hideComponent:HideComponentService ,private reportingService: ReportingService) { }

  ngOnInit(): void {
    this.projetService.listeProjets()
    .subscribe((data:any) => {
      this.projets=data;
      console.log(data);
    }, err => {
      console.log(err);
    });
  }
  onGetCritere(event){
    if(this.selectedCritere==1){
      this.hideComponent.chooseCritere=1;
    }
  }
  onModelChange(event){

    this.hideComponent.reportingProjet=1;
    this.projetService.getContrat(this.selectedProjet)
    .subscribe((data:Projet) => {
      this.projet=data;
      this.anneeDebut=this.projet.annee;
      this.anneeFin=this.projet.anneeFin;
      this.differenceAnnees=this.anneeFin-this.anneeDebut;
     if(this.test==false){
      for(let i=0;i<=this.differenceAnnees;i++){
        this.listeAnnees.push(this.anneeDebut+i)
      }
      this.anneesProjet=this.listeAnnees;
     }
      console.log(this.anneesProjet)

      for(let j=0;j<this.anneesProjet.length;j++){
        this.reportingService.CAEParProjetParAnnee(this.anneesProjet[j],this.projet.id)
        .subscribe((data:number) => {
          this.caEstimeInverse.push(data);
        }, err => {
          console.log(err);
        });
        this.reportingService.CARParProjetParAnnee(this.anneesProjet[j],this.projet.id)
        .subscribe((data:number) => {
          this.caRealiseInverse.push(data);
        }, err => {
          console.log(err);
        });
      
      }
 
    
      console.log(this.caEstimeInverse);
    }, err => {
      console.log(err);
    });
  
    

  }
   onSelectAnneeDebut(event){
    const newListeAnnee:number[]=new Array();
     this.anneeDebut=this.selectedAnneeDebut;
     this.test=true;
     this.anneesProjet=null;
     console.log(this.anneeDebut);
     this.anneeFin=this.projet.anneeFin;
     this.differenceAnnees=this.anneeFin-this.anneeDebut;
     
     for(let i:number=0 ;i<=this.differenceAnnees;i++){
       newListeAnnee.push(+this.anneeDebut+i)

     }
      this.anneesProjet=newListeAnnee;
      console.log(newListeAnnee)
   }
 


   
   onSelectAnneeFin(event){
    const newListeAnnee2:number[]=new Array();
    this.anneeFin=this.selectedAnneeFin;
    this.test=true;
    this.anneesProjet=null;
    console.log(this.anneeFin);
    this.differenceAnnees=this.anneeFin-this.anneeDebut;
    
    for(let i:number=0 ;i<=this.differenceAnnees;i++){
    
      newListeAnnee2.push(+this.anneeDebut+i)

    }
     this.anneesProjet=newListeAnnee2;
     console.log(newListeAnnee2)
  }
  reportingParAnnee(){
    this.hideComponent.reportingParAnnee=1;
    this.hideComponent.reportingParMois=0;
  }
  reportingParMois(){
    this.hideComponent.reportingParMois=1;
    this.hideComponent.reportingParAnnee=0;
  }

}
