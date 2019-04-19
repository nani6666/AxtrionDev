import { Component, OnInit } from '@angular/core';
import {CoinbaseService } from '../../services/coinbase.service';

const blockchainApikey = '1fe57c00-a072-4218-9bd5-843ce3e61e93';
const blockchainXPUB = 'xpub6CufqrzPqqNbQPza3jhDyeyEnZN68S6kMxUF6Qb3ANnEzd8FhM355c4C2YZ6BaqgQ5rqfzTMb2s6JKMyadJ83tFbaAhfoAUELUcjuA6nkXP';
const blockchainInvoiceID = encodeURIComponent('https://mystore.com?invoice_id=1');


@Component({
  selector: 'app-api-integration',
  templateUrl: './api-integration.component.html',
  styleUrls: ['./api-integration.component.css']
})
export class ApiIntegrationComponent implements OnInit {
 address: any;
  getaddressRequest: any;
  postBalanceUpdate: any;
  deleteBalupdate: any;
  notifydata: any;
  gapdata: any;
  callbackData: any;
  constructor(public blockchainService: CoinbaseService) { }

  ngOnInit() {
   this.getReceivebc();
   this.notificationTestbc();
   this.gapdatbc();
   this.calllogsbc();
  }

  public getReceivebc() {
    this.blockchainService.getCallreceiveBlockchain('?xpub=' + blockchainXPUB + '&callback='
       + blockchainInvoiceID + '&key=' + blockchainApikey + '&gap_limit=' + 1500).subscribe((res) => {
      console.log((res as any).address);
      this.getaddressRequest  = res ;
      this.balance_updateApibc((res as any).address);

  });
  }



 public balance_updateApibc(address) {
  const balanceUpdateData = {
  key: blockchainApikey,
  addr: address,
  callback: 'https://mystore.com?invoice_id=123',
  onNotification: 'KEEP',
  op: 'RECEIVE',
  confs: 5};
  this.blockchainService.postReceivePaymentsbc('/balance_update' , balanceUpdateData).subscribe(
    (respBalData: any) => {
   this.postBalanceUpdate = respBalData;
   this.balanceUpdtae(respBalData.id);
  });
 }

 public balanceUpdtae(id: any) {
  this.blockchainService.deleteBalanceupdate('/balance_update/' + id + '?key=' + blockchainApikey).subscribe(
    (respDataDelete: any) => {
    console.log(respDataDelete);
    this.deleteBalupdate = respDataDelete;
  });
 }

 public notificationTestbc() {
   const notifyData = {
   key: blockchainApikey,
   height: 25,
   callback: 'https://mysite.com/block?request_id=1234',
   onNotification: 'DELETE'};
   this.blockchainService.postReceivePaymentsbc('/block_notification' , notifyData).subscribe(
    (respData: any) => {
    console.log(respData);
    this.notifydata = respData;
  });
 }

 public gapdatbc() {
   this.blockchainService.getCallreceiveBlockchain('/checkgap?xpub=' + blockchainXPUB + '&key=' + blockchainApikey).subscribe(
    (respData: any) => {
    console.log(respData);
    this.gapdata = respData;
  });
 }

 public calllogsbc() {
  this.blockchainService.getCallreceiveBlockchain('/callback_log?' +
  'callback=https%3A%2F%2Fmystore.com%3Finvoice_id%3D05892112%26secret%3DZzsMLGKe162CfA5EcG6j'
  + '&key=' + blockchainApikey).subscribe(
   (respData: any) => {
   console.log(respData);
   this.callbackData = respData;
 });
}
}


