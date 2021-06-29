import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
//firebase
import {AngularFireModule} from"@angular/fire"
import {AngularFireAuthModule} from"@angular/fire/auth"
import {AngularFireDatabaseModule} from "@angular/fire/database"
import {AngularFireStorage} from "@angular/fire/storage"

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// environment
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    AngularFireModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorage
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
