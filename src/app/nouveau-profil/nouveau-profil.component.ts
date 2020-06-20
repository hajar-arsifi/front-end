import { Component, OnInit } from '@angular/core';
import { ContratsService } from '../services/contrats.service';
import { SaveProjetService } from '../services/save-projet.service';
import {EditContratComponent} from '../edit-contrat/edit-contrat.component';
import { ModalManager } from 'ngb-modal';
import { ModelServiceService } from '../model-service.service';

@Component({
  selector: 'app-nouveau-profil',
  templateUrl: './nouveau-profil.component.html',
  styleUrls: ['./nouveau-profil.component.css']
})
export class NouveauProfilComponent implements OnInit {
 public profil;
  constructor(private services: ContratsService,private saveProject :SaveProjetService,private modalManager: ModalManager,
    private modalService: ModelServiceService) { }

  ngOnInit(): void {
  }
  ajouterProfil(value :any){
    console.log(value);
    const id=this.saveProject.idProject;
    console.log(id);
   this.services.saveProfil(id,value)
    .subscribe((data :any)=>{
     this.profil=data;
      console.log(data);
    },err=>{
      console.log(err);
    });
  this.ngOnInit();
   this.modalManager.close(this.modalService.modalRef);

  }
}
