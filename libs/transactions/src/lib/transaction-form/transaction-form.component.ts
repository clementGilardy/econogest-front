import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';

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
  imports: [ReactiveFormsModule, MatInput, MatButton, MatFormField],
  templateUrl: './transaction-form.component.html',
  styleUrl: './transaction-form.component.less',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
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
