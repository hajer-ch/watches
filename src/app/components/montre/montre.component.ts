import { Component, OnInit, Input } from '@angular/core';
import { Montre } from 'src/app/models/montre';

@Component({
  selector: 'app-montre',
  templateUrl: './montre.component.html',
  styleUrls: ['./montre.component.css']
})
export class MontreComponent implements OnInit {

  @Input() description: string;
  @Input() price: string;

  constructor() { }

  ngOnInit() {
  }

}
