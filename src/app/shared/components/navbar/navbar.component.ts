import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCustomState } from 'src/app/core/store';
import { C } from '../../constants/config';

@Component({
  selector: 'app-navbar',
  template: `
    <div class="navbar">
      <app-menu-icon></app-menu-icon>
      <div class="flex">
        <app-icon-google-fonts
          *ngFor="let link of links"
          [iconName]="navbar.links[link].icon"
        ></app-icon-google-fonts>
      </div>
      <!-- {{ ($mainMenuIsOpen | async).mainMenuIsOpen }} -->
    </div>
  `,
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  $mainMenuIsOpen: Observable<any> = this.store.select<any>(selectCustomState);

  links = Reflect.ownKeys(C.navbar.links).filter((v) => v !== 'logo');
  navbar: any = C.navbar;

  constructor(private store: Store) {
    console.log(this.links, this.navbar);
  }

  ngOnInit(): void {}
}
