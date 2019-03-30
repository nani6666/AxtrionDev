import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const blockchainReceivePaymentsURL = 'https://api.blockchain.info/v2/receive';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'text/plain',
  })
};
@Injectable({
  providedIn: 'root'
})
export class CoinbaseService {

  constructor(private httpClient: HttpClient) { }

  public getCallreceiveBlockchain(url: any) {
    return this.httpClient.get(blockchainReceivePaymentsURL + url );
  }

  public postReceivePaymentsbc(url: any , data: any) {
    return this.httpClient.post(blockchainReceivePaymentsURL + url , data ,  httpOptions);
  }

  public deleteBalanceupdate(url: any) {
   return this.httpClient.delete(blockchainReceivePaymentsURL + url );
  }

}
