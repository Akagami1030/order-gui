import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  public _counter: number = 0;
  private _maxLength = 255;
  constructor() { }

  verifySize(text: string): void{
    if(text.length <= this._maxLength){
      this._counter = text.length;
    }
  }

  get getCounter(): number{
    return this._counter;
  }

  get getMax(): number{
    return this._maxLength;
  }

  

  
}
