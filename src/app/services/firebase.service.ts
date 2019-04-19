import { Injectable } from '@angular/core';
import { GetReceiveAddress } from '../shared/getReceiveAddress';  // Student data type interface class
  // Firebase modules for Database, Data list and Single object
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  receivePaymentsAddressesRef: AngularFireList<GetReceiveAddress>;    // Reference to Address data list, its an Observable
  receivePaymentsAddressRef: AngularFireObject<any>;   // Reference to Address object, its an Observable too
  // Inject AngularFireDatabase Dependency in Constructor
  constructor(private db: AngularFireDatabase) { }
   // Create Student
   AddAddress(getReceiveAddress: GetReceiveAddress) {
    this.receivePaymentsAddressesRef.push({
      address: getReceiveAddress.address,
      callback: getReceiveAddress.callback,
      index: getReceiveAddress.index
  });
  }

  // Fetch Single Student Object
  GetStudent(id: string) {
    this.receivePaymentsAddressRef = this.db.object('address-list/' + id);
    return this.receivePaymentsAddressRef;
  }

  // Fetch Students List
  GetStudentsList() {
    this.receivePaymentsAddressesRef = this.db.list('addresses-list');
    return this.receivePaymentsAddressesRef;
  }

  // Update Address Object
  UpdateStudent(getReceiveAddress: GetReceiveAddress) {
    this.receivePaymentsAddressesRef.push({
      address: getReceiveAddress.address,
      callback: getReceiveAddress.callback,
      index: getReceiveAddress.index
    });
  }

  // Delete Student Object
  DeleteStudent(id: string) {
    this.receivePaymentsAddressRef = this.db.object('addresses-list/' + id);
    this.receivePaymentsAddressRef.remove();
  }
}
