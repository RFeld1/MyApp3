import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FilmesPage } from '../filmes/filmes';
import { renderComponent } from '@angular/core/src/render3';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  
})
export class HomePage {

  private recent: boolean;
  private melhor: boolean;
  


  constructor(public navCtrl: NavController) {
    this.recent = false;
    this.melhor = false;
  }

  recente(){
    console.log('recente')
    this.navCtrl.push(FilmesPage)
    return this.recent = true;
  }

  melhores(){
    console.log('melhores')
    this.navCtrl.push(FilmesPage)
    return this.melhor = true;
  }
}
