import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AsyncCodeService {
  constructor() {}

  wrap = async (promise: Promise<any>) => {
    try {
      const data = await promise;
      console.log(`[asyncMng]`, data);
      return data;
    } catch (err) {
      console.log(err);
    }
  };
}
