import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-google-fonts',
  template: `
    <a class="icon-link">
      <span class="material-icons"> {{ iconName }} </span>
    </a>
  `,
  styles: [
    `
      .icon-link {
        display: grid;
        place-content: center;
      }
    `,
  ],
})
export class IconGoogleFontsComponent implements OnInit {
  @Input() iconName = '';
  constructor() {}

  ngOnInit(): void {}
}
