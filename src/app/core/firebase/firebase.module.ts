import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment as env } from 'src/environments/environment';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(env.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
})
export class FirebaseModule {}
