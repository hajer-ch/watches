import { Component, OnInit } from '@angular/core';
import { Montre } from 'src/app/models/montre';

@Component({
  selector: 'app-list-montres',
  templateUrl: './list-montres.component.html',
  styleUrls: ['./list-montres.component.css']
})
export class ListMontresComponent implements OnInit {

  montres: Montre[];
  constructor() { }

  ngOnInit() {

    this.montres = [
      {id: '1', price: 120, marque: 'Citizen', 
      image: '', description: 'jjhhjhjhj' },
      {id: '2', price: 120, marque: 'Citizen', 
      image: '', description: 'jjhhjhjhj' }
    ]
  }

}
