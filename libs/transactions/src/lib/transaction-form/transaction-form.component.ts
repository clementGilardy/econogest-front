import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatInput } from '@angular/material/input';

export type Nullable<T> = T | null;
export type TransactionType = 'expense' | 'income';

export type Transaction = {
  amount: number;
  category: string;
  date: Date;
  type: TransactionType;
  notes: string;
};

export type TransactionForm = {
  [Property in keyof Transaction]: FormControl<Nullable<Transaction[Property]>>;
};

@Component({
  selector: 'eco-transaction-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatInput],
  templateUrl: './transaction-form.component.html',
  styleUrl: './transaction-form.component.less',
})
export class TransactionFormComponent {
  private readonly fb = inject(FormBuilder);
  protected form = this.fb.group<TransactionForm>({
    amount: this.fb.control(null),
    category: this.fb.control(null),
    date: this.fb.control(null),
    type: this.fb.control(null),
    notes: this.fb.control(null),
  });
}
