import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'test-frontend-look-and-feel-entry',
  template: `<test-frontend-nx-welcome></test-frontend-nx-welcome>`,
})
export class RemoteEntryComponent {}
