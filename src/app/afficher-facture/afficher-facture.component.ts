import { Component, OnInit, ViewChild} from '@angular/core';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { Router ,ActivatedRoute} from '@angular/router';
import { GestionFactureService } from '../services/gestion-facture.service';
import { Facture } from '../model/facture.model';
import { Client } from '../model/client.model';
import { Projet } from '../model/projet.model';
import { ContratsService } from '../services/contrats.service';
import { Profil } from '../model/profil.model';
import { Activite } from '../model/activite.model';
import { ModalManager } from 'ngb-modal';
import { ModelServiceService } from '../model-service.service';
import { SaveProjetService } from '../services/save-projet.service';
import { HideComponentService } from '../services/hide-component.service';
import { Detail } from '../model/detail.model';
import { DetailServiceService } from '../services/detail-service.service';
import { FormArrayName } from '@angular/forms';
@Component({
  selector: 'app-afficher-facture',
  templateUrl: './afficher-facture.component.html',
  styleUrls: ['./afficher-facture.component.css']
})
export class AfficherFactureComponent implements OnInit {
 
  public currentFacture:Facture;
  public facture : Facture;
  public profils :Profil[];
  public projet :Projet;
  public client :Client;
  public activites : Activite[];
  public activites2 : Activite[];
  public nombreHeures: number=0;
  public nombreHeures2: number=0;
  public montant  :number=0 ;
  public mois;
  public annee ;
  public jour;
  public jour11: number=0;
  public jour12: number=0;
  public jour21: number=0;
  public jour22: number=0;
  public mois1: number=0;
  public mois2: number=0;
  public annee1: number=0;
  public annee2: number=0;
  public detail:Detail;
  public details:Detail [];
  public sousPrix:number;
  public profil:Profil;
  public sousTotaux :number[]=new  Array();
  public n=0;

  public host:string="http://localhost:8080";
  constructor(private router: Router,private activatedRoute: ActivatedRoute,private factureService :GestionFactureService,
    private services :ContratsService,private modalService: ModalManager, private modalSer: ModelServiceService,
    public hideComponent :HideComponentService,private detailService:DetailServiceService) { }
   
  ngOnInit(): void {
    this.hideComponent.hideForm=0;
    const idProjet=this.activatedRoute.snapshot.params['idProjet'];
    const idFacture=this.activatedRoute.snapshot.params['idFacture'];
    this.services.getContrat(idProjet)
    .subscribe((data :Projet)=>{
      this.projet=data;
      console.log(data);
    },err=>{
      console.log(err);
    });
    this.services.getClientByProjet(idProjet)
    .subscribe((data :Client)=>{
      this.client=data;
    },err=>{
      console.log(err);
    });
    this.factureService.getFacture(idFacture)
    .subscribe((data :Facture)=>{
      this.facture=data;
            this.detailService.getDetailsByFacture(idFacture)
            .subscribe((obj: any) => {
              this.details = obj;
              for (let i=0;i<obj.length;i++){
                this.sousTotaux.push(this.details[i].sousPrix);
              }

              for (let j = 0; j < this.details.length; j++) {
                this.detailService.getProfilByDetail(this.details[j].id)
                  .subscribe((data2: Profil) => {
                    this.profil = data2;
                    this.details[j].nomProfil = this.profil.libelle;
                    this.details[j].tjm = this.profil.tjm;
                  }, err => {
                    console.log(err);
                  });
                  
                this.profil = null;
              }
            }, err => {
              console.log(err);
            });

        }, err => {
          console.log(err);
        });

      }
  
  public telechargerPDF(){
   
     var element =document.getElementById('facture')
     html2canvas(element).then((canvas)=>{
       console.log(canvas);
       var imgData=canvas.toDataURL('image/png')
       var doc=new jspdf()
       var imgHeight=canvas.height*270/canvas.width+10;
       doc.addImage(imgData,5,5,200,imgHeight)    
       const idProjet=this.activatedRoute.snapshot.params['idProjet'];
       const idFacture=this.activatedRoute.snapshot.params['idFacture'];
       doc.save(this.projet.nom+'_Facture_'+idFacture); 

       
     })
 
  }
update(){
  this.hideComponent.hideForm=1;

}
onUpdateFacture(value){
  console.log(value);
  console.log(this.facture.numero)
  this.factureService.modifierFacture(this.facture.numero,value)
  .subscribe((data)=>{
    this.hideComponent.hideForm=0;
    this.ngOnInit();
  },err=>{
    console.log(err);
  });
  this.detailService.updateDetail(value.id,value)
  .subscribe((data)=>{
   this.ngOnInit();
  },err=>{
    console.log(err);
  });
 

}

}