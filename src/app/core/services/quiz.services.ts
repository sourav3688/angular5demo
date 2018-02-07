import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpClient } from 'app/core/utility/http.client';

@Injectable()
export class QuizService {
  constructor(
    private http: HttpClient
  ) { }

  //quiz start
  getQuiz(data: any): Observable<any> {
    return this.http.get('/quiz/get', data);
  }

  getQuizList(data: any): Observable<any> {
    return this.http.get('/quiz/getall', data);
  }

  addQuiz(data: any): Observable<any> {
    return this.http.post('/quiz/add', data);
  }

  editQuiz(data: any): Observable<any> {
    return this.http.post('/quiz/edit', data);
  }

  deleteQuiz(data: any): Observable<any> {
    return this.http.post('/quiz/delete', data);
  }
  //quiz end

}
