import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SwiperModule } from "swiper/angular";
import { ClientComponent } from './client/client.component';
import { ProductComponent } from './product/product.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { WhychooseusComponent } from './whychooseus/whychooseus.component';
import { TestimonalsComponent } from './testimonals/testimonals.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ClientComponent,
    ProductComponent,
    HeroComponent,
    AboutComponent,
    WhychooseusComponent,
    TestimonalsComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SwiperModule
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
