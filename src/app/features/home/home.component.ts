import { Component, OnInit } from '@angular/core';
import { FirebaseAuthService } from 'src/app/core/firebase/firebase-auth.service';
import { FirebaseService } from 'src/app/core/firebase/firebase-db.service';
import { ImgCompressorService } from 'src/app/core/services/img-compresser.service';
import { HOME } from 'src/app/shared/constants/config';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  categories = HOME.categories;
  categoriesKeys = Reflect.ownKeys(HOME.categories) as string[];

  constructor(
    private fbDB: FirebaseService,
    private fbAuth: FirebaseAuthService,
    private imgSrv: ImgCompressorService
  ) {
    this.fbDB.getCollectionWithId('pollo').subscribe((res) => {
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
    this.fbDB.addDoc('pollo', {
      carlo: 'beppe',
      carl3: 'beppe2',
    });
  }

  async uploadFile(event: any) {
    const file = event.target.files[0];
    const _file = await this.imgSrv.compressImage(file);
    this.fbDB.uploadBlobWithPut(
      `shop-categories/${file.name.split('.')[0]}`,
      _file
    );
  }
}
