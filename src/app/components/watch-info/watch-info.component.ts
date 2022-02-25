import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MontreService } from 'src/app/services/montre.service';
import { Montre } from 'src/app/models/montre';

@Component({
  selector: 'app-watch-info',
  templateUrl: './watch-info.component.html',
  styleUrls: ['./watch-info.component.css']
})
export class WatchInfoComponent implements OnInit {

  id: string;
  montre: Montre;
  isLoading: boolean = false;
  constructor(
    private activateRoute: ActivatedRoute,
    private montreService: MontreService) { }

  ngOnInit() {
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    console.log("ngOnINit id", this.id);
    this.isLoading = true;
    this.montreService.displayMontreForUpdate(this.id).subscribe(
      res => {
        this.isLoading = false;
        this.montre = res[0];
        console.log("Descrition et price, ", res[0].marque);
        
      }
    )
  }

}
