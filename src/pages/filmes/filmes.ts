import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';


/**
 * Generated class for the FilmesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filmes',
  templateUrl: 'filmes.html',
  providers: [
    MovieProvider //injetando o provider nos metadados do componente
  ]

})
export class FilmesPage {
  
  //variaveis de isntância
  public lista_filmes = new Array<any>();
  

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MovieProvider) { //para fazer a injeção de dependencia

  }
  //método de ciclo de vida. É chamado logo após a View ser carregada.
 
    ionViewDidLoad() {
      console.log('ionViewDidLoad FilmesPage'); //observable pelo subscribe. 
      /**Inscrever-se significa: quando o resultado da chamada à API retornar, ele continuará executando a função
      data definida na mesma linha. É isso que o ponteiro => faz.
      **/
            
      this.movieProvider.getPopularMovies().subscribe(
        //arrow function, funcção curta sem nome, apenas para receber algo simples, como um data
        data => {
          // console.log(data); 
          
          //em vez de pegar toda response, pega somente o objeto JSON.
          const response = (data as any);
          const objeto_retorno = JSON.parse(response._body);
          this.lista_filmes = objeto_retorno.results
          console.log(objeto_retorno);
        }, error => {
          console.log(error);
        }
      )

      }


}
