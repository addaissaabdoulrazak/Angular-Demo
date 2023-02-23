import { Component, OnInit } from '@angular/core';
import { Selfie } from 'src/app/models/selfie';

@Component({
  selector: 'app-selfie-list',
  templateUrl: './selfie-list.component.html',
  styleUrls: ['./selfie-list.component.css']
})
export class SelfieListComponent implements OnInit {

lesSelfies : Selfie[]= [
  //object one
  {
   image: '',
   wookie: {nom: 'naruto', selfies:[]},
   titre : "naruto",
 },

 //object two
 {
  image: '',
  wookie: {nom: 'Sassuke',selfies:[]},
  titre: 'sassuke'
} 

];
  constructor() { }

  ngOnInit(): void {
  }

}
