import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionFormComponent } from '../transaction-form/transaction-form.component';

@Component({
  selector: 'eco-transactions',
  standalone: true,
  imports: [CommonModule, TransactionFormComponent],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.less',
})
export class TransactionsComponent {}
