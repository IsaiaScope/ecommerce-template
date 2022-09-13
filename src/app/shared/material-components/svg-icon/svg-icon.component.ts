import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-icon',
  template: ` <mat-icon [svgIcon]="iconName"></mat-icon> `,
  styles: [
    `
      :host {
        display: grid;
      }
    `,
  ],
})
export class SvgIconComponent implements OnInit {
  @Input() iconName = '';
  constructor() {}

  ngOnInit(): void {}
}
