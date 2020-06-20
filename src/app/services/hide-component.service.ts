import { Injectable } from '@angular/core';
import {GestionClientService} from './gestion-client.service';
import {ModalManager} from 'ngb-modal';

@Injectable({
  providedIn: 'root'
})
export class HideComponentService {
  public hideComponent=0;
  public showComponent = 0;
  public hideModel = 0;
  public showInput=0;
  public modalRef : any;
  public hideForm=0;
  public reportingProjet=0;
  public chooseCritere=0;
  public reportingParAnnee=0;
  public reportingParMois=0;
  public reportingParJour=0;
  constructor(public modalService: ModalManager) { }
}
