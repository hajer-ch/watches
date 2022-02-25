import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MontreService } from 'src/app/services/montre.service';
import { Montre } from 'src/app/models/montre';

@Component({
  selector: 'app-update-montre',
  templateUrl: './update-montre.component.html',
  styleUrls: ['./update-montre.component.css']
})
export class UpdateMontreComponent implements OnInit {

  id:number;
  montre: Montre;
  constructor(private route: ActivatedRoute, private router: Router, private montreService: MontreService) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.montreService.displayMontre(this.id).subscribe( data => {
      this.montre = data;
      console.log("my Montre", this.montre);
    });
  }

  update(montre: any) {
    // this.montreService.updateMontre(this.montre).subscribe(
    //   () => this.goBack()
    // )
  }

  goBack():void {
    let link =['/admin'];
    this.router.navigate(link);
  }

}
