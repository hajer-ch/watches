import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  users: any;
  constructor() { }

  ngOnInit() {
    this.users = [
      {nom: 'test1', prenom: 'Karim', age: 29, email: 'karime@test.fr', dateNaissane: new Date() , password: 'test'},
      {nom: 'test2', prenom: 'Ali', age: 31, email: 'ali@test.fr', dateNaissane: new Date() , password: 'test'},
      {nom: 'test3', prenom: 'Salah', age: 35, email: 'salah@test.fr', dateNaissane: new Date() , password: 'test'},
      {nom: 'test4', prenom: 'Nabil', age: 40, email: 'nabil@test.fr', dateNaissane: new Date() , password: 'test'},
      {nom: 'test5', prenom: 'Salim', age: 43, email: 'salim@test.fr', dateNaissane: new Date() , password: 'test'}

    ]
  }

}
