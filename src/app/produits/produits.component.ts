import { Component, OnInit } from '@angular/core';
import { produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

  produits : produit[];

  
  constructor(private produitService: ProduitService ) {
    this.produits = produitService.listeProduits();
    }

  ngOnInit(): void {
  }

}
