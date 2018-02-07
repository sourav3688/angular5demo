import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpClient } from 'app/core/utility/http.client';

@Injectable()
export class FaqService {
  constructor(
    private http: HttpClient
  ) { }

  //Faq start
  getFaq(data: any): Observable<any> {
    return this.http.get('/faq/get', data);
  }

  getFaqList(data: any): Observable<any> {
    return this.http.get('/faq/getall', data);
  }

  addFaq(data: any): Observable<any> {
    return this.http.post('/faq/add', data);
  }

  editFaq(data: any): Observable<any> {
    return this.http.post('/faq/edit', data);
  }

  deleteFaq(data: any): Observable<any> {
    return this.http.post('/faq/delete', data);
  }
  //Faq end

}
