import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-interest-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './interest-form.component.html',
  styleUrl: './interest-form.component.scss',
})
export class InterestFormComponent {
  interestForm: FormGroup = new FormGroup({});
  constructor(private formBuilder: FormBuilder) {
    this.interestForm = this.formBuilder.group({
      initialInvestment: [
        '',
        [
          Validators.required,
          Validators.min(0),
          Validators.pattern('^[0-9]*$'),
        ],
      ],
      annualInvestment: [
        '',
        [
          Validators.required,
          Validators.min(0),
          Validators.pattern('^[0-9]*$'),
        ],
      ],
      expectedReturn: [
        '',
        [
          Validators.required,
          Validators.min(0),
          Validators.pattern('^[0-9]*$'),
        ],
      ],
      duration: [
        '',
        [
          Validators.required,
          Validators.min(0),
          Validators.pattern('^[0-9]*$'),
        ],
      ],
    });
  }

  allowOnlyNumbers(event: any) {
    const charCode = event.charCode || event.keyCode;
    if (charCode < 48 || charCode > 57) {
      return false;
    }
    return true;
  }
  onSendForm() {
    console.log(this.interestForm);
  }
}
