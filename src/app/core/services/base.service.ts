import { Injectable } from '@angular/core';
import {HttpService} from "@cc/services/request.service";
import {DataService} from "@cc/services/data.service";

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  baseUrl: string[];
  url: string[];

  constructor(protected http: HttpService, protected data: DataService) {
    this.baseUrl = [];
    this.url = [];
  }

  getAll() {

  }

  getOne() {

  }

  update() {

  }

  remove() {

  }
}
