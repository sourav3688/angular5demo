import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpClient } from 'app/core/utility/http.client';

@Injectable()
export class QueryService {
  constructor(
    private http: HttpClient
  ) { }

  //Faq start
  getQuery(data: any): Observable<any> {
    return this.http.get('/query/get', data);
  }

  getQueryList(data: any): Observable<any> {
    return this.http.get('/query/getall', data);
  }

  sendAnswer(data: any): Observable<any> {
    return this.http.post('/query/sendanswer', data);
  }
  //Faq end

}
