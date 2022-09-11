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

  filePath = 'pexels-photo-1757363 (1)';
  $imgs = this.fbDB.downloadFile(this.filePath);
  constructor(
    private fbDB: FirebaseService,
    private fbAuth: FirebaseAuthService
  ) {
    this.$data = this.fbDB.getCollectionWithId('pollo').subscribe((res) => {
      console.log(res);
    });

    // this.fbDB.getCollection('users').subscribe((res) => {
    //   console.log(res);
    // });

    const user = { email: 'pippo@test.com', password: '123456@Albanese' };
    this.fbAuth.signInUser(user);
  }

  ngOnInit(): void {}
  onClick() {
    if (!this.filePath) {
      return;
    }
    this.fbDB.addDoc('pollo', {
      carlo: 'beppe',
      carl3: 'beppe2',
      img: this.filePath,
    });
  }

  uploadFile(event: any) {
    const file = event.target.files[0];
    console.log(event);
    const filePath = file.name.split('.')[0];
    console.log(event);
    this.fbDB.uploadBlobWithPut(filePath, file);
  }
}
