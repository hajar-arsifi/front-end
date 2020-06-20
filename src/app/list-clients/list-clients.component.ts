import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalManager} from 'ngb-modal';
import { GestionClientService } from '../services/gestion-client.service';
import {SaveProjetService} from '../services/save-projet.service';
import {Client} from '../model/client.model';
@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.css']
})
export class ListClientsComponent implements OnInit {
  public clients: any;
  public clientsArchives: any = null;
  public size: number = 4;
  public currentPage: number = 0;
  public totalPages: number;
  public pages: Array<number>;
  public motCle;
  @ViewChild('ClientCreation') myModal;
  private modalRef;
  @ViewChild('EditClient') myModal2;
  private modalRef2;
  archive : boolean = false;
  private id: any;

  constructor(private services: GestionClientService, private modalService: ModalManager) { }

  ngOnInit(): void {
    console.log(this.motCle);
    this.services.getPageClients(this.currentPage, this.size)
      .subscribe((data: any) => {
        this.totalPages = data["totalPages"];
        this.pages = new Array<number>(this.totalPages);
        this.clients = data;
        console.log(data);
      }, err => {
        console.log(err);
      });
    this.services.getPageClientsArchives(this.currentPage, this.size)
      .subscribe((data: any) => {
        this.totalPages = data["totalPages"];
        this.pages = new Array<number>(this.totalPages);
        this.clientsArchives = data;
        console.log(data);
      }, err => {
        console.log(err);
      });
  }

  onPageClient(i) {
    this.currentPage = i;
    if(typeof this.motCle==="undefined"){
      this.ngOnInit();
    }
    else{
      this.services.getClientByKeyWord(this.currentPage, this.size,this.motCle)
      .subscribe((data: any) => {
        this.totalPages = data["totalPages"];
        this.pages = new Array<number>(this.totalPages);
        this.clients = data;
        console.log(data);
      }, err => {
        console.log(err);
      });
    }
  }
  onDeleteClient(c) {
    let conf = confirm("Etes-vous sûre de vouloir supprimer");
    if (conf) {
      this.services.deleteClient(c.code).subscribe(res => {
        this.ngOnInit();
      },err => {
          console.log(err);
        });
    }
  }
  onChercher(value:any){
    this.currentPage=0;

    if(typeof value.motCle==="undefined"){
      this.ngOnInit();
    }
    else{

    this.services.getClientByKeyWord(this.currentPage, this.size,value.motCle)
    .subscribe((data: any) => {
      this.totalPages = data["totalPages"];
      this.pages = new Array<number>(this.totalPages);
      this.clients = data;
      console.log(data);
    }, err => {
      console.log(err);
    });
  }}
  openModal(){
    this.modalRef = this.modalService.open(this.myModal, {
      size: "lg",
      modalClass: 'mymodal',
      hideCloseButton: false,
      centered: false,
      backdrop: true,
      animation: true,
      keyboard: false,
      closeOnOutsideClick: false,
      backdropClass: "modal-backdrop"
    });
  }
  closeModal(){
    //this.hideComponentService.modalService.close(this.hideComponentService.modalRef);
    //or this.modalRef.close();
  }
  openModalEdit(id){
    this.modalRef2 = this.modalService.open(this.myModal2, {
      size: "lg",
      modalClass: 'EditClient',
      hideCloseButton: false,
      centered: false,
      backdrop: true,
      animation: true,
      keyboard: false,
      closeOnOutsideClick: false,
      backdropClass: "modal-backdrop"
    });
    this.onGet(id);
  }
  public currentClient : Client;
  onGet(id)
  {
    this.id = id;
    console.log("id client in edit modal " + id);
    this.services.getClient(+id)
      .subscribe((data : Client)=>{
        this.currentClient=data;
      },err=>{
        console.log(err);
      });
  }
  onUpdateContrat(value:any){
    console.log("id client in edit modal " + this.id);
    this.services.updateClient(+this.id,value)
      .subscribe(data=>{
        alert("Mise à jour effectuée avec succès")
      }, err=>{
        console.log(err);
      })
  }
}
