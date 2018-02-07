import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  PaginationModule
} from 'ngx-bootstrap';
import {
  ConfirmDialogModule,
  ConfirmationService
} from 'primeng/primeng';

import { FaqRoutingModule } from "app/modules/faq/faq-routing.module";
import { FaqComponent } from "app/modules/faq/faq.component";
import { FaqListComponent } from "app/modules/faq/components/faq_list.component";
import { FaqAddComponent } from "app/modules/faq/components/faq_add.component";
import { FaqEditComponent } from "app/modules/faq/components/faq_edit.component";

@NgModule({
    imports: [
        CommonModule, 
        FormsModule,
        ReactiveFormsModule,
        PaginationModule.forRoot(),
        ConfirmDialogModule,
        FaqRoutingModule
    ],
    declarations: [
        FaqComponent,
        FaqListComponent,
        FaqAddComponent,
        FaqEditComponent
    ],
    providers: [
        ConfirmationService
    ]
})
export class FaqModule { }