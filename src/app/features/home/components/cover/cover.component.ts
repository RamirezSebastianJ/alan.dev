import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cover',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss'],
})
export class CoverComponent {

  strengths = [
    {
      icon: 'assets/images/icons/core.png',
      title: 'Passion',
      description: 'I love what I do and I do what I love.',
    },
    {
      icon: 'assets/images/icons/neural.png',
      title: 'Innovation',
      description: 'I am always looking for new ways to improve.',
    },
    {
      icon: 'assets/images/icons/ux.png',
      title: 'Creativity',
      description: 'I am always looking for new ways to improve.',
    },
  ];
}
