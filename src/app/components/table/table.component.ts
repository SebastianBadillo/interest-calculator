import {
  Component,
  effect,
  Input,
  Signal,
  WritableSignal,
} from '@angular/core';
import { InterestForm } from '../../interfaces/interestForm.interface';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  @Input({ required: true }) formSignal!: Signal<InterestForm | null>;
  annualData: any[] = [];

  ngOnInit() {}
  constructor() {
    effect(() => {
      const data = this.formSignal();
      if (data) {
        this.annualData = this.calculateInvestmentResults(data);
      }
    });
  }

  // Use the below code as a help
  // e.g., integrate it into a service or component
  // You may need to tweak it, depending on where and how you use it
  calculateInvestmentResults(form: InterestForm) {
    const { initialInvestment, annualInvestment, expectedReturn, duration } =
      form;
    const annualData = [];
    let investmentValue = initialInvestment;
    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }
    return annualData;
  }
}
