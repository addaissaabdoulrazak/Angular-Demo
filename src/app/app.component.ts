import { Component, Input } from '@angular/core';
import { LoggerService } from './shared/services/logger/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  data = '';
 

  constructor(private _logger: LoggerService) { }

  rechercheItem(value: string)
  { 
   this._logger.log(value);
    this.data=value;
  }
}


