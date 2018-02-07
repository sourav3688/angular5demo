import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpClient } from 'app/core/utility/http.client';

@Injectable()
export class CompanionService {
  constructor(
    private http: HttpClient
  ) { }

  //companion start
  getCompanion(data: any): Observable<any> {
    return this.http.get('/companion/get', data);
  }

  getCompanionList(data: any): Observable<any> {
    return this.http.get('/companion/getall', data);
  }

  deleteCompanion(data: any): Observable<any> {
    return this.http.post('/companion/delete', data);
  }
  //companion end

}
