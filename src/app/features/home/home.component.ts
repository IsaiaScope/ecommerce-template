import { Component, OnInit } from '@angular/core';
import { FirebaseAuthService } from 'src/app/core/firebase/firebase-auth.service';
import { FirebaseService } from 'src/app/core/firebase/firebase-db.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  $data: any;
  constructor(
    private fbDB: FirebaseService,
    private fbAuth: FirebaseAuthService
  ) {
    this.$data = this.fbDB.getCollectionWithId('users').subscribe((res) => {
      console.log(res);
    });

    this.fbDB.getCollection('users').subscribe((res) => {
      console.log(res);
    });

    const user = { email: 'pippo@test.com', password: '123456@Albanese' };
    this.fbAuth.signInUser(user);
  }

  ngOnInit(): void {}
}
