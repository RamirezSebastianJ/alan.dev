import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoverComponent } from "./components/cover/cover.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    imports: [CommonModule, CoverComponent]
})
export class HomeComponent {

}
