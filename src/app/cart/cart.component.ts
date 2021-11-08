import { Component, OnInit } from '@angular/core';
import { ɵangular_packages_platform_browser_dynamic_platform_browser_dynamic_a } from '@angular/platform-browser-dynamic';
import { ApiService } from '../api.service';
import { userCartList1, userCartList2 } from '../model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems:Array<userCartList1>=[];
  cartDetails:Array<userCartList2>=[];
  totalprice:number=0;
  deleteItem:userCartList1={
    "userID": 0,
    "product_id": 0,
    "buy_quantity": 1
  }
  constructor(private service: ApiService) { }

  ngOnInit(): void {
    this.loadData(); 
  }
    loadData(){
     this.service.getcartitems().subscribe(data=>{
      this.cartItems=data;
    //   console.log("before join");
    // console.log(this.cartItems);
      this.getAlldata();
    });
    
  }
  getAlldata(){
    // for(let item=0;item<this.cartItems.length;item++)
    var temp_details:Array<userCartList2>=[];
    var temp_price:number=0;
    for(let item of this.cartItems)
    {
      this.service.getbyjoin(item.product_id).subscribe(pro_d=>{
        //console.log("string   ",pro_d);
        var temp:any=pro_d;
        temp_details.push(temp[0]);
        // console.log(pro_d.price);
        // console.log(temp[0].price);
        this.totalprice=this.totalprice+temp[0].price;
        // console.log(this.totalprice);
        // console.log("After join");
    // console.log(this.cartDetails);
    });
  }
  this.cartDetails=temp_details;
  var temp_price=0;
  this.cartDetails.forEach(element => {
    temp_price+=element.price;
  });
  this.totalprice=temp_price;
}

  deleteitem(pro_id:number,price:number){
    console.log("entered function");
    this.deleteItem.userID=this.service.currentUserID;
    this.deleteItem.product_id=pro_id;
    this.deleteItem.buy_quantity=1;
    console.log(this.deleteItem);
    this.service.deletefromcart(this.deleteItem).subscribe(()=>{
     // this.totalprice=this.totalprice-price;
      this.loadData();
      alert("Item Successfully Deleted from Cart!!");
    }
    )
  }
}
