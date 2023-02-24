import { Component, Input, OnInit } from '@angular/core';
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
@Input()
set filtre(value: string)
{
  console.log(value);
}
  constructor() { }

  ngOnInit(): void {
  }

}
