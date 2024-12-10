import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
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
      initialInvestment: [''],
      annualInvestment: [''],
      expectedReturn: [''],
      duration: [''],
    });
  }
}
