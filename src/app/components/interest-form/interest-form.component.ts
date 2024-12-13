import { InterestForm } from './../../interfaces/interestForm.interface';
import { Component, EventEmitter, Output } from '@angular/core';
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
  @Output() formSubmit = new EventEmitter<InterestForm>();

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }

  /**
   * Builds the form group for the interest form with validation rules.
   */
  buildForm() {
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
  /**
   * Allows only numeric input in the form fields.
   *
   * @param event - The keyboard event triggered by user input.
   * @returns {boolean} - Returns false if the input is not a number, true otherwise.
   */
  allowOnlyNumbers(event: any) {
    const charCode = event.charCode || event.keyCode;
    if (charCode < 48 || charCode > 57) {
      return false;
    }
    return true;
  }

  /**
   * Handles the form submission.
   * If the form is valid, the form is emmited.
   * If the form is invalid, alerts the user and marks all fields as touched.
   */
  onSendForm() {
    if (this.interestForm.valid) {
      this.formSubmit.emit(this.interestForm.value);
    } else {
      alert('Please fill all the fields');
      this.interestForm.markAllAsTouched();
    }
  }
}
