import { Component, OnInit } from '@angular/core';
import {GestionClientService} from '../services/gestion-client.service';
import {Router} from '@angular/router';
import {Client} from '../model/client.model';
import {SaveProjetService} from '../services/save-projet.service';
import {HideComponentService} from '../services/hide-component.service';

@Component({
  selector: 'app-contrat-creation',
  templateUrl: './contrat-creation.component.html',
  styleUrls: ['./contrat-creation.component.css']
})
export class ContratCreationComponent implements OnInit {
  public message: any = -1;

  constructor(private gestionclientsevice : GestionClientService, private router : Router, public hideComponentService :HideComponentService) {
  }

  ngOnInit(): void {
  }

}
