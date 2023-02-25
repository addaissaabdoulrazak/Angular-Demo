import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  /**
   * 
   * @param message 
   * @param object 
   * 
   * on log uniquement en developpement car en production cela peut être risquer d'utiliser des console.log de partout
   */
  log(message: string, object? : unknown) {
    if(!environment.production){
      console.log(message, object)
    }
  }
}
