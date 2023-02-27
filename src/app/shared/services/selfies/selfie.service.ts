import { Injectable } from '@angular/core';
import { LoggerService } from '../logger/logger.service';
import { Selfie } from '../../../models/selfie';


@Injectable({
  providedIn: 'root'
})
export class SelfieService {

  constructor(private _logger : LoggerService) { }

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
}
