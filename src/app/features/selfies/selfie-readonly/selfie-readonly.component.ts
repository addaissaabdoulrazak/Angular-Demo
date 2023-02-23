import { Component, OnInit,Input } from '@angular/core';
import { Selfie } from 'src/app/models/selfie';

@Component({
  selector: 'app-selfie-readonly',
  templateUrl: './selfie-readonly.component.html',
  styleUrls: ['./selfie-readonly.component.css']
})
export class SelfieReadonlyComponent implements OnInit {
  
  @Input()
  getSelfie! : Selfie;

  constructor() { }

  ngOnInit(): void {
  }

}
