import { Component, OnInit } from '@angular/core';
import { Montre } from 'src/app/models/montre';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MontreService } from 'src/app/services/montre.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-montre',
  templateUrl: './add-montre.component.html',
  styleUrls: ['./add-montre.component.css']
})
export class AddMontreComponent implements OnInit {

  montre: Montre;
  montreForm: FormGroup;
  id: string;
  imagePreview:string;
  isLoading:boolean =false;
  constructor(
    private montreService: MontreService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.montre = new Montre(this.id, 0 , '', '', '');
      this.montreForm = this.formBuilder.group({
        image: [''],
        price: [''],
        description: [''],
        marque: ['']
      });
  }
  

  // This function allows to ........
  saveMontre(montre: any) {
    if (this.montreForm.invalid) {
      return;
    };
    this.isLoading= true;

    this.montreService.addMontre(this.montre, this.montreForm.value.image).subscribe(
      res => {
        console.log("This is my res", res)
        this.router.navigate(['/admin']);
      }
    );
  }

  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.montreForm.patchValue({image: file});
    this.montreForm.updateValueAndValidity();
    console.log("This is my file", file);
    console.log("This is my form", this.montreForm);
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview =  reader.result as string
    };
    reader.readAsDataURL(file);
    
  }

 

}

