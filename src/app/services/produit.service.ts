import { Categorie } from './../model/categorie.model';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {produit} from '../model/produit.model'


const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
providedIn: 'root'})


export class ProduitService {

produit! : produit;

//produits : produit []


apiURL: string = 'http://localhost:8070/produits/api';


constructor(private http : HttpClient) {/*
  this.produits = [{idProduit : 1, nomProduit : "PC Asus", prixProduit : 3000.600, dateCreation : new Date("01/14/2011"),
  categorie : {idCat : 1, nomCat : "PC"} },
 {idProduit : 2, nomProduit : "Imprimante Epson", prixProduit : 450, dateCreation : new Date("12/17/2010"),
categorie :  {idCat : 2, nomCat : "Imprimante"}},
 {idProduit : 3, nomProduit :"Tablette Samsung", prixProduit : 900.123, dateCreation : new Date("02/20/2020"),
 categorie : {idCat : 1, nomCat : "PC"}}
];*/

}


listeProduits():Observable<produit[]>{
  return this.http.get<produit[]>(this.apiURL);
}

listeCategories():Observable<Categorie[]>{
  return this.http.get<Categorie[]>(this.apiURL+"/cat");
 }



ajouterProduit( prod: produit):Observable<produit>{
    return this.http.post<produit>(this.apiURL, prod, httpOptions);
}

supprimerProduit(id : number) {
  const url = `${this.apiURL}/${id}`;
  return this.http.delete(url, httpOptions);
}
consulterProduit(id: number): Observable<produit> {
  const url = `${this.apiURL}/${id}`;
  return this.http.get<produit>(url);
  }

updateProduit(prod :produit) : Observable<produit>{
  return this.http.put<produit>(this.apiURL, prod, httpOptions);
  }
}

