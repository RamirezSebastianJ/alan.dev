import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexItemComponent } from '../../../../shared/components/index-item/index-item.component';

@Component({
  selector: 'app-who-we-are',
  standalone: true,
  templateUrl: './who-we-are.component.html',
  styleUrls: ['./who-we-are.component.scss'],
  imports: [CommonModule, IndexItemComponent],
})
export class WhoWeAreComponent {
  //strengths
  strengths = [
    'We are a team of highly skilled and experienced professionals',
    'We are a team of highly skilled and experienced professionals',
    'We are a team of highly skilled and experienced professionals',
  ];
}
