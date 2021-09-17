import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-layout',
  template: `
    <div class="layout">
      <div class="layout__header">
        <ng-content select="[header]"></ng-content>
      </div>
      <div class="layout__content">
        <ng-content class="layout__content__section" select="[content]"></ng-content>
      </div>
    </div>
  `,
})
export class DashboardLayoutComponent {}
