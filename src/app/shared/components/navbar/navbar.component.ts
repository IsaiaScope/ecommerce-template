import { Component, OnInit } from '@angular/core';
import { C } from '../../constants/config';

@Component({
  selector: 'app-navbar',
  template: `
    <div class="navbar">
      <a href="" *ngFor="let link of links">
        <app-svg-icon [iconName]="navbar.links[link].iconName"></app-svg-icon>
      </a>
    </div>
  `,
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  navbar: any = C.navbar;
  links = Reflect.ownKeys(this.navbar.links).filter((v) => v !== 'logo');

  constructor() {}

  ngOnInit(): void {}
}
