import { Component, Inject } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ConfirmationService } from 'primeng/primeng';

import { AppConfig } from 'app/core/config/app.config';
import { Utills } from 'app/core/utility/utills';
import { TmpStorage } from 'app/core/utility/temp.storage';
import { FaqService } from 'app/core/services/faq.services';

@Component({
  selector: 'app-faq-list',
  preserveWhitespaces: false,
  templateUrl: './view/faq_list.view.html',
  providers: [
    FaqService
  ]
})
export class FaqListComponent {

  constructor(
    public config: AppConfig,
    private toaster: ToastrService,
    private faq: FaqService,
    private router: Router,
    private utills: Utills,
    private tmpStorage: TmpStorage,
    private confirmationService: ConfirmationService
  ) { }

  /*------------------ Listing Elements --------------------*/
  public loading: boolean = true;
  public listData: any = [];
  public totalItems: number = 0;
  public params: any = {
    'page': 1,
    'limit': this.config.perPageDefault,
    'question': ''
  };

  public setRecordPerPage(records: number): void {
    this.params.page = 1;
    this.params.limit = records;
    this.getAll();
  }

  public pageChanged(event: any): void {
    this.params.page = event.page;
    this.getAll();
  }

  public resetSearch(): void {
    this.params.question = '';
    this.getAll()
  }

  public changePageLimit(pageLimit: any){
    this.params.limit = pageLimit;
    this.getAll()
  }

  public getAll() {
    this.loading = true;
    this.faq.getFaqList(this.params).subscribe((result) => {
      let rs = result.json();
      if (rs.status == this.config.statusCode.success) {
        this.listData = rs.data.data;
        this.totalItems = rs.data.total_count;
      } else {
        this.toaster.error(rs.message);
      }
      this.loading = false;
    });
  }
  /*------------------ Listing Elements --------------------*/

  public remove(id: string) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete?',
      header: 'Confirmation',
      icon: 'fa fa-question-circle',
      accept: () => {
        this.faq.deleteFaq({ _id: id }).subscribe((result) => {
          let rs = result.json();
          if (rs.status == this.config.statusCode.success) {
            this.getAll();
            this.toaster.success(rs.message);
          } else {
            this.toaster.error(rs.message);
          }
          this.loading = false;
        });
      },
      reject: () => {
      }
    });
  }

  public ngOnInit(): void {
    this.getAll();
  }

}
