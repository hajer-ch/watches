import { Component, OnInit } from '@angular/core';
import { Montre } from 'src/app/models/montre';
import { ActivatedRoute, Router } from '@angular/router';
import { MontreService } from 'src/app/services/montre.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-watch',
  templateUrl: './update-watch.component.html',
  styleUrls: ['./update-watch.component.css']
})
export class UpdateWatchComponent implements OnInit {

  montre: Montre;
  id: string;
  imagePreview:string;
  isLoading:boolean =false;
  montreForm:FormGroup;
  constructor(
    private activateRoute: ActivatedRoute,
    private montreService: MontreService,
    private router: Router,
    private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.montreForm = this.formBuilder.group({
      image: [''],
      price: [''],
      description: [''],
      marque: ['']
    });

    this.id = this.activateRoute.snapshot.paramMap.get('id');
    this.montreService.displayMontreForUpdate(this.id).subscribe(
      res => {
        this.montre = res[0];
      }
    )
  }

  editWatch(montre:any) {
    this.montreService.updateMontre(this.montre, this.montreForm.value.image).subscribe(
      res => {
        console.log();
        this.router.navigate(['/admin']);
      }
    )
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
