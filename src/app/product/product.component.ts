import { Component, OnInit } from '@angular/core';
import { productList, userCartList1 } from '../model';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  searchkey:string="";
  allProducts: Array<productList> = [];
  currentitem:userCartList1={
    "userID": 0,
    "product_id": 0,
    "buy_quantity": 0
  };
  urlID: string = "";
  urlID2: string = "";

  constructor(private service: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((paramsData) => {
      this.urlID = paramsData.id;
      this.urlID2 = paramsData.id1;
    })
    this.getAllProducts();
    this.service.search.subscribe((val:any)=>
    {
      this.searchkey=val;
    })
  }
  
  addToCart(pro_id:number){
    console.log(this.service.currentUserID);
    this.currentitem.userID=this.service.currentUserID;
    this.currentitem.product_id=pro_id;
    this.currentitem.buy_quantity=1;
    this.service.addproducttocart(this.currentitem).subscribe(()=>{
      
      alert("Item Successfully Added to Cart!!");
    }); 
  }

  getAllProducts() {
    if (this.urlID === "All" && this.urlID2 === "Products") {
      this.service.getProductList().subscribe(data => {
        this.allProducts = data;
      });
    }
    else if(this.urlID === "Women" && this.urlID2 === "Fashion"){
      this.service.getProductList().subscribe(data => {
        this.allProducts = data.filter((item) => {
          return (item.product_code.includes('WF'));
        })
      });
    }
    else if(this.urlID === "Men" && this.urlID2 === "Fashion"){
      this.service.getProductList().subscribe(data => {
        this.allProducts = data.filter((item) => {
          return (item.product_code.includes('MF'));
        })
      });
    }
    else if(this.urlID === "Kids" && this.urlID2 === "Fashion"){
      this.service.getProductList().subscribe(data => {
        this.allProducts = data.filter((item) => {
          return (item.product_code.includes('KF'));
        })
      });
    }
    else if(this.urlID === "All" && this.urlID2 === "Electronics"){
      this.service.getProductList().subscribe(data => {
        this.allProducts = data.filter((item) => {
          return (item.product_code.includes('E'));
        })
      });
    }
    else if(this.urlID === "All" && this.urlID2 === "Accessories"){
      this.service.getProductList().subscribe(data => {
        this.allProducts = data.filter((item) => {
          return (item.product_code.includes('WA') || item.product_code.includes('MA') || item.product_code.includes('KA'));
        })
      });
    }
    else if(this.urlID === "Women" && this.urlID2 === "Jacket"){
      this.service.getProductList().subscribe(data => {
        this.allProducts = data.filter((item) => {
          return (item.product_type.includes('Jacket') && item.category=='Women');
        })
      });
    }
    else if(this.urlID === "Women" && this.urlID2 === "Winter"){
      this.service.getProductList().subscribe(data => {
        this.allProducts = data.filter((item) => {
          return (item.product_type.includes('Winter') && item.category=='Women');
        })
      });
    }
    else if(this.urlID === "Women" && this.urlID2 === "Dress"){
      this.service.getProductList().subscribe(data => {
        this.allProducts = data.filter((item) => {
          return (item.product_type.includes('Dress') && item.category=='Women');
        })
      });
    }
    else if(this.urlID === "Women" && this.urlID2 === "Shoes"){
      this.service.getProductList().subscribe(data => {
        this.allProducts = data.filter((item) => {
          return (item.product_type.includes('Shoes') && item.category=='Women');
        })
      });
    }
    else if(this.urlID === "Men" && this.urlID2 === "Shirt"){
      this.service.getProductList().subscribe(data => {
        this.allProducts = data.filter((item) => {
          return ((item.product_type=='Shirt' && item.category=='Men') || item.product_info.includes('Floral Shirt'));
        })
      });
    }
    else if(this.urlID === "Men" && this.urlID2 === "Formal"){
      this.service.getProductList().subscribe(data => {
        this.allProducts = data.filter((item) => {
          return (item.product_type.includes('Formal') && item.category=='Men');
        })
      });
    }
    else if(this.urlID === "Men" && this.urlID2 === "Sunglass"){
      this.service.getProductList().subscribe(data => {
        this.allProducts = data.filter((item) => {
          return (item.product_type.includes('Sunglass') && item.category=='Men');
        })
      });
    }
    else if(this.urlID === "Men" && this.urlID2 === "Watch"){
      this.service.getProductList().subscribe(data => {
        this.allProducts = data.filter((item) => {
          return (item.product_type.includes('Watch') && item.category=='Men');
        })
      });
    }
    else if(this.urlID === "Women" && this.urlID2 === "Bag"){
      this.service.getProductList().subscribe(data => {
        this.allProducts = data.filter((item) => {
          return (item.product_type.includes('Bag') && item.category=='Women');
        })
      });
    }
    else if(this.urlID === "Any" && this.urlID2 === "Shoes"){
      this.service.getProductList().subscribe(data => {
        this.allProducts = data.filter((item) => {
          return (item.product_type.includes('Shoes'));
        })
      });
    }
    else if(this.urlID === "Any" && this.urlID2 === "Accessory"){
      this.service.getProductList().subscribe(data => {
        this.allProducts = data.filter((item) => {
          return (item.product_type.includes('Earring') || item.product_type.includes('Ring') || item.product_type.includes('Necklace') || item.product_type.includes('Bracelet')  );
        })
      });
    }
    else if(this.urlID === "Any" && this.urlID2 === "Watch"){
      this.service.getProductList().subscribe(data => {
        this.allProducts = data.filter((item) => {
          return (item.product_type.includes('Watch'));
        })
      });
    }
    else if(this.urlID === "Kids" && this.urlID2 === "Ethnic"){
      this.service.getProductList().subscribe(data => {
        this.allProducts = data.filter((item) => {
          return (item.product_type.includes('Ethnic') && item.category=='Kids');
        })
      });
    }
    else if(this.urlID === "Kids" && this.urlID2 === "Western"){
      this.service.getProductList().subscribe(data => {
        this.allProducts = data.filter((item) => {
          return (item.product_type.includes('Western') && item.category=='Kids');
        })
      });
    }
    else if(this.urlID === "Kids" && this.urlID2 === "Gown"){
      this.service.getProductList().subscribe(data => {
        this.allProducts = data.filter((item) => {
          return (item.product_type.includes('Gown') && item.category=='Kids');
        })
      });
    }
    else if(this.urlID === "Kids" && this.urlID2 === "Shoes"){
      this.service.getProductList().subscribe(data => {
        this.allProducts = data.filter((item) => {
          return (item.product_type.includes('Shoes') && item.category=='Kids');
        })
      });
    }
    else if(this.urlID === "Electronics" && this.urlID2 === "Mobile"){
      this.service.getProductList().subscribe(data => {
        this.allProducts = data.filter((item) => {
          return (item.product_type.includes('Mobile') && item.category=='Electronics');
        })
      });
    }
    else if(this.urlID === "Electronics" && this.urlID2 === "Earbud"){
      this.service.getProductList().subscribe(data => {
        this.allProducts = data.filter((item) => {
          return (item.product_type.includes('Earbud') && item.category=='Electronics');
        })
      });
    }
    else if(this.urlID === "Electronics" && this.urlID2 === "Laptop"){
      this.service.getProductList().subscribe(data => {
        this.allProducts = data.filter((item) => {
          return (item.product_type.includes('Laptop') && item.category=='Electronics');
        })
      });
    }
    else if(this.urlID === "Electronics" && this.urlID2 === "Fridge"){
      this.service.getProductList().subscribe(data => {
        this.allProducts = data.filter((item) => {
          return (item.product_type.includes('Fridge') && item.category=='Electronics');
        })
      });
    }
    else{
      alert("Something Went Wrong!!");
    }
  }
}
