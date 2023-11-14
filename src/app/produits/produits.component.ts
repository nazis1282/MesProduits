import { Categorie } from './../model/categorie.model';
import { Component, OnInit } from '@angular/core';
import { produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

  produits? : produit[];


  chargerProduits(){
    this.produitService.listeProduits().subscribe(prods => {
    console.log(prods);
    this.produits = prods;
    });
    }
    supprimerProduit(p: produit)
    {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
    this.produitService.supprimerProduit(p.idProduit!).subscribe(() => {
    console.log("produit supprimé");
    this.chargerProduits();
    });
    }

  constructor(private produitService: ProduitService ) {
    //this.produits = produitService.listeProduits();
    }

  ngOnInit(): void {
   this.chargerProduits();
  }

}
