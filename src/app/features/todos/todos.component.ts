import { Component } from '@angular/core';
import { NzColDirective, NzRowDirective } from 'ng-zorro-antd/grid';

@Component({
	selector: 'lm-todos',
	standalone: true,
	imports: [NzRowDirective, NzColDirective],
	templateUrl: './todos.component.html',
	styleUrl: './todos.component.scss',
})
export class TodosComponent {}
