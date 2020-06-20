import { Component, OnInit } from '@angular/core';
import {ContratsService} from '../services/contrats.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contrat-archivee',
  templateUrl: './contrat-archivee.component.html',
  styleUrls: ['./contrat-archivee.component.css']
})
export class ContratArchiveeComponent implements OnInit {

  contrats :any;

  public size:number=6;
  public currentPage:number=0;
  public totalPages:number;
  public pages:Array<number>;


  constructor(private services : ContratsService,private router : Router) { }

  ngOnInit(): void {
    this.services.getContratsArchives(this.currentPage,this.size)
      .subscribe((data :any)=>{
        this.totalPages=data["totalPages"];
        this.pages=new Array<number>(this.totalPages);
        this.contrats=data;
        console.log(data);
      },err=>{
        console.log(err);
      });
  }
  onPageContrat(i){
    this.currentPage=i;
    this.ngOnInit();
  }
}
