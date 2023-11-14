import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ProduitService } from '../services/produit.service';
import { produit } from '../model/produit.model';
import { Categorie } from '../model/categorie.model';



@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styleUrls: ['./update-produit.component.css']
})
export class UpdateProduitComponent implements OnInit {
  categories? : Categorie[];
  updatedCatId? : number;

  currentProduit = new produit();
  constructor(
    private activatedRoute : ActivatedRoute,
    private router :Router,
    private produitService : ProduitService
  ) { }

  updateProduit() {
    this.currentProduit.categorie = this.categories!.find(cat => cat.idCat == this.updatedCatId)!;
    this.produitService.updateProduit(this.currentProduit).subscribe(prod => {
    this.router.navigate(['produits']); }
    );
    }

  ngOnInit(): void {
    this.produitService.listeCategories().subscribe(cats => {
      this.categories = cats;
      console.log(cats);
    });
    this.produitService.consulterProduit(this.activatedRoute.snapshot.params['id']).
    subscribe( prod =>{ this.currentProduit = prod;
    this.updatedCatId = this.currentProduit.categorie!.idCat;
    } ) ;
  }
}
