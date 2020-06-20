import { Component, OnInit } from '@angular/core';
import {GestionClientService} from '../services/gestion-client.service';
import {Router} from '@angular/router';
import {Client} from '../model/client.model';
import {SaveProjetService} from '../services/save-projet.service';
import {HideComponentService} from '../services/hide-component.service';

@Component({
  selector: 'app-gestionclient',
  templateUrl: './gestionclient.component.html',
  styleUrls: ['./gestionclient.component.css']
})
export class GestionclientComponent implements OnInit {
  public client: Client = new Client();

  constructor(private gestionclientsevice : GestionClientService, private router : Router, public hideComponentService : HideComponentService) { }

  ngOnInit(): void {
  }
  ajouterClient(value: any) {
    console.log(value);
    this.gestionclientsevice.saveClient(this.gestionclientsevice.host + '/Clients/Ajouter', value)
      .subscribe(res => {
        console.log(res);
        this.client = res;
        this.router.navigateByUrl("/clients");
      }, error => {
        console.log("Client existant Veuillez avoir un nom, rc et ice uniques");
      });
  }
}
