import { Component, OnInit } from '@angular/core';
import { ContratsService } from '../services/contrats.service';

@Component({
  selector: 'app-dropdown-annees',
  templateUrl: './dropdown-annees.component.html',
  styleUrls: ['./dropdown-annees.component.css']
})
export class DropdownAnneesComponent implements OnInit {
public annees:any;
  constructor(private services :ContratsService) { }

  ngOnInit(): void {
    this.services.getAnneesOfProjets()
    .subscribe(data =>{
      this.annees=data;
      console.log(this.annees);
    },err=>{
      console.log(err);    
    });  
  }
  }


