import { Component, OnInit} from '@angular/core';
import { ContratsService } from '../services/contrats.service';

@Component({
  selector: 'app-dropdown-clients',
  templateUrl: './dropdown-clients.component.html',
  styleUrls: ['./dropdown-clients.component.css']
})
export class DropdownClientsComponent implements OnInit {
  clients :any;

  constructor(private services :ContratsService) { }


  ngOnInit(): void {
    this.services.getClients()
    .subscribe(data =>{
      this.clients=data;
      console.log(this.clients);
    },err=>{
      console.log(err);
    });
  }


}
