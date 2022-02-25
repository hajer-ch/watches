import { Component, OnInit, Input } from '@angular/core';
import { Montre } from 'src/app/models/montre';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})
export class WatchComponent implements OnInit {

  // @Input() description: string;
  // @Input() price: string;
  @Input() montre: Montre;
  
  constructor() { }

  ngOnInit() {   
  }

}
