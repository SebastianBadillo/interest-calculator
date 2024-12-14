import { Component, Signal, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InterestFormComponent } from './components/interest-form/interest-form.component';
import { InterestForm } from './interfaces/interestForm.interface';
import { TableComponent } from './components/table/table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InterestFormComponent, TableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = '03-interest_calculator';
  form: WritableSignal<InterestForm | null> = signal(null);
  onFormSubmit(form: InterestForm) {
    this.form.set(form);
  }
}
