import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AuthGuard } from "app/core/guards/auth.guard";
import { LayoutComponent } from "app/layout/layout.component";
import { SettingsComponent } from "app/layout/components/settings/settings.component";

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        canActivateChild: [AuthGuard],
        children: [
            {
                path: 'user',
                loadChildren: 'app/modules/user/user.module#UserModule'
            },
            {
                path: 'faq',
                loadChildren: 'app/modules/faq/faq.module#FaqModule'
            },
            {
                path: 'quiz',
                loadChildren: 'app/modules/quiz/quiz.module#QuizModule'
            },
            {
                path: 'settings',
                component: SettingsComponent,
                canActivate: [AuthGuard]
            },
            {
                path: '',
                loadChildren: 'app/modules/user/user.module#UserModule'
            },
            {
                path: 'profile',
                loadChildren: 'app/modules/user/user.module#UserModule'
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {

}