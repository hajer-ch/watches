
import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
	selector: 'login',
	templateUrl: './login.component.html'
})
export class LoginComponent {
	isLoading: boolean = false;
	loginForm: FormGroup;
	model:any={};

	constructor(private fb: FormBuilder, private authService: AuthService) {
		this.loginForm = this.fb.group({
			email: [''],
			password: ['']
		});
	}
	
	login(form: any) {
		// if (this.loginForm.invalid) {
		// 	return;
		// }
		console.log("Login form", this.model);
		this.authService.login(this.model);
	}
}