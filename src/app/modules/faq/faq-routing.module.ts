import { NgModule } from "@angular/core";
import { Router, Route, Routes, RouterModule } from "@angular/router";

import { FaqComponent } from "app/modules/faq/faq.component";
import { FaqListComponent } from "app/modules/faq/components/faq_list.component";
import { FaqAddComponent } from "app/modules/faq/components/faq_add.component";
import { FaqEditComponent } from "app/modules/faq/components/faq_edit.component";

const routes: Routes = [
    {
        path: '', 
        component: FaqComponent,
        children: [
            {
                path: '',
                component: FaqListComponent,
            },
            {
                path: 'add',
                component: FaqAddComponent,
            },
            {
                path: 'edit/:id',
                component: FaqEditComponent,
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FaqRoutingModule {

}