import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoverComponent } from "./components/cover/cover.component";
import { WhoWeAreComponent } from "./components/who-we-are/who-we-are.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    imports: [CommonModule, CoverComponent, WhoWeAreComponent]
})
export class HomeComponent {

}
