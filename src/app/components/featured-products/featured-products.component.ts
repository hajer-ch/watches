import { Component, OnInit, Input } from '@angular/core';
import { Montre } from '../../models/montre'; 

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.css']
})
export class FeaturedProductsComponent implements OnInit {

  result: number;
  montres: Montre[];
  
  constructor() { }

  ngOnInit() {
    this.montres = [
      {id: "1", price: 200, marque: "Swatch", image: "test",description: "Persistent 1"},
      {id: "2", price: 300, marque: "Festina", image: "test",description: "Persistent 2"},
      {id: "3", price: 400, marque: "Citizen", image: "test",description: "Persistent 3"},
      {id: "4", price: 500, marque: "Smile", image: "test",description: "Persistent Smile"}
    ]
  }

  calcul(x: number,y: number) {
    return x+y;
  }

}
