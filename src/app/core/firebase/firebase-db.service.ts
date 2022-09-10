import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(private db: AngularFirestore) {}

  getCollection(name: string): Observable<any[]> {
    return this.db.collection(name).valueChanges();
  }

  getCollectionWithId(name: string): Observable<any> {
    return this.db
      .collection(name)
      .snapshotChanges()
      .pipe(
        map((res: any[]) =>
          res.map((doc) => {
            return { id: doc.payload.doc.id, ...doc.payload.doc.data() };
          })
        )
      );
  }

  createCollection(name: string, value: any) {
    this.db.collection(name).add(value);
  }

  updateDoc(collectionName: string, id: string, valueToAdd: any) {
    this.db.doc(`${collectionName}${id}`).update(valueToAdd);
  }

  setDoc(collectionName: string, id: string, valueToAdd: any) {
    this.db.doc(`${collectionName}${id}`).set(valueToAdd);
  }

  deleteDoc(collectionName: string, id: string) {
    this.db.doc(`${collectionName}${id}`).delete();
  }
}
