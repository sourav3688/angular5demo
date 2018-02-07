import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { AppConfig } from 'app/core/config/app.config';
import { Utills } from 'app/core/utility/utills';
import { TmpStorage } from 'app/core/utility/temp.storage';
import { FaqService } from 'app/core/services/faq.services';
import { requiredTrim } from "app/core/validators/validators";

@Component({
  selector: 'app-faq-edit',
  preserveWhitespaces: false,
  templateUrl: './view/faq_edit.view.html',
  providers: [
    FaqService
  ]
})
export class FaqEditComponent {

  public httpCall: any = false;
  public faqFrm: FormGroup;

  constructor(
    private toaster: ToastrService,
    private faq: FaqService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public config: AppConfig,
    private formBuilder: FormBuilder,
    private utills: Utills,
    private tmpStorage: TmpStorage
  ) {
    this.faqFrm = formBuilder.group({
      question: ['', [requiredTrim]],
      answer: ['', [requiredTrim]],
      status: ['1', [requiredTrim]]
    });
  }

  public save() {
    this.httpCall = true;
    this.activatedRoute.params.subscribe((param: any) => {
      let data = this.faqFrm.value;
      data._id = param['id'];
      this.faq.editFaq(data).subscribe((result: any) => {
        this.httpCall = false;
        var rs = result.json();
        if (rs.status == this.config.statusCode.success) {
          this.toaster.success(rs.message);
          this.router.navigate(['faq']);
        } else {
          this.toaster.error(rs.message);
        }
      });
    });
  }

  public ngOnInit() {
    this.activatedRoute.params.subscribe((param: any) => {
      this.faq.getFaq({ id: param['id'] }).subscribe((result: any) => {
        var rs = result.json();
        if (rs.status == this.config.statusCode.success) {
          this.faqFrm.patchValue(rs.data);
          //this.staffdata.controls['role_id'].patchValue(rs.data.role_id);
        } else {
          this.toaster.error(rs.message);
          this.router.navigate(['faq']);
        }
      });
    });
  }

}
