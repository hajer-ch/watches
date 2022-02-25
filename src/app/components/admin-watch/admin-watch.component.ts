import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-watch',
  templateUrl: './admin-watch.component.html',
  styleUrls: ['./admin-watch.component.css']
})
export class AdminWatchComponent implements OnInit {

  users: User[];
  tableHeaders : string[];
  attributeName:string[];
  constructor(private adminService: AdminService) { }

  ngOnInit() {
  
    this.tableHeaders = ["ID", "First Name", "Last Name", "Email"];
    this.adminService.getAdmins().subscribe(
      (data) => {
        this.users = data;
        // this.tableHeaders = Object.getOwnPropertyNames(this.users[1]);
        console.log("all users", this.users);
      }
    )
  }
  //Calcul de la somme des IDs
//   sommeId(T: [], id:any) {
//     let somme = 0;
//     for (let i = 0; i < T.length; i++) {
//       somme += T[i].id;
//   }  
// }

display(id: number) {
  console.log("ID in Admin watch", id); 
}

}
