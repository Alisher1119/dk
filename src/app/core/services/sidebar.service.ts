import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  collapse: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {
  }

  setState(state: boolean) {
    this.collapse.next(state);
  }

  getState() {
    return this.collapse;
  }
}
