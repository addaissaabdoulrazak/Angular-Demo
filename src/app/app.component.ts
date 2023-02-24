import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  data = '';
 

  rechercheItem(value: string)
  { 
   console.log('Appcomponent', value);
    this.data=value;
  }
}


