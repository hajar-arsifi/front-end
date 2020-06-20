import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaveProjetService {

  public idProject = -1;
  public idFacture = -1;
  public idDept = -1;
  public goBack = 0;
  public idClient: -1;
  constructor() { }
}
