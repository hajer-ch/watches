import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';
import { FashionComponent } from './components/fashion/fashion.component';
import { DealsComponent } from './components/deals/deals.component';
import { NewsComponent } from './components/news/news.component';
import { BrandsComponent } from './components/brands/brands.component';
import { MontreComponent } from './components/montre/montre.component';
import { AddMontreComponent } from './components/add-montre/add-montre.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ListMontresComponent } from './components/list-montres/list-montres.component';
import { AdminComponent } from './components/admin/admin.component';
import { DataService } from './services/data.service';
import { DisplayMontreComponent } from './components/display-montre/display-montre.component';
import { UpdateMontreComponent } from './components/update-montre/update-montre.component';
import { LoginComponent } from './components/login/login.component';
import { LoaderComponent } from './components/loader/loader.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthService } from './services/auth.service';
import { MontreService } from './services/montre.service';
import { SearchMontreComponent } from './components/search-montre/search-montre.component';
import { SignupComponent } from './components/signup/signup.component';
import { WatchesComponent } from './components/watches/watches.component';
import { WatchComponent } from './components/watch/watch.component';
import { AdminWatchComponent } from './components/admin-watch/admin-watch.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContactService } from './services/contact.service';
import { WatchInfoComponent } from './components/watch-info/watch-info.component';
import { UpdateWatchComponent } from './components/update-watch/update-watch.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthInterceptor } from './services/auth-interceptor';
import { ReversePipe } from './pipes/reverse.pipe';
import { CustomMrPipe } from './pipes/custom-mr.pipe';
import { CardDirective } from './directives/card.directive';
import { DataComponent } from './components/data/data.component';
import { DateNaissancePipe } from './pipes/date-naissance.pipe';
import { AsterixPipe } from './pipes/asterix.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    OurServicesComponent,
    FeaturedProductsComponent,
    FashionComponent,
    DealsComponent,
    NewsComponent,
    BrandsComponent,
    MontreComponent,
    AddMontreComponent,
    HomeComponent,
    ListMontresComponent,
    AdminComponent,
    DisplayMontreComponent,
    UpdateMontreComponent,
    LoginComponent,
    LoaderComponent,
    PageNotFoundComponent,
    SearchMontreComponent,
    SignupComponent,
    WatchesComponent,
    WatchComponent,
    AdminWatchComponent,
    ContactComponent,
    WatchInfoComponent,
    UpdateWatchComponent,
    ReversePipe,
    CustomMrPipe,
    CardDirective,
    DataComponent,
    DateNaissancePipe,
    AsterixPipe
   ],
   
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule
    
    
  ],
  providers: [ DataService, MontreService, ContactService, AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
