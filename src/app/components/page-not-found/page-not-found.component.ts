import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'page-404',
  template: `
<div id="brand_carouse" class="ptb_60 text-center">
    <div class="type-01">

        <div class="row">
            <div class="col-sm-12">
                <div class='center'>
                <img src="https://cdn3.vectorstock.com/i/thumbs/31/47/404-error-page-not-found-design-template-for-vector-21393147.jpg"/>
                <h1>Hey, cette page n'existe pas !</h1>
                <a routerLink="/" class="waves-effect waves-teal btn-flat">
                  Retourner à l' accueil
                </a>
              </div>
            </div>
        </div>
    </div>
</div>
    
  `
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
