import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact: Contact;
  contactForm: FormGroup;
  id:number;
  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService,
    private router:Router) { }

  ngOnInit() {
    this.contact = new Contact(this.id, '', '', '', '');
    this.contactForm = this.formBuilder.group({
      contactFullName: [''],
      contactEmail: [''],
      contactSubject: [''],
      contactMessage: ['']
    });
  }

  sendContact(contactForm: any) {
    console.log("here my contact values", this.contact);
    this.contactService.addContact(this.contact).subscribe(
      res => {
        console.log("Here my response", res);
        this.router.navigate(['/admin']);        
      }
    )
  }

}
