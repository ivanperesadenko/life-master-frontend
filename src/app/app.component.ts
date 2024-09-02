import { Component } from '@angular/core';
import { ApplicationWrapperComponent } from './core/components/application-wrapper/application-wrapper.component';
import { RouterOutlet } from '@angular/router';

@Component({
	selector: 'lm-root',
	standalone: true,
	imports: [ApplicationWrapperComponent, RouterOutlet],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent {}
