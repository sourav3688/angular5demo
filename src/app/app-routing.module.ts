import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";

import { PageNotFountComponent } from "app/pagenotfound.component";
import { LoginComponent } from 'app/app-components/login.component';
import { EmailverifyComponent } from 'app/app-components/emailverify.component';
import { ForgotpasswordComponent } from "app/app-components/forgotpassword.component";
import { ResetpasswordComponent } from "app/app-components/resetpassword.component";

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'verifyemail/:id',
        component: EmailverifyComponent
    },
    {
        path: 'forgotpassword',
        component: ForgotpasswordComponent
    },
    {
        path: 'resetpassword/:id',
        component: ResetpasswordComponent
    },
    {
        path: '',
        loadChildren: './layout/layout.module#LayoutModule'
    },
    {
        path: '**',
        component: PageNotFountComponent,
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        //enableTracing: true
    })],
    exports: [RouterModule]
})
export class AppRoutingModule {

}