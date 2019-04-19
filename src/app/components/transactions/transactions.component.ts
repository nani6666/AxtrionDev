import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {CoinbaseService } from '../../services/coinbase.service';
import {Commonvalues} from '../../shared/commonfile';
import { FormGroup , FormBuilder , FormArray , Validators } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  getReceiveAddressForm: FormGroup;
  invoiceUrlInput: any;
  items: Observable<any[]>;
  constructor(public fireservice: FirebaseService ,
              public blockchainService: CoinbaseService ,
              public firebasedb: AngularFireDatabase,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.items = this.firebasedb.list('addresses').valueChanges();
    console.log(this.items);
    this.getReceiveAddressForm = this.fb.group({
      address: '',
      callback: '',
      index: ''
    });
  }


  receivePayments() {
    const invoiceurl   =  encodeURIComponent(this.invoiceUrlInput);
    const itemsRef = this.firebasedb.list('addresses');
    this.blockchainService.getCallreceiveBlockchain('?xpub=' + Commonvalues.blockchainXPUB + '&callback='
    + invoiceurl + '&key=' + Commonvalues.blockchainApikey + '&gap_limit=' + 1500).subscribe((res) => {
   this.getReceiveAddressForm.value.address = (res as any).address ;
   this.getReceiveAddressForm.value.callback = (res as any).callback  ;
   this.getReceiveAddressForm.value.index = (res as any).index ;
   itemsRef.push(this.getReceiveAddressForm.value);
    });
  }
}
