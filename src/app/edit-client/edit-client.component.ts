import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Client } from '../model/Client.model';
import { GestionClientService } from '../services/gestion-client.service';
@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {

  public currentClient : Client;
  public clientUpdated: Client;

  constructor(private router: Router,private activatedRoute: ActivatedRoute,private services: GestionClientService) { }

  ngOnInit(): void {
    const id=this.activatedRoute.snapshot.params['id'];
  
    console.log(this.activatedRoute.snapshot);
    this.services.getClient(+id)
    .subscribe((data : Client)=>{

      this.currentClient=data;
    },err=>{
      console.log(err);
    });
  }
    onUpdateContrat(value:any){
      const id=this.activatedRoute.snapshot.params['id'];
    this.services.updateClient(+id,value)
    .subscribe(data=>{
      alert("Mise à jour effectuée avec succès")

    }, err=>{
      console.log(err);

    })

   }

  }
