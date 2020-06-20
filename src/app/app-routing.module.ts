import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContratCreationComponent} from './contrat-creation/contrat-creation.component';
import {GestionclientComponent} from './addClient/gestionclient.component';
import {DetailsContratComponent} from './details-contrat/details-contrat.component';
import {ContratByMoisComponent} from './contrat-by-mois/contrat-by-mois.component';
import {ProjetEnCoursComponent} from './projet-en-cours/projet-en-cours.component';
import {DropdownAnneesComponent} from './dropdown-annees/dropdown-annees.component';
import {ContratByAnneeComponent} from './contrat-by-annee/contrat-by-annee.component';
import {ListClientsComponent} from './list-clients/list-clients.component';
import {ProjetTermineComponent} from './projet-termine/projet-termine.component';
import {ProjetEnAttenteComponent} from './projet-en-attente/projet-en-attente.component';
import {DropdownEtatsComponent} from './dropdown-etats/dropdown-etats.component';
import {ListeContratsComponent} from './liste-contrats/liste-contrats.component';
import {EditContratComponent} from './edit-contrat/edit-contrat.component';
import {DropdownClientsComponent} from './dropdown-clients/dropdown-clients.component';
import {DetailsProjetComponent} from './details-projet/details-projet.component';
import {ContratByClientComponent} from './contrat-by-client/contrat-by-client.component';
import {AffectationDepartementalComponent} from './affectation-departemental/affectation-departemental.component';
import {ContratArchiveeComponent} from './contrat-archivee/contrat-archivee.component';
import { Facture } from './model/facture.model';
import { FactureProjetComponent } from './facture-projet/facture-projet.component';
import { AfficherFactureComponent } from './afficher-facture/afficher-facture.component';
import { ReportingComponent } from './reporting/reporting.component';




const routes: Routes = [
  {
    path : "createClient" , component : GestionclientComponent
  },
  {
    path : "createContrat" , component : ContratCreationComponent
  },
  {
    path : "details" , component : DetailsContratComponent
  },
  {
    path: "contrats" , component : ListeContratsComponent
  },
  {
    path: "contratsArchivees" , component : ContratArchiveeComponent
  },
  {
    path:"edit-contrat/:id" , component : EditContratComponent
  },
  {
    path:"dropdown-clients" , component : DropdownClientsComponent
  },
  {
    path:"details-projet/:id" , component : DetailsProjetComponent
  },
  {
    path:"contrat-by-client/:id" , component : ContratByClientComponent
  },
  {
    path:"dropdown-etats" , component : DropdownEtatsComponent
  },
  {
    path:"projets-termines" , component : ProjetTermineComponent
  },
  {
    path:"projets-en-attente" , component : ProjetEnAttenteComponent
  },
  {
    path:"projets-en-cours" , component : ProjetEnCoursComponent
  },
  {
    path:"dropdown-annees" , component : DropdownAnneesComponent
  },
  {
    path:"contrat-by-annee/:annee" , component : ContratByAnneeComponent
  },
  {
    path :"contrat-by-mois/:mois/:annee" , component : ContratByMoisComponent
  },
  {
    path : "clients" , component : ListClientsComponent
  },
  {
    path : "affectation" , component : AffectationDepartementalComponent
  },
  {
    path : "facture/:id" , component : FactureProjetComponent
  },
  {
    path : "AfficherFacture/:idFacture/:idProjet" , component : AfficherFactureComponent
  },
  {
    path : "Reporting" , component : ReportingComponent
  }
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
