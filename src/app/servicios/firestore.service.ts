import { inject, Injectable } from '@angular/core';
import { addDoc, collection, collectionData, doc, docData, Firestore, updateDoc, deleteDoc } from '@angular/fire/firestore'
import { Observable } from 'rxjs';
import { Usuario } from '../shared/modelos/usuario';
import { Club } from './../shared/modelos/club';
import { Instalacion } from './../shared/modelos/instalacion';


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  private afs = inject(Firestore);

  constructor() { }

  getCollection(path: string): Observable<any[]> {
    const refCol = collection(this.afs, path);
    return collectionData(refCol, { idField: 'id' }) as Observable<any[]>;
  }

  getDocument(path: string): Observable<any> {
    const refDoc = doc(this.afs, path);
    return docData(refDoc) as Observable<any>;
  }

  updateDocument(path: string, data: any) {
    const docRef = doc(this.afs,path);
    return updateDoc(docRef, data);
  }

  createDocument(path: string, data: any) {
    const colRef = collection(this.afs, path);
    return addDoc(colRef, data);
  }


  deleteDoc(path: string) {
    const colRef = doc(this.afs, path);
    return deleteDoc(colRef);
  }


  getUsuario(): Observable<Usuario[]> {
    return this.getCollection('usuarios');
  }


  getClub(): Observable<Club[]> {
    return this.getCollection('clubes');
  }

  getInstalacion(): Observable<Instalacion[]> {
    return this.getCollection('instalaciones');
  }
}
