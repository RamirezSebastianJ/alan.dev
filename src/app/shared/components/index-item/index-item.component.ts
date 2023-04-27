import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-index-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './index-item.component.html',
  styleUrls: ['./index-item.component.scss'],
})
export class IndexItemComponent {
  @Input() index?: number;
  @Input() name?: string;
}
