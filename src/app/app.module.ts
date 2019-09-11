import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FilmesPageModule } from '../pages/filmes/filmes.module';
import {HttpModule} from "@angular/http";
import { MovieProvider } from '../providers/movie/movie';

@NgModule({
  declarations: [
    MyApp,
    HomePage
   
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FilmesPageModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MovieProvider
  ]
})
export class AppModule {}
