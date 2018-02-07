import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { UserService } from "app/core/services/user.services";
import { AppConfig } from "app/core/config/app.config";
import { Utills } from 'app/core/utility/utills';
import { requiredTrim } from "app/core/validators/validators";
import { WebStorage } from "app/core/utility/web.storage";

@Component({
    selector: 'profile-component',
    templateUrl: './view/profile.component.html',
    styleUrls:['./css/profile.css'],
    providers: [
      UserService
  ]
})
export class ProfileComponent {

  public profileFrm: FormGroup;
  public httpCall: any = false;

  constructor(
    private toaster: ToastrService,
    private user: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public config: AppConfig,
    public utills: Utills,
    private storage: WebStorage,
    private formBuilder: FormBuilder
  ) {
    this.profileFrm = formBuilder.group({
      name: ['', [requiredTrim]],
      email: ['', [requiredTrim, Validators.pattern(this.config.pattern.EMAIL)]],
      country_code: ['+1', [requiredTrim]],
      phone: ['', [requiredTrim, Validators.minLength(10), Validators.maxLength(10)]]
    });
  }

  public ngOnInit() {
    this.activatedRoute.params.subscribe((param: any) => {
        this.user.getProfile({ id: param['id'] }).subscribe((result: any) => {
          var rs = result.json();
          if (rs.status == this.config.statusCode.success) {   
            var phone = rs.data.phone;
            rs.data.phone = phone.slice(-10);
            rs.data.country_code = phone.slice(0,-10);     
            this.profileFrm.patchValue(rs.data);
          } else {
            this.toaster.error(rs.message);
          }
        });
    });
  }

  public save() {
    this.httpCall = true;
    this.activatedRoute.params.subscribe((param: any) => {
      let data = this.profileFrm.value;
      data._id = param['id'];
      data.phone = data.country_code+data.phone;
      this.user.updateSAProfile(data).subscribe((result: any) => {
        this.httpCall = false;
        var rs = result.json();
        if (rs.status == this.config.statusCode.success) {
          this.storage.localStore(this.config.token.userKey,rs.data);
          this.toaster.success(rs.message);
          //this.router.navigate(['dashboard']);
          location.reload();
        } else {
          this.toaster.error(rs.message);
        }
      });
    });
  }

}
