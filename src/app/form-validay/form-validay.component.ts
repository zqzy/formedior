import { Component, OnInit } from '@angular/core';
// import { forbiddenNameValidator } from '../forbidden-name.directive';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Hero} from '../formapp';
@Component({
  selector: 'app-form-validay',
  templateUrl: './form-validay.component.html',
  styleUrls: ['./form-validay.component.css']
})
export class FormValidayComponent implements OnInit {

  heroForm: FormGroup;
   hero = new Hero(18, 'Dr. WhatIsHisName', 'adasdasd', 'Dr. What');
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.buildForm();
  }
  buildForm(): void {
    this.heroForm = this.fb.group({
      'name': [this.hero.name, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(24),
        // forbiddenNameValidator(/bob/i)
      ]
      ],
      'alterEgo': [this.hero.alterEgo],
      'power': [this.hero.power, Validators.required]
    });

    this.heroForm.valueChanges
      .subscribe(data => this.onValueChanged(data));
    // forbiddenNameValidator()    
    this.onValueChanged(); // (re)set validation messages now
  }


  onValueChanged(data?: any) {
    if (!this.heroForm) { return; }
    const form = this.heroForm;

    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  formErrors = {
    'name': '',
    'power': ''
  };

  validationMessages = {
    'name': {
      'required': 'Name is required.',
      'minlength': 'Name must be at least 4 characters long.',
      'maxlength': 'Name cannot be more than 24 characters long.',
      'forbiddenName': 'Someone named "Bob" cannot be a hero.'
    },
    'power': {
      'required': 'Power is required.'
    }
  };
  tyewerw(){
    console.log(this.hero);
  }

}
