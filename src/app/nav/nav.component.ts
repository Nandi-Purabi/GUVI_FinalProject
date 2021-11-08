import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { userCartList1 } from '../model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  public searchTerm:string='';
  cartBasedonID:Array<userCartList1>=[];
  constructor(private service:ApiService,private router:Router) { }

  ngOnInit(): void {
    this.getCartTotalItems();
  }

  getCartTotalItems(){
    this.service.getcartitems().subscribe(data=>{
      this.cartBasedonID=data;
    })
  }

  changeStatus(){
    this.service.currentUserID=0;
    console.log(this.service.currentUserID);
    this.router.navigate(['']);
  }
  gotohome(){
    this.router.navigate(['/home', this.service.currentUserID]);
  }
  gotocart(){
    this.router.navigate(['/cart', this.service.currentUserID]);
  }

  search(event:any){
    this.searchTerm=(event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.service.search.next(this.searchTerm);
  }

}
