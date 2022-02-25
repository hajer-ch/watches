import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { MustMatch } from 'src/app/validators/mustMatch';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  userForm: FormGroup;
  user: User;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private authService:AuthService) {
   this.user = new User(2, '', '', '', '');
   this.createForm();
 }

  createForm() {
   this.userForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.maxLength(5), Validators.minLength(2)] ],
      lastName: ['', Validators.required ],
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/)]
    ],
      confirmPassword: ['', Validators.required] }
      , 
      {
        validator: MustMatch('password', 'confirmPassword')
      }
      );
 }

//  ^ - start of string (implicit in string regex pattern)
// (?=\D*\d) - there must be 1 digit
// (?=[^a-z]*[a-z]) - there must be 1 lowercase ASCII letter
// (?=[^A-Z]*[A-Z]) - there must be 1 uppercase ASCII letter
// .{8,30} - any 8 to 30 chars other than line break chars
// $ - end of string (implicit in string regex pattern).

 submitForm(test: any) {
   console.log("Object : ", this.userForm.value);
  //  this.userService.addUser(this.userForm.value).subscribe(
  //    result => {
  //     console.log("Added");
  //     this.router.navigate(['/']);
  //    }
  //  )

  if (this.userForm.invalid){return;}
  this.authService.createUser(this.userForm.value);

 }

}
