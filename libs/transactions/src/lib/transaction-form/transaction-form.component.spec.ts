import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionFormComponent } from './transaction-form.component';
import { FormGroup } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('TransactionFormComponent', () => {
  let component: TransactionFormComponent;
  let fixture: ComponentFixture<TransactionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionFormComponent, BrowserAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(TransactionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be content a paragraph', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const paragraph = compiled.querySelector('form');
    expect(paragraph).toBeTruthy();
  });

  it('Should have a form', () => {
    const form = (component as any).form;
    expect(form).toBeTruthy();
    expect(form instanceof FormGroup).toBe(true);
  });

  it('Should have a form of type TransactionForm', () => {
    const form = (component as any).form;
    expect(form).toBeTruthy();
    expect(form.controls.amount).toBeDefined();
    expect(form.controls.category).toBeDefined();
    expect(form.controls.date).toBeDefined();
    expect(form.controls.type).toBeDefined();
    expect(form.controls.notes).toBeDefined();
  });
});
