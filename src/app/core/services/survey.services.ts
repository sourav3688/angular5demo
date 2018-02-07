import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpClient } from 'app/core/utility/http.client';

@Injectable()
export class SurveyService {
  constructor(
    private http: HttpClient
  ) { }

  //Survey start
  /* getSurvey(data: any): Observable<any> {
    return this.http.get('/survey/get', data);
  } */

  getSurveyList(data: any): Observable<any> {
    return this.http.get('/survey/getall', data);
  }

  /* addSurvey(data: any): Observable<any> {
    return this.http.post('/survey/add', data);
  }

  editSurvey(data: any): Observable<any> {
    return this.http.post('/survey/edit', data);
  }

  deleteSurvey(data: any): Observable<any> {
    return this.http.post('/survey/delete', data);
  } */
  //Survey end

}
