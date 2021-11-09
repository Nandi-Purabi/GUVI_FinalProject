import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { productList, userList, userCartList1, userCartList2 } from './model';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public search=new BehaviorSubject<string>("");
  currentUserID:number=0;
  readonly ApiUrl = "https://cors-everywhere.herokuapp.com/http://purabinandi-001-site1.etempurl.com/api";

  constructor(private http:HttpClient) {}

  getProductList():Observable<Array<productList>>{
    return this.http.get<Array<productList>>(this.ApiUrl+'/products');
  }

  // updateProduct(val:any){
  //   this.http.put(this.ApiUrl+'/products',val);
  // }

  // getUserList():Observable<Array<userList>>{
  //   return this.http.get<Array<userList>>(this.ApiUrl+'/users');
  // }

  addUser(val:any){
    return this.http.post(this.ApiUrl+'/users',val);
  }

  getcartitems(){  
    return this.http.get<Array<userCartList1>>(this.ApiUrl+`/usercart?login_id=${this.currentUserID}`);
  }

  // getUserCartList():Observable<Array<userCartList1>>{
  //   return this.http.get<Array<userCartList1>>(this.ApiUrl+'/usercart');
  // }

  getLoginDetails(email:string):Observable<Array<userList>>{
    return this.http.get<Array<userList>>(this.ApiUrl+`/users?login_email=${email}`);
  }

  getbyjoin(pro_id:number)
  {
    return this.http.get<userCartList2>(this.ApiUrl+`/products?pro_id=${pro_id}`);
  }
  addproducttocart(val:userCartList1){
    return this.http.post(this.ApiUrl+'/usercart',val);
  }

  deletefromcart(val:userCartList1){
    return this.http.delete(this.ApiUrl+`/usercart?userID=${val.userID}&&product_id=${val.product_id}`);
  }
}
