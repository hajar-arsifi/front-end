import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {GestionClientService} from '../services/gestion-client.service';
import {Router} from '@angular/router';
import {HideComponentService} from '../services/hide-component.service';

@Component({
  selector: 'app-select-client',
  templateUrl: './select-client.component.html',
  styleUrls: ['./select-client.component.css']
})
export class SelectClientComponent implements OnInit {

  public clients;
  public code;
  @Output() public childEvent = new EventEmitter();

  constructor(private gestionclientsevice : GestionClientService, private hideComponentService : HideComponentService) {
    this.onGetClients();
  }

  ngOnInit(): void {
  }

  onGetClients()
  {
    this.gestionclientsevice.getClients()
      .subscribe(res => {
        this.clients = res;
        console.log(this.clients);
      },error => {
        console.log(error);
      })
  }

  sendIdClient() {
    this.childEvent.emit(this.code);
    this.hideComponentService.showComponent = 1;
  }
}
