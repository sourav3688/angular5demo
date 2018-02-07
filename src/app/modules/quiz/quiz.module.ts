import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  PaginationModule
} from 'ngx-bootstrap';
import {
  ConfirmDialogModule,
  ConfirmationService,
  CheckboxModule
} from 'primeng/primeng';

import { QuizRoutingModule } from "app/modules/quiz/quiz-routing.module";
import { QuizComponent } from "app/modules/quiz/quiz.component";
import { QuizListComponent } from "app/modules/quiz/components/quiz_list.component";
import { QuizAddComponent } from "app/modules/quiz/components/quiz_add.component";
import { QuizEditComponent } from "app/modules/quiz/components/quiz_edit.component";

@NgModule({
    imports: [
        CommonModule, 
        FormsModule,
        ReactiveFormsModule,
        PaginationModule.forRoot(),
        ConfirmDialogModule,
        CheckboxModule,
        QuizRoutingModule
    ],
    declarations: [
        QuizComponent,
        QuizListComponent,
        QuizAddComponent,
        QuizEditComponent
    ],
    providers: [
        ConfirmationService
    ]
})
export class QuizModule { }