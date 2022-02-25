import { Component, OnInit } from '@angular/core';
import { Montre } from 'src/app/models/montre';
import { MontreService } from 'src/app/services/montre.service';

@Component({
  selector: 'app-watches',
  templateUrl: './watches.component.html',
  styleUrls: ['./watches.component.css']
})
export class WatchesComponent implements OnInit {

  montres: Montre[];
  constructor(private montreService: MontreService) { }

  ngOnInit() {

    this.montreService.getMontres();
  }

}
