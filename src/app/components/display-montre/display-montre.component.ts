import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Montre } from 'src/app/models/montre';
import { MontreService } from 'src/app/services/montre.service';

@Component({
  selector: 'app-display-montre',
  templateUrl: './display-montre.component.html',
  styleUrls: ['./display-montre.component.css']
})
export class DisplayMontreComponent implements OnInit {

  id: number;
  montre: Montre;
  constructor(private route: ActivatedRoute, private montreService: MontreService) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.montreService.displayMontre(this.id).subscribe( data => {
      this.montre = data;
      console.log("my Montre", this.montre);
    });
  }
}

