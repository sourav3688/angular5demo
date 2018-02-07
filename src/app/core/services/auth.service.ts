import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

import { HttpClient } from 'app/core/utility/http.client';
import { AppConfig } from "app/core/config/app.config";
import { WebStorage } from 'app/core/utility/web.storage';

@Injectable()
export class AuthService {
    redirectUrl: string;
    isLoggedIn = false;

    constructor(
        private http: HttpClient,
        private config: AppConfig,
        private storage: WebStorage
    ) { }

    checkLogin(): Observable<any> {
        return this.http.get('/user/checklogin', []);
    }

    login(data: any): Observable<any> {
        return this.http.post('/user/adminlogin', data).map((res: any) => {
            let body = res.json();
            if (body.status == this.config.statusCode.error) {
                this.isLoggedIn = false;
                return { auth: false, message: body.message };
            } else {
                this.isLoggedIn = true;
                if (data.rememberme) {
                    this.storage.localStore(this.config.token.keyID, body.data.token);
                } else {
                    this.storage.sessionStore(this.config.token.keyID, body.data.token);
                }
                this.storage.localStore(this.config.token.userKey, body.data.user);
                return { auth: true, message: body.message };
            }
        });
    }

    logout(): Observable<any> {
        this.storage.clear(this.config.token.keyID);
        this.storage.clear(this.config.token.userKey);
        this.storage.clear(this.config.token.keyID);
        this.storage.clear(this.config.token.userKey);
        this.isLoggedIn = false;
        return Observable.of({ status: true });
    }
}
