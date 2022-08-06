import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  export: Subject<any> = new Subject<any>();

  constructor() {
  }

  setData(data: any) {
    this.data.next(data);
  }

  getData(): Observable<any> {
    return this.data;
  }

  setExportData(data: any) {
    this.export.next(data);
  }

  getExportData(): Observable<any> {
    return this.export;
  }
}
