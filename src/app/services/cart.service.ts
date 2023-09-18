import { Injectable } from '@angular/core';
import { Car } from '../modules/car';
import { CartItems } from '../modules/cartItems';
import { Cartıtem } from '../modules/cartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addToCart(car:Car){
    let item=CartItems.find(c=>c.car.carId==car.carId)
    if(item){
      item.quantity+=1;
    }else{
      let cartItem=new Cartıtem();
      cartItem.car=car;
      cartItem.quantity=1;
      CartItems.push(cartItem);
    }

  }
  removeFromCart(car:Car){
    let item:Cartıtem=CartItems.find(c=>c.car.carId===car.carId);
    CartItems.splice(CartItems.indexOf(item),1)
  }
    list():Cartıtem[]{
      return CartItems;
    }

}
