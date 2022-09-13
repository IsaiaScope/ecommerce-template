import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FirebaseService } from 'src/app/core/firebase/firebase-db.service';

@Component({
  selector: 'app-category-card',
  template: `
    <div class="category-card-box" (click)="navigateTo()" *ngIf="config">
      <img class="category-card-img" [src]="$img | async" alt="" />
      <div class="category-card-desc">
        <h3 class="category-card-title">{{ config.title }}</h3>
        <button class="category-card-btn">{{ config.btnLabel }}</button>
      </div>
    </div>
  `,
  styles: [
    `
      .category-card {
        &-box {
          background-color: red;
          border-radius: 20px;
          margin: 10px;
          width: fit-content;
          margin: auto;
        }
        &-img {
          border-radius: 20px 20px 0px 0px;
        }
        &-desc {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 25px;
        }
      }
    `,
  ],
})
export class CategoryCardComponent implements OnInit, OnChanges {
  // [ ] TODO placeholder for category because render empty one
  @Input() config: {
    title: string;
    btnLabel: string;
    route: string;
    fbFilePath: string;
  } = {
    title: '',
    btnLabel: '',
    route: '',
    fbFilePath: '',
  };

  $img: any;

  constructor(private fbDB: FirebaseService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['config'].currentValue.fbFilePath) {
      this.$img = this.fbDB.downloadFile(this.config.fbFilePath);
    }
  }

  ngOnInit(): void {}

  navigateTo(): void {}
}
