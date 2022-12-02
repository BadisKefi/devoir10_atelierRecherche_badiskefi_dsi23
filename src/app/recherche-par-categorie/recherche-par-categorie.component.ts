import { Component, OnInit } from '@angular/core';
import { Categorie } from '../model/categorie.model';
import { Produit } from '../model/produit.model';
import { AuthService } from '../services/auth.service';
import { ProduitService } from '../services/produit.service';


@Component({
  selector: 'app-recherche-par-categorie',
  templateUrl: './recherche-par-categorie.component.html',
})
export class RechercheParCategorieComponent implements OnInit{
  produits: Produit[] = [];
  categories: Categorie[] = [];
  IdCategorie: number = 0;
  constructor(private produitService: ProduitService, public authService: AuthService){}
  ngOnInit():void {
    this.categories = this.produitService.listeCategories();
    this.produits = [];
  }
  onchange(){
    this.produits = this.produitService.rechercheParCategorie(this.IdCategorie);
  }

  supprimerProduit(p: Produit)
  {
  let conf = confirm("Etes-vous sûr ?");
  if (conf)
  this.produitService.supprimerProduit(p/*.idProduit*/)/*.subscribe(() => {*/
  console.log("produit supprimé");
  this.SuprimerProduitDuTableau(p);
  /*});*/
  }
     
  SuprimerProduitDuTableau(prod : Produit) {
  this.produits.forEach((cur, index) => {
  if(prod.idProduit=== cur.idProduit) {
  this.produits.splice(index, 1);
  }
  });
  }  
}
