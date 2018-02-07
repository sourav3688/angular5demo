import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpClient } from 'app/core/utility/http.client';

@Injectable()
export class GeneService {
  constructor(
    private http: HttpClient
  ) { }

  //Gene start
  getGene(data: any): Observable<any> {
    return this.http.get('/gene/get', data);
  }

  getGeneList(data: any): Observable<any> {
    return this.http.get('/gene/getall', data);
  }

  addGene(data: any): Observable<any> {
    return this.http.post('/gene/add', data);
  }

  editGene(data: any): Observable<any> {
    return this.http.post('/gene/edit', data);
  }

  deleteGene(data: any): Observable<any> {
    return this.http.post('/gene/delete', data);
  }
  //Gene end

}
