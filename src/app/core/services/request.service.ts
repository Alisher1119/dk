import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  public constructor(private httpClient: HttpClient) {}

  public get(url: string, options?: { headers?: {}, params?: {} }): Observable<object> {
    return this.httpClient.get(url, options);
  }

  public getPromise(url: string, options?: { header?: {}, params?: {} }): Promise<any> {
    return this.get(url, options).toPromise();
  }

  public post(url: string, body: any | null, options?: {}) {
    return this.httpClient.post(url, body, options);
  }

  public postPromise(url: string, body?: any | null, options?: { header?: {}, params?: {} }) {
    return this.httpClient.post(url, body, options).toPromise();
  }

  public put(url: string, body: any | null, options?: { header?: {}, params?: {} }) {
    return this.httpClient.put(url, body, options);
  }

  public putPromise(url: string, body: any | null, options?: { header?: {}, params?: {} }) {
    return this.httpClient.put(url, body, options).toPromise();
  }

  public delete(url: string, options?: { header?: {}, params?: {} }) {
    return this.httpClient.delete(url);
  }

  public deletePromise(url: string, options?: { header?: {}, params?: {} }) {
    return this.httpClient.delete(url).toPromise();
  }

}
