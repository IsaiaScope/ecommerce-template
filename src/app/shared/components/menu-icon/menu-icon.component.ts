import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { mainMenuToggleFlagHandler } from 'src/app/core/store/custom/custom.action';

@Component({
  selector: 'app-menu-icon',
  template: `
    <div class="container" (click)="clickHandler()">
      <div id="icon-block" [ngClass]="{ 'flag-on': flag }">
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
      </div>
    </div>
  `,
  styles: [
    `
      %transition {
        -webkit-transition: all 0.3s ease-in-out;
        -o-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
      }

      .container {
        cursor: pointer;
        width: fit-content;
        padding: 2px 10px;
        #icon-block .line {
          @extend %transition;
          width: 35px;
          height: 5px;
          background-color: var(--c-Connecticut);
          display: block;
          margin: 8px auto;
        }

        #icon-block.flag-on {
          @extend %transition;
          -webkit-transition-delay: 0.6s;
          -o-transition-delay: 0.6s;
          transition-delay: 0.6s;
          -webkit-transform: rotate(45deg);
          -ms-transform: rotate(45deg);
          -o-transform: rotate(45deg);
          transform: rotate(45deg);
        }
        #icon-block.flag-on .line:nth-child(2) {
          width: 0px;
        }
        #icon-block.flag-on .line:nth-child(1),
        #icon-block.flag-on .line:nth-child(3) {
          -webkit-transition-delay: 0.3s;
          -o-transition-delay: 0.3s;
          transition-delay: 0.3s;
        }
        #icon-block.flag-on .line:nth-child(1) {
          -webkit-transform: translateY(13px);
          -ms-transform: translateY(13px);
          -o-transform: translateY(13px);
          transform: translateY(13px);
        }
        #icon-block.flag-on .line:nth-child(3) {
          -webkit-transform: translateY(-13px) rotate(90deg);
          -ms-transform: translateY(-13px) rotate(90deg);
          -o-transform: translateY(-13px) rotate(90deg);
          transform: translateY(-13px) rotate(90deg);
        }
      }
    `,
  ],
})
export class MenuIconComponent {
  flag = false;
  constructor(private store: Store) {}

  clickHandler() {
    this.flag = !this.flag;
    this.store.dispatch(mainMenuToggleFlagHandler({ flag: this.flag }));
  }
}
