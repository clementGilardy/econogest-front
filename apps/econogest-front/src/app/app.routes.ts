import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('@econogest-front/transactions').then(
        (m) => m.TransactionsComponent
      ),
  },
];
