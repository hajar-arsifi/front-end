import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalManager} from 'ngb-modal';
import { ModelServiceService } from '../model-service.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  @ViewChild('ContratCreation') myModal;
  private modalRef;
  constructor(private modalService: ModalManager,private modalSer :ModelServiceService){}

  ngOnInit(): void {
  }
  openModal(){
    
    this.modalSer.modalRef = this.modalService.open(this.myModal, {
      size: "lg",
      modalClass: 'ContratCreation',
      hideCloseButton: false,
      centered: false,
      backdrop: true,
      animation: true,
      keyboard: false,
      closeOnOutsideClick: false,
      backdropClass: "modal-backdrop"
    });
   
    
  }
}
