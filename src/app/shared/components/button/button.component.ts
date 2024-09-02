import { Component, Input } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ButtonType } from './types/button-type.type';

@Component({
	selector: 'lm-button',
	standalone: true,
	imports: [NzButtonModule],
	templateUrl: './button.component.html',
	styleUrl: './button.component.scss',
})
export class ButtonComponent {
	@Input() public text = 'Default name';
	@Input() public type: ButtonType = 'default';
}
