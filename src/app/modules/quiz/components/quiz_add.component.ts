import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { AppConfig } from 'app/core/config/app.config';
import { Utills } from 'app/core/utility/utills';
import { TmpStorage } from 'app/core/utility/temp.storage';
import { QuizService } from 'app/core/services/quiz.services';
import { requiredTrim } from "app/core/validators/validators";


@Component({
  selector: 'app-quiz-add',
  preserveWhitespaces: false,
  templateUrl: './view/quiz_add.view.html',
  providers: [
    QuizService
  ]
})
export class QuizAddComponent {

  public httpCall: any = false;
  public quizFrm: FormGroup;

  constructor(
    private toaster: ToastrService,
    private quiz: QuizService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public config: AppConfig,
    private formBuilder: FormBuilder,
    public utills: Utills,
    private tmpStorage: TmpStorage
  ) {
    this.quizFrm = formBuilder.group({
      question: ['', [requiredTrim]],
      answers: this.formBuilder.array([]),
      status: ['1', [requiredTrim]]
    });
    this.addAns();
  }

  public addAns() {
    const control = <FormArray>this.quizFrm.controls['answers'];
    let addrCtrl = this.formBuilder.group({
      ans: ['', [requiredTrim]],
      correct_answer: [false]
    });
    control.push(addrCtrl);
  }

  public removeAns(i: number) {
    const control = <FormArray>this.quizFrm.controls['answers'];
    control.removeAt(i);
  }

  public currectAnsUpdate(i: number, e: any){
    this.quizFrm.controls['answers']['controls'].map((item:any, index:number) => {
      if(index == i){
        this.quizFrm.controls['answers']['controls'][index]['controls']['correct_answer'].patchValue(e);
      }else{
        this.quizFrm.controls['answers']['controls'][index]['controls']['correct_answer'].patchValue(false);
      }
    });
    
  }

  private checkCurrectAns(data:any) {
    return data.find((item:any) => { return item.correct_answer === true; });
  }

  public save() {
    if (this.checkCurrectAns(this.quizFrm.value['answers'])) {
      this.httpCall = true;
      let data = this.quizFrm.value;
      this.quiz.addQuiz(data).subscribe((result: any) => {
        this.httpCall = false;
        var rs = result.json();
        if (rs.status == this.config.statusCode.success) {
          this.toaster.success(rs.message);
          this.router.navigate(['quiz']);
        } else {
          this.toaster.error(rs.message);
        }
      });
    }else{
      this.toaster.error('Please select currect answer');
    }
  }

  public ngOnInit() { }

}
