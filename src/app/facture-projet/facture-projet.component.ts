import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GestionFactureService } from '../services/gestion-facture.service';
import { Facture } from '../model/facture.model';
import { Client } from '../model/client.model';
import { Projet } from '../model/projet.model';
import { ContratsService } from '../services/contrats.service';
import { Profil } from '../model/profil.model';
import { Activite } from '../model/activite.model';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { Detail } from '../model/detail.model';
import { DetailServiceService } from '../services/detail-service.service';
import { HideComponentService } from '../services/hide-component.service';
import { SaveProjetService } from '../services/save-projet.service';
@Component({
  selector: 'app-facture-projet',
  templateUrl: './facture-projet.component.html',
  styleUrls: ['./facture-projet.component.css']
})
export class FactureProjetComponent implements OnInit {
  public details: Detail[];
  public detail: Detail;
  public facture: Facture;
  public factureUpdated: Facture;
  public currentFacture: Facture;
  public savedFacture: Facture;
  public profil: Profil;
  public projet: Projet;
  public client: Client;
  public profils: Profil[];
  public factures: Facture[];
  public activites: Activite[];
  public activites2: Activite[];
  public nombreHeures: number = 0;
  public nombreHeures2: number = 0;
  public annee;
  public mois;
  public jour;
  public jour1: number = 0;
  public jour2: number = 0;
  public mois1: number = 0;
  public mois2: number = 0;
  public annee1: number = 0;
  public annee2: number = 0;
  public sousPrix: number = 0;
  public idFacture: number = 0;
  public tauxFacture: number = 0;
  public lastFacture: Facture;
  public montant: number = 0;
  public jourFacture: number = 0;
  public facturesGenerees: Facture[];
  public moisFacture: number = 0;
  public anneeFacture: number = 0;
  public host: string = "http://localhost:8080";
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private factureService: GestionFactureService,
    private services: ContratsService, private detailService: DetailServiceService, public hideComponent: HideComponentService, public saveProjet: SaveProjetService) { }

  ngOnInit(): void {
    const idProjet = this.activatedRoute.snapshot.params['id'];
    this.services.getContrat(idProjet)
      .subscribe((data: Projet) => {
        this.projet = data;
        this.factureService.getFacturesGeneres(idProjet)
          .subscribe((data: Facture[]) => {
            this.facturesGenerees = data;
            if (data.length == 0) {
              this.annee = this.projet.annee;
              this.mois = this.projet.mois;
              this.jour = this.projet.jour;
              if (this.mois < 10) {
                this.mois = '0' + this.mois;
              }
              if (this.jour < 10) {
                this.jour = '0' + this.jour;
              }
              let str = this.annee + '-' + this.mois + '-' + this.jour;
              let date = new Date(str);
              date.setDate(date.getDate() + 30);
              this.anneeFacture = date.getFullYear();
              this.moisFacture = date.getMonth() + 1;
              this.jourFacture = date.getDate();
              this.jour1 = this.projet.jour;
              this.jour2 = this.jourFacture;
              this.mois1 = this.projet.mois;
              this.mois2 = this.moisFacture;
              this.annee1 = this.projet.annee;
              this.annee2 = this.anneeFacture;
            }

            else {
              const idProjet = this.activatedRoute.snapshot.params['id'];
              this.factureService.getLastFacture(idProjet)
                .subscribe((data: Facture) => {
                  this.lastFacture = data;
                  this.annee = this.lastFacture.anneeCreation;
                  this.mois = this.lastFacture.moisCreation;
                  this.jour = this.lastFacture.jourCreation;
                  this.factureService.saveFacture(this.host + "/Factures/Ajouter/" + idProjet, this.lastFacture)
                    .subscribe((data1: Facture) => {
                      this.savedFacture = data1;
                      this.tauxFacture = data1.taux;
                      if (this.mois < 10) {
                        this.mois = '0' + this.mois;
                      }
                      if (this.jour < 10) {
                        this.jour = '0' + this.jour;
                      }
                      let str = this.annee + '-' + this.mois + '-' + this.jour;
                      let date = new Date(str);
                      date.setDate(date.getDate() + 30);
                      this.anneeFacture = date.getFullYear();
                      this.moisFacture = date.getMonth() + 1;
                      this.jourFacture = date.getUTCDate();
                      this.jour1 = this.lastFacture.jourCreation;
                      this.jour2 = this.jourFacture;
                      this.mois1 = this.lastFacture.moisCreation;
                      this.mois2 = this.moisFacture;
                      this.annee1 = this.lastFacture.anneeCreation;
                      this.annee2 = this.anneeFacture;
                    }, err => {
                      console.log(err);
                    });
                }, err => {
                  console.log(err);
                });
            }

            this.services.getProfilsByProjet(idProjet)
              .subscribe((data: any) => {
                this.profils = data;
                this.factureService.getFacturesByProjet(idProjet)
                  .subscribe((data: Facture[]) => {
                    this.factures = data;
                    this.tauxFacture = this.factures[0].taux;
                    if(this.facturesGenerees.length==0){
                      this.idFacture=this.factures[0].numero;
                      for (let i = 0; i < this.profils.length; i++) {
                        let idProfil = this.profils[i].code;
                        if (this.projet.type == "Régie") {
                          this.factureService.getActiviteByProfilAndDate(idProfil, this.jour1, this.jour2, this.mois1, this.mois2, this.annee1, this.annee2)
                            .subscribe((data1: any) => {
                              this.sousPrix = (this.profils[i].tjm * data1 * this.tauxFacture) / 8;
                              this.detail = new Detail(null, data1, this.sousPrix);
                              this.detailService.addDetailByFactureAndProfil( this.idFacture, this.profils[i].code, this.detail)
                                .subscribe((data: Detail) => {
                                }, err => {
  
                                  console.log(err);
                                });
                            }
                              , err => {
                                console.log(err);
                              });
                        }
  
                        else if (this.projet.type == "Forfait") {
                          this.factureService.getActivitesByProfil(idProfil)
                            .subscribe((data1: any) => {
                              this.sousPrix = (this.profils[i].tjm * data1 * this.tauxFacture) / 8;
                              this.detail = new Detail(null, data1, this.sousPrix);
                              this.detailService.addDetailByFactureAndProfil( this.idFacture, this.profils[i].code, this.detail)
                                .subscribe((data: Detail) => {
                                }, err => {
  
                                  console.log(err);
                                });
                              console.log(this.detail);
                            }, err => {
                              console.log(err);
                            });
                          this.anneeFacture = new Date().getFullYear();
                          this.moisFacture = new Date().getMonth() + 1;
                          this.jourFacture = new Date().getUTCDate();
  
                        }
                      }
                      }
                      else{
                        this.factureService.getLastFacture(idProjet)
                        .subscribe((data3: Facture) => {
                          this.idFacture= data3.numero;
                          this.tauxFacture = data3.taux;
                          for (let i = 0; i < this.profils.length; i++) {
                            let idProfil = this.profils[i].code;
                            if (this.projet.type == "Régie") {
                              this.factureService.getActiviteByProfilAndDate(idProfil, this.jour1, this.jour2, this.mois1, this.mois2, this.annee1, this.annee2)
                                .subscribe((data1: any) => {
                                  this.sousPrix = (this.profils[i].tjm * data1 * this.tauxFacture) / 8;
                                  this.detail = new Detail(null, data1, this.sousPrix);
                                  this.detailService.addDetailByFactureAndProfil( this.idFacture, this.profils[i].code, this.detail)
                                    .subscribe((data: Detail) => {
                                    }, err => {
      
                                      console.log(err);
                                    });
                                }
                                  , err => {
                                    console.log(err);
                                  });
                            }
      
                            else if (this.projet.type == "Forfait") {
                              this.factureService.getActivitesByProfil(idProfil)
                                .subscribe((data1: any) => {
                                  this.sousPrix = (this.profils[i].tjm * data1 * this.tauxFacture) / 8;
                                  this.detail = new Detail(null, data1, this.sousPrix);
                                  this.detailService.addDetailByFactureAndProfil( this.idFacture, this.profils[i].code, this.detail)
                                    .subscribe((data: Detail) => {
                                    }, err => {
      
                                      console.log(err);
                                    });
                                }, err => {
                                  console.log(err);
                                });
                              this.anneeFacture = new Date().getFullYear();
                              this.moisFacture = new Date().getMonth() + 1;
                              this.jourFacture = new Date().getUTCDate();
                              this.factureService.genererFacture(this.idFacture, this.anneeFacture, this.moisFacture, this.jourFacture)
                              .subscribe((data: Facture) => {
                                this.facture = data;
                                this.detailService.getDetailsByFacture(data.numero)
                                  .subscribe((obj: any) => {
                                    this.details = obj;
                                    for (let j = 0; j < this.details.length; j++) {
                                      this.montant = this.montant + this.details[j].sousPrix;
                                      this.detailService.getProfilByDetail(this.details[j].id)
                                        .subscribe((data2: Profil) => {
                                          this.profil = data2;
                                          this.details[j].nomProfil = this.profil.libelle;
                                          this.details[j].tjm = this.profil.tjm;
                                        }, err => {
                                          console.log(err);
                                        });
        
                                      this.profil = null;
                                    }
                                    this.factureService.modifierMontant(this.idFacture,this.montant)
                              .subscribe((data: Facture) => {
                                this.facture = data;
                              }, err => {
                                console.log(err);
                              });
        
                                  }, err => {
                                    console.log(err);
                                  });
                                this.facture.montant = this.montant;
                              }, err => {
                                console.log(err);
                              });
      
                            }
                          }
  
                        }, err => {
                            console.log(err);
                          });
                      }      
                    if(this.facturesGenerees.length==0){
                      this.idFacture = this.factures[0].numero;

                      this.factureService.genererFacture(this.idFacture, this.anneeFacture, this.moisFacture, this.jourFacture)
                      .subscribe((data: Facture) => {
                        this.facture = data;
                        this.detailService.getDetailsByFacture(data.numero)
                          .subscribe((obj: any) => {
                            this.details = obj;
                            for (let j = 0; j < this.details.length; j++) {
                              this.montant = this.montant + this.details[j].sousPrix;
                              this.detailService.getProfilByDetail(this.details[j].id)
                                .subscribe((data2: Profil) => {
                                  this.profil = data2;
                                  this.details[j].nomProfil = this.profil.libelle;
                                  this.details[j].tjm = this.profil.tjm;
                                }, err => {
                                  console.log(err);
                                });

                              this.profil = null;
                            }
                            this.factureService.modifierMontant(this.idFacture,this.montant)
                      .subscribe((data: Facture) => {
                        this.facture = data;
                      }, err => {
                        console.log(err);
                      });

                          }, err => {
                            console.log(err);
                          });
                        this.facture.montant = this.montant;
                      }, err => {
                        console.log(err);
                      });
                      }
                      else{
                        this.factureService.getLastFacture(idProjet)
                        .subscribe((data3: Facture) => {
                          this.idFacture = data3.numero;
                          this.tauxFacture = data3.taux;
                          this.factureService.genererFacture(this.idFacture, this.anneeFacture, this.moisFacture, this.jourFacture)
                          .subscribe((data: Facture) => {
                            this.facture = data;
                            this.detailService.getDetailsByFacture(data.numero)
                              .subscribe((obj: any) => {
                                this.details = obj;
                                for (let j = 0; j < this.details.length; j++) {
                                  this.montant = this.montant + this.details[j].sousPrix;
                                  this.detailService.getProfilByDetail(this.details[j].id)
                                    .subscribe((data2: Profil) => {
                                      this.profil = data2;
                                      this.details[j].nomProfil = this.profil.libelle;
                                      this.details[j].tjm = this.profil.tjm;
                                    }, err => {
                                      console.log(err);
                                    });
    
                                  this.profil = null;
                                }
                                this.factureService.modifierMontant(this.idFacture,this.montant)
                               .subscribe((data: Facture) => {
                              this.facture = data;
                             }, err => {
                             console.log(err);
                            });
    
                              }, err => {
                                console.log(err);
                              });
                            this.facture.montant = this.montant;
                          }, err => {
                            console.log(err);
                          });
  
                        }, err => {
                            console.log(err);
                          });
                      }
                   
                    
                  }, err => {
                    console.log(err);
                  });
              }, err => {
                console.log(err);
              });
          }, err => {
            console.log(err);
          });
      }, err => {
        console.log(err);
      });
  }

  public telechargerPDF() {
    var element = document.getElementById('facture')
    html2canvas(element).then((canvas) => {
      console.log(canvas);
      var imgData = canvas.toDataURL('image/png')
      var doc = new jspdf()
      var imgHeight = canvas.height * 270 / canvas.width + 10;
      doc.addImage(imgData, 5, 5, 200, imgHeight)
      const idProjet = this.activatedRoute.snapshot.params['idProjet'];
      const idFacture = this.activatedRoute.snapshot.params['idFacture'];
      doc.save(this.projet.nom + idProjet + '_Facture_' + idFacture);
    })
  }
  update() {
    this.hideComponent.hideForm = 1;
  }
  onUpdateFacture(value) {
    console.log(value);
    console.log(this.facture.numero)
    this.factureService.modifierFacture(this.facture.numero, value)
      .subscribe((data) => {
        console.log(data);
        this.router.navigateByUrl("AfficherFacture/" + this.idFacture + "/" + this.projet.id);
      }, err => {
        console.log(err);
      });

  }
  onUpdateDetail(value) {
    console.log(value);
    console.log(value.commentaire)
    this.detailService.updateDetail(value.id, value.commentaire)
      .subscribe((data) => {
        console.log(data);
        this.router.navigateByUrl("AfficherFacture/" + this.idFacture + "/" + this.projet.id);
      }, err => {
        console.log(err);
      });


  }


}