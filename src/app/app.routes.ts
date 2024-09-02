import { Routes } from '@angular/router';

import { TodosComponent } from './features/todos/todos.component';
import { WalletComponent } from './features/wallet/wallet.component';

export const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'todos',
	},
	{
		path: 'todos',
		component: TodosComponent,
	},
	{
		path: 'wallet',
		component: WalletComponent,
	},
];
