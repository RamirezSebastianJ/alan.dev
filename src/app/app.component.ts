import { Component } from '@angular/core';
import { NgSwitch, NgSwitchDefault, NgSwitchCase } from '@angular/common';
import { NavbarComponent } from "./core/components/navbar/navbar.component";
import { HomeComponent } from "./features/home/home.component";
import { FooterComponent } from "./core/components/footer/footer.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [NgSwitch, NgSwitchDefault, NgSwitchCase, NavbarComponent, HomeComponent, FooterComponent]
})
export class AppComponent {
  title = 'alan.dev';
}
