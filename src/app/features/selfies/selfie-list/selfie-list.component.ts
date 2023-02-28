import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Selfie } from 'src/app/models/selfie';
import { SelfieService } from '../../../shared/services/selfies/selfie.service';


@Component({
  selector: 'app-selfie-list',
  templateUrl: './selfie-list.component.html',
  styleUrls: ['./selfie-list.component.css']
})
export class SelfieListComponent implements OnInit, OnDestroy {

  lesSouscription : Subscription[] =[]; 

lesSelfies! : Selfie[]
//= [
//   //object one
//   {
//    image: '',
//    wookie: {nom: 'naruto', selfies:[]},
//    titre : "naruto",
//  },

//  //object two
//  {
//   image: '',
//   wookie: {nom: 'Sassuke',selfies:[]},
//   titre: 'sassuke'
// } 

// ];
@Input()
set filtre(value: string)
{
  console.log(value);
}
  constructor(private getSelfies : SelfieService ) { }
  


  ngOnInit(): void {
     //this.lesSelfies= this.getSelfies.getAll();

     /**
      *   première des chose pour ce qui est de l'utilisation des Observable afin de simuler l'Asynchrone
      * 
      *   il faut avant tout s'inscrire
      * */ 
    
    const Souscription_En_Cours= this.getSelfies.getAll_asObserver_with_Intervale().subscribe(tab => this.lesSelfies = tab);

    this.lesSouscription.push(Souscription_En_Cours);
  

  }
     /** Cependant ce qu'il faut retenir est que pour toute Souscription il faut dessouscrire */
  ngOnDestroy(): void {
    this.lesSouscription.forEach(item=>item.unsubscribe());
  }

}
