

import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../services/produit.service';
import { Produit } from '../model/produit.model';

import { ActivatedRoute,Router } from '@angular/router';
import { Categorie } from '../model/categorie.model';


@Component({
selector: 'app-update-produit',
templateUrl: './update-produit.component.html',
styles: []
})
export class UpdateProduitComponent implements OnInit {
  categories! : Categorie[];
  updatedCatId! : number;
  currentProduit = new Produit();
  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,
              private produitService: ProduitService){}
 /* ngOnInit() {
    // console.log(this.route.snapshot.params.id);
    this.currentProduit = this.produitService.consulterProduit(this.activatedRoute.snapshot. params['id']);
    console.log(this.currentProduit);
  } */
  ngOnInit() {
    this.currentProduit = this.produitService.consulterProduit(this.activatedRoute.snapshot.params['id'])/*.
    subscribe( prod =>{ this.currentProduit = prod; } )*/ ;

    this.categories = this.produitService.listeCategories();
    this.updatedCatId=this.currentProduit.categorie.idCat;
    }
  /*updateProduit() {
    this.produitService.updateProduit(this.currentProduit).subscribe(prod => {
    this.router.navigate(['produits']);
    },(error) => { alert("Problème lors de la modification !"); }
    );
    }*/
    updateProduit() {
      this.currentProduit.categorie=this.produitService.consulterCategorie(this.updatedCatId);
      this.produitService.updateProduit(this.currentProduit);
      this.router.navigate(['produits']);
    }
}

