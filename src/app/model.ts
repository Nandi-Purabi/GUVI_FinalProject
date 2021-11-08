export interface productList {
    "product_id": number,
    "product_code": string,
    "product_type": string,
    "category": string,
    "quantity_available": number,
    "price": number,
    "discount_percent": number,
    "product_img_src": string,
    "product_info": string
}

export interface addUser{
    "userName": string,
    "userEmail": string,
    "userPassword": string
}

export interface userList {
    "userID": number,
    "userName": string,
    "userEmail": string,
    "userPassword": string
}

export interface userCartList1 {
    "userID": number,
    "product_id": number,
    "buy_quantity": number
}

export interface userCartList2 {
    "product_id": number,
    "price": number,
    "discount_percent": number,
    "product_img_src": string,
    "product_info": string
}