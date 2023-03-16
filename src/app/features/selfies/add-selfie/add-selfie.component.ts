import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-selfie',
  templateUrl: './add-selfie.component.html',
  styleUrls: ['./add-selfie.component.css']
})
export class AddSelfieComponent implements OnInit {

  //Communication Enfant parent 
  @Output()
  public annulerComponent : EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  
   clickSurAnnulerSaisie() : void{
    
    //les deux crochet son utiliser pour que si c'est vide de ne générer aucun évenement
    this.annulerComponent.emit({});
   }
}
