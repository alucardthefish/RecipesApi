import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private items$: BehaviorSubject<any> = new BehaviorSubject([]);
  public readonly items: Observable<any> = this.items$.asObservable();

  constructor() { }

  updateData(data: any[]) {
    this.items$.next(data);
  }
}
