import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(private db: AngularFirestore) {}

  getCollection(name: string): Observable<any> {
    return this.db.collection(name).valueChanges();
  }
}
