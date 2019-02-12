import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app.routing';
import { RootComponent } from './components/root/root.component';
import { HomeComponent } from './components/home/home.component';
import { BasicsComponent } from './components/basics/basics.component';
import { HeaderComponent } from './components/header/header.component';
import { ExplorerComponent } from './components/explorer/explorer.component';
import { PoolsComponent } from './components/pools/pools.component';
import { WalletComponent } from './components/wallet/wallet.component';
import { SourceComponent } from './components/source/source.component';
import { AboutComponent } from './components/about/about.component';
import { SocialComponent } from './components/social/social.component';


@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  declarations: [
    RootComponent,
    HomeComponent,
    BasicsComponent,
    HeaderComponent,
    ExplorerComponent,
    PoolsComponent,
    WalletComponent,
    SourceComponent,
    AboutComponent,
    SocialComponent
  ],
  providers: [

  ],
  entryComponents: [
    
  ],
  bootstrap: [RootComponent]
})
export class AppModule { }
