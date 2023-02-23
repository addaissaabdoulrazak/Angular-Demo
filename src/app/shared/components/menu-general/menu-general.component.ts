import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-menu-general',
  templateUrl: './menu-general.component.html',
  styleUrls: ['./menu-general.component.css']
})
export class MenuGeneralComponent implements OnInit {

  @ViewChild('IdZonedSearch', { static: false })
   maZoneRecherch! :ElementRef;

   recherche()
   {
     console.log(this.maZoneRecherch.nativeElement.value);
   }
  constructor() { }

  ngOnInit(): void {
  }

}
