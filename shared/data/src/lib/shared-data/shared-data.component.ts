import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'test-frontend-shared-data',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shared-data.component.html',
  styleUrls: ['./shared-data.component.css'],
})
export class SharedDataComponent {}
