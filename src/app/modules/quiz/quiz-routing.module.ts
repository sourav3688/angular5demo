import { NgModule } from "@angular/core";
import { Router, Route, Routes, RouterModule } from "@angular/router";

import { QuizComponent } from "app/modules/quiz/quiz.component";
import { QuizListComponent } from "app/modules/quiz/components/quiz_list.component";
import { QuizAddComponent } from "app/modules/quiz/components/quiz_add.component";
import { QuizEditComponent } from "app/modules/quiz/components/quiz_edit.component";

const routes: Routes = [
    {
        path: '', 
        component: QuizComponent,
        children: [
            {
                path: '',
                component: QuizListComponent,
            },
            {
                path: 'add',
                component: QuizAddComponent,
            },
            {
                path: 'edit/:id',
                component: QuizEditComponent,
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class QuizRoutingModule {

}