import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpClient } from 'app/core/utility/http.client';

@Injectable()
export class UserService {
  constructor(
    private http: HttpClient
  ) { }

  verifyEmail(data: any): Observable<any> {
    return this.http.post('/user/verifyemail', data);
  }

  verifySetPwdKey(data: any): Observable<any> {
    return this.http.post('/user/chksetpasswordkey', data);
  }

  setPwd(data: any): Observable<any> {
    return this.http.post('/user/setpassword', data);
  }

  reqResetPassword(data: any): Observable<any> {
    return this.http.post('/user/reqresetpassword', data);
  }

  verifyReSetPwdKey(data: any): Observable<any> {
    return this.http.post('/user/chkresetpasswordkey', data);
  }

  reSetPwd(data: any): Observable<any> {
    return this.http.post('/user/resetpassword', data);
  }

  
  getProfile(data:any): Observable<any> {
    return this.http.get('/user/getprofile',data);
  }

  updateProfile(data: any): Observable<any> {
    return this.http.post('/user/updateprofile', data);
  }
  updateSAProfile(data: any): Observable<any> {
    return this.http.post('/user/updatesaprofile', data);
  }

  updatePwd(data: any): Observable<any> {
    return this.http.post('/user/updatepassword', data);
  }

  //appuser start
  getAppuser(data: any): Observable<any> {
    return this.http.get('/appuser/get', data);
  }

  getAppuserList(data: any): Observable<any> {
    return this.http.get('/appuser/getall', data);
  }

  addAppuser(data: any): Observable<any> {
    return this.http.post('/appuser/add', data);
  }

  editAppuser(data: any): Observable<any> {
    return this.http.post('/appuser/edit', data);
  }

  deleteAppuser(data: any): Observable<any> {
    return this.http.post('/appuser/delete', data);
  }
  //appuser end

  //notification
  getAdminNotigications(): Observable<any> {
    return this.http.get('/user/getadminnotifications', []);
  }

}
