import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {
  AngularFireStorage,
  AngularFireUploadTask,
} from '@angular/fire/compat/storage';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { AsyncCodeService } from '../services/async-code.service';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(
    private fbDB: AngularFirestore,
    private fbStorage: AngularFireStorage,
    private asyncSrv: AsyncCodeService
  ) {}

  getCollection(name: string): Observable<any[]> {
    return this.fbDB.collection(name).valueChanges();
  }

  getCollectionWithId(name: string): Observable<any> {
    return this.fbDB
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

  // It takes a name and a value, and adds the value to the collection with the name
  // NOTE if collection doesn't exist is created automatically
  addDoc(collectionName: string, value: any) {
    this.asyncSrv.wrap(this.fbDB.collection(collectionName).add(value));
  }

  updateDoc(collectionName: string, id: string, valuesToAdd: any) {
    const path = `${collectionName}${id}`;
    this.asyncSrv.wrap(this.fbDB.doc(path).update(valuesToAdd));
  }

  setDoc(collectionName: string, id: string, newValue: any) {
    const path = `${collectionName}${id}`;
    this.asyncSrv.wrap(this.fbDB.doc(path).set(newValue));
  }

  deleteDoc(collectionName: string, id: string) {
    const path = `${collectionName}${id}`;
    this.asyncSrv.wrap(this.fbDB.doc(path).delete());
  }

  uploadFile(filePath: string, fileData: any): AngularFireUploadTask {
    return this.fbStorage.upload(filePath, fileData);
  }

  uploadBlobWithPut(filePath: string, fileData: any): AngularFireUploadTask {
    const ref = this.fbStorage.ref(filePath);
    return ref.put(fileData);
  }

  downloadFile(filePath: string): Observable<any> {
    const ref = this.fbStorage.ref(filePath);
    return ref.getDownloadURL();
  }
}
