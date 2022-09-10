import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/core/firebase/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  $data = this.fb.getCollection('users');
  constructor(private fb: FirebaseService) {}

  ngOnInit(): void {}
}
