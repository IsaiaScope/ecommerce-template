import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class FirebaseAuthService {
  constructor(private fbAuth: AngularFireAuth) {}

  registerUser(data: { email: string; password: string }) {
    const { email, password } = data;
    this.fbAuth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  signInUser(data: { email: string; password: string }) {
    const { email, password } = data;
    this.fbAuth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res);
        // update status to loggedIn
      })
      .catch((err) => console.log(err));
  }

  initAuthListener() {
    this.fbAuth.authState.subscribe(() => {});
  }
}
