import { Injectable, Self } from '@angular/core';
import { LoggerService } from '../logger/logger.service';
import { Selfie } from '../../../models/selfie';
import { interval, Observable, of} from 'rxjs/';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';




@Injectable({
  providedIn: 'root'
})
export class SelfieService {

  constructor(private _logger : LoggerService, private _httpClient : HttpClient) { }

  /**
   * get All selfie liste(get Data in a Tableau)
   */
  getAll(): Selfie[]{
    
    //Syntax : tableaux de selfie initialiser a vide
    const tableau : Selfie[] = [];

    let selfie = new Selfie();
    selfie.image="https://i.pinimg.com/originals/f0/1d/bc/f01dbc4b82496fd86428079d76c2f9c2.png"
    selfie.titre="Naruto mode Ermite"
    selfie.wookie.nom ="chewie 1"
    tableau.push(selfie)

    tableau.push({
      image: "https://i.pinimg.com/550x/c7/e4/64/c7e464499c1b72eb57bc3286477c5ee3.jpg",
      titre: "Sassuke en mode ...",
      wookie:{
        nom : "chewie 2",
        selfies : []
      }
    });
    
    //this._logger.log("Affichage de notre Tableau");
    return tableau;
  }

  /**
   * retourner une observable afin de pouvoir s'inscrire a la reception d'un tableau de wookie
   * 
   * cette methode est mise en place afin de pouvoir simuler de l'asynchrone(juste un simple test).
   * 
   * et pour simuler il vous faut un Observable raison pour laquelle notre function retourne un Observable
   * 
   * il est très Important d'indiquer toujour le type de données gérer par le tyaux(le flux).
   * 
   * et pour ce qui du retour d'un Observable on utilise la metodes of(type_de_données_que_va_retourner_notre_Observable)
   * 
   */
  getAll_asObservable(): Observable<Selfie[]>{

   const monTableau = this.getAll();

    return of(monTableau);

  };

  /**
   * nous allons Introduire une nouvelle notion en remplaçant l'operator Of() en Interval() qui d'ailleur renvoie des entiers
   * 
   * afin de profiter de la puissance de observable, puis profiter pour modifier les données emit par notre flux(tuyaux)
   * 
   * et ceci grâce a la notion methode pipe(), car au lieu des entiers nous voulons des données de type selfie 
   * 
   * mais cela doit 
   */

  getAll_asObserver_with_Intervale(): Observable<Selfie[]>{ 

    const monTableau= this.getAll();

     return interval(1000).pipe(map(entier=>[
          // 1-
          {
         
            image: "https://i.pinimg.com/550x/c7/e4/64/c7e464499c1b72eb57bc3286477c5ee3.jpg",
            titre: "Sassuke en mode ..." + entier,
            wookie:{
              nom : "chewie 2",
              selfies : [],
            }
          },

          //2-
          {
         
            image: "https://i.pinimg.com/originals/f0/1d/bc/f01dbc4b82496fd86428079d76c2f9c2.png",
            titre: "Naruto en mode Ermite" + entier,
            wookie:{
              nom : "chewie 1",
              selfies : [],
            }
          }

     ]));
  }
  getAll_asObserver_with_HttpClient() : Observable<Selfie[]>{

    return this._httpClient.get<Selfie[]>(environment.apis.selfies.url)
  }
}
