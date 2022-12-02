import { Injectable } from '@angular/core';
import { Produit } from '../model/produit.model';


//import { Observable } from 'rxjs';
//import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Categorie } from '../model/categorie.model';

const httpOptions =
{
   //headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
providedIn: 'root'
})
export class ProduitService {
  categories : Categorie[] = [];

  apiURL: string = 'http://localhost:8090/produits/api';

  produits: Produit[] = []; //un tableau de Produit
constructor(/*private http : HttpClient*/) {
  this.categories = [ {idCat : 1, nomCat : "PC"},{idCat : 2, nomCat : "Imprimante"}];
  this.produits = [
    { idProduit : 1, nomProduit : "PC Asus", prixProduit : 3000.600,
    dateCreation : new Date("01/14/2011"), categorie : {idCat : 1, nomCat : "PC"}},
    { idProduit : 2, nomProduit : "Imprimante Epson", prixProduit : 450,
    dateCreation : new Date("12/17/2010"), categorie : {idCat : 2, nomCat : "Imprimante"}},
    { idProduit : 3, nomProduit :"Tablette Samsung", prixProduit : 900.123,
    dateCreation : new Date("02/20/2020"),categorie : {idCat : 1, nomCat : "PC"}}
  ];
}


listeProduits():Produit[] {
  return this.produits;
}
/*listeProduit(): Observable<Produit[]>{
  return this.http.get<Produit[]>(this.apiURL);
  }*/

ajouterProduit( prod: Produit){
this.produits.push(prod);
}
/*ajouterProduit( prod: Produit):Observable<Produit>{
  return this.http.post<Produit>(this.apiURL, prod, httpOptions);
  }*/
supprimerProduit( prod: Produit){
  //supprimer le produit prod du tableau produits
  const index = this.produits.indexOf(prod, 0);
  if (index > -1) {
  this.produits.splice(index, 1);
  }
  //ou Bien
  /* this.produits.forEach((cur, index) => {
  if(prod.idProduit === cur.idProduit) {
  this.produits.splice(index, 1);
  }
  }); */
  }
  /*supprimerProduit(id? : number) {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
    }*/
  produit! : Produit;
  consulterProduit(id:number): Produit{
    this.produit = this.produits.find(p => p.idProduit == id)!;
    return this.produit;
  }
  /*consulterProduit(id: number): Observable<Produit> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Produit>(url);
    }*/
  trierProduits(){
    n1: Produit;
    n2: Produit;
    this.produits = this.produits.sort((n1,n2) => {
    if (n1 > n2)
      return 1;
    if (n1 < n2)
      return -1;
    return 0;
    });
  }
      
    updateProduit(p:Produit)
    {
    // console.log(p);
    this.supprimerProduit(p/*.idProduit*/);
    this.ajouterProduit(p);
    this.trierProduits();
    }
    /*updateProduit(prod :Produit) : Observable<Produit>
    {
            return this.http.put<Produit>(this.apiURL, prod, httpOptions);
    }*/
    listeCategories(): Categorie[] {
      return this.categories;
    }
    consulterCategorie(id:number): Categorie {
      return this.categories.find(cat => cat.idCat == id)!;
    }
    produitsRecherche: Produit[] = [];
    rechercheParCategorie(idCat: number): Produit[]{
      this.produitsRecherche = [];
  
      this.produits.forEach((cur, index) => {
        if(idCat == cur.categorie.idCat) {
          console.log("cur " + cur);
          this.produitsRecherche.push(cur);
        }
      });
      return this.produitsRecherche;
    }
}
