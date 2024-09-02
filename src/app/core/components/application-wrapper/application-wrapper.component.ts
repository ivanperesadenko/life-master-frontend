import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { NzBreadCrumbComponent, NzBreadCrumbItemComponent } from 'ng-zorro-antd/breadcrumb';
import {
	NzContentComponent,
	NzFooterComponent,
	NzHeaderComponent,
	NzLayoutComponent,
	NzSiderComponent,
} from 'ng-zorro-antd/layout';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import { NzMenuDirective, NzMenuItemComponent } from 'ng-zorro-antd/menu';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

interface PageOption {
	text: string;
	iconName: string;
	iconTheme: 'fill' | 'outline' | 'twotone';
	path: string;
}

@Component({
	selector: 'lm-application-wrapper',
	standalone: true,
	imports: [
		NgForOf,
		NzBreadCrumbComponent,
		NzBreadCrumbItemComponent,
		NzContentComponent,
		NzFooterComponent,
		NzHeaderComponent,
		NzIconDirective,
		NzLayoutComponent,
		NzMenuDirective,
		NzMenuItemComponent,
		NzSiderComponent,
		RouterLink,
		HeaderComponent,
	],
	templateUrl: './application-wrapper.component.html',
	styleUrl: './application-wrapper.component.scss',
})
export class ApplicationWrapperComponent {
	isCollapsed = false;
	pagesList: PageOption[] = [
		{
			text: 'Todo List',
			iconName: 'ordered-list',
			iconTheme: 'outline',
			path: '/todos',
		},
		{
			text: 'Wallet',
			iconName: 'wallet',
			iconTheme: 'outline',
			path: '/wallet',
		},
	];
}
