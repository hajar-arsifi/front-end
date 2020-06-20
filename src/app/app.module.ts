import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContratCreationComponent } from './contrat-creation/contrat-creation.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { GestionclientComponent } from './addClient/gestionclient.component';
import { ProjetComponent } from './addProjet/projet.component';
import { ProfilComponent } from './addProfil/profil.component';
import { FactureComponent } from './addFacture/facture.component';
import { SelectClientComponent } from './select-client/select-client.component';
import { DetailsContratComponent } from './details-contrat/details-contrat.component';
import { DropdownClientsComponent } from './dropdown-clients/dropdown-clients.component';
import { DetailsProjetComponent } from './details-projet/details-projet.component';
import { ContratByClientComponent } from './contrat-by-client/contrat-by-client.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { TableauProjetsComponent } from './tableau-projets/tableau-projets.component';
import { DropdownEtatsComponent } from './dropdown-etats/dropdown-etats.component';
import { ProjetTermineComponent } from './projet-termine/projet-termine.component';
import { ProjetEnCoursComponent } from './projet-en-cours/projet-en-cours.component';
import { ProjetEnAttenteComponent } from './projet-en-attente/projet-en-attente.component';
import { DropdownAnneesComponent } from './dropdown-annees/dropdown-annees.component';
import { ContratByAnneeComponent } from './contrat-by-annee/contrat-by-annee.component';
import { ContratByMoisComponent } from './contrat-by-mois/contrat-by-mois.component';
import { ListClientsComponent } from './list-clients/list-clients.component';
import {ListeContratsComponent} from './liste-contrats/liste-contrats.component';
import {EditContratComponent} from './edit-contrat/edit-contrat.component';
import { AffectationDepartementalComponent } from './affectation-departemental/affectation-departemental.component';
import { ModalModule } from 'ngb-modal';
import {NgbAlertModule, NgbModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import { ContratArchiveeComponent } from './contrat-archivee/contrat-archivee.component';
import {NouveauProfilComponent} from './nouveau-profil/nouveau-profil.component';
import { FactureProjetComponent } from './facture-projet/facture-projet.component';
import { AfficherFactureComponent } from './afficher-facture/afficher-facture.component';
import { ReportingComponent } from './reporting/reporting.component';
import  {ChartsModule} from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    ContratCreationComponent,
    GestionclientComponent,
    ProjetComponent,
    ProfilComponent,
    FactureComponent,
    SelectClientComponent,
    DetailsContratComponent,
    DropdownEtatsComponent,
    ListeContratsComponent,
    EditContratComponent,
    DropdownClientsComponent,
    DetailsProjetComponent,
    ContratByClientComponent,
    DropdownComponent,
    TableauProjetsComponent,
    DropdownEtatsComponent,
    ProjetTermineComponent,
    ProjetEnCoursComponent,
    ProjetEnAttenteComponent,
    DropdownAnneesComponent,
    ContratByAnneeComponent,
    ContratByMoisComponent,
    ListClientsComponent,
    AffectationDepartementalComponent,
    ContratArchiveeComponent,
    NouveauProfilComponent,
    EditContratComponent,
    FactureProjetComponent,
    AfficherFactureComponent,
    ReportingComponent
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ModalModule,
    NgbPaginationModule,
    NgbAlertModule,
    FormsModule,
    NgbModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
