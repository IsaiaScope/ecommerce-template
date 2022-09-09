import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCustomState } from 'src/app/core/store';

@Component({
  selector: 'app-navbar',
  template: `
    <div class="navbar">
      <app-menu-icon></app-menu-icon>
      {{ ($mainMenuIsOpen | async).mainMenuIsOpen }}
    </div>
  `,
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  $mainMenuIsOpen: Observable<any> = this.store.select<any>(selectCustomState);
  constructor(private store: Store) {}

  ngOnInit(): void {}
}
