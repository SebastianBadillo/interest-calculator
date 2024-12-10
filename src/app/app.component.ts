import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InterestFormComponent } from './components/interest-form/interest-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InterestFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = '03-interest_calculator';
}
