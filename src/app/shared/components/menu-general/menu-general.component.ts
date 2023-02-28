import { Component, OnInit, ElementRef, ViewChild,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu-general',
  templateUrl: './menu-general.component.html',
  styleUrls: ['./menu-general.component.css']
})
export class MenuGeneralComponent implements OnInit {

  @ViewChild('IdZonedSearch', { static: false })
   maZoneRecherch! :ElementRef;

   @Output()
   EventSearch : EventEmitter<string> = new EventEmitter<string>();

   recherche()
   {
     const getInputValue = this.maZoneRecherch.nativeElement.value;

     //mnémotechnique : a travers l'evenement qui a été crée(EventSearch) emettre(emit()) une valeur(getInputValue)
     this.EventSearch.emit(getInputValue);
   }
   
  constructor() { }

  ngOnInit(): void {
  }

}
