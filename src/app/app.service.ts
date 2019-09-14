import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

constructor() { }


// tslint:disable-next-line: variable-name
private _offsetTop: number;
public get offsetTop(): number {
  return this._offsetTop;
}
public set offsetTop(v: number) {
  this._offsetTop = v;
}


}
