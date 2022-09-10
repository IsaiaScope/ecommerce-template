import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div>
      <h3>Title</h3>
      <img src="../../../../assets/svgs/rawr.svg" />
      <p>
        Ex sint nulla aliqua deserunt adipisicing do incididunt esse enim enim.
        Minim labore ipsum ut veniam eiusmod incididunt esse sint. Proident id
        velit dolor adipisicing ea proident culpa occaecat incididunt fugiat
        Lorem. Culpa esse minim ullamco ea nostrud enim mollit reprehenderit.
        Enim excepteur aliquip aute ipsum duis. Ea nisi mollit nisi enim. Elit
        adipisicing proident magna proident tempor id eu occaecat. Tempor irure
        cillum quis officia enim et ut esse voluptate mollit laborum. Sunt
        cupidatat excepteur exercitation exercitation laboris nulla consectetur.
      </p>
    </div>
  `,
  styles: [
    `
      div {
        background-color: blue;
        padding: 5px;
        border-radius: 20px;
      }
    `,
  ],
})
export class CardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
