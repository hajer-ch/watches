import { Component, OnInit } from '@angular/core';
import { Montre } from 'src/app/models/montre';
import { MontreService } from 'src/app/services/montre.service';
import { Router } from '@angular/router';
import { Contact } from 'src/app/models/contact';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  montres: Montre[];
  contacts: Contact[];
  message: string;
  isLoading: boolean = false;
  authSubs: Subscription;
  isUserAuthenticated = false;
  constructor(
    private montreService: MontreService,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit() {
    this.isLoading = true;
    this.montreService.getMontres().subscribe(
      data => {
        this.isLoading = false;
        this.montres = data;
        this.isUserAuthenticated = this.authService.isUserAuth();
      }

    );
  }
  display(montre: Montre): void {
    let link = [`montres/${montre.id}`];
    this.router.navigate(link);
  }

  edit(montre: Montre): void {
    let link = [`updateMontre/${montre.id}`];
    this.router.navigate(link);
  }

  getAllMontres(): void {
    this.montreService.getMontres();
  }

  watchDisplay(id: number) {
    this.router.navigate([`montres/${id}`]);
  }

  deleteWatch(montre: Montre) {
    this.montreService.deleteMontre(montre).subscribe(
      res => {
        this.montreService.getMontres().subscribe(
          data => {
            this.montres = data;
          }
        );
      }
    )
  }

  getWatches() {
    this.montreService.getMontres();
  }

  EditWatch(id: number) {
    this.router.navigate([`update-watch/${id}`])
  }

  // ngOnDestroy() {
  //   this.authSubs.unsubscribe();
  // }
}
