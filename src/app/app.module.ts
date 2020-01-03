import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app.routing';
import { RootComponent } from './components/root/root.component';
import { HomeComponent } from './components/home/home.component';
import { BasicsComponent } from './components/basics/basics.component';
import { WalletComponent } from './components/wallet/wallet.component';
import { AboutComponent } from './components/about/about.component';
import { NavComponent } from './components/nav/nav.component';
import { ResourcesComponent } from './components/resources/resources.component';

import { ApiService } from './services/api.service';


@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule
  ],
  declarations: [
    RootComponent,
    HomeComponent,
    BasicsComponent,
    WalletComponent,
    AboutComponent,
    NavComponent,
    ResourcesComponent
  ],
  providers: [
    ApiService
  ],
  entryComponents: [

  ],
  bootstrap: [RootComponent]
})
export class AppModule { }
