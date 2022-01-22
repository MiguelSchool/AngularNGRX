import { Injectable } from '@angular/core';

@Injectable()
export class PersistenceService {

  set(key: string, data: any): void {
    try{
      localStorage.setItem(key,JSON.stringify(data));
    }catch (e) {
      console.error("error saving to localStorage "+ e);
    }
  }

  get(key:string) {
    try{
      // @ts-ignore
      return JSON.parse(localStorage.getItem(key))
    }catch (e) {
      console.error("error to get data from localStorage ", e)
    }
  }

  constructor() { }
}
