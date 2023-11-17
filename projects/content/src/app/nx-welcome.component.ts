import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'test-frontend-nx-welcome',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `<div style="height: 100vh; display: flex; justify-content: center;align-items: center">
          <h1>Welcome to content!</h1>
         </div>`,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent { }
