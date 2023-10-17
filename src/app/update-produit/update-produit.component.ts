import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ProduitService } from '../services/produit.service';
import { produit } from '../model/produit.model';


@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styleUrls: ['./update-produit.component.css']
})
export class UpdateProduitComponent implements OnInit {

  currentProduit = new produit();
  constructor(
    private activatedRoute : ActivatedRoute,
    private router :Router,
    private produitService : ProduitService
  ) { }

  updateProduit()
  { //console.log(this.currentProduit);
  this.produitService.updateProduit(this.currentProduit);
  this.router.navigate(['produits']);

}

  ngOnInit(): void {
    this.currentProduit = this.produitService.consulterProduit(this.activatedRoute.snapshot. params['id']);
      console.log(this.currentProduit);
  }
}
