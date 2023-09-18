import { Component,OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/modules/car';
import { Cartıtem } from 'src/app/modules/cartItem';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit  {

  cartItems:Cartıtem[]=[]

  constructor(private cartService:CartService,private toasterService:ToastrService){}

  ngOnInit(): void {
    this.getCart();

    
  }

  getCart(){
    this.cartItems=this.cartService.list();
  }
  removeFromCart(car:Car){
    this.cartService.removeFromCart(car);
    this.toasterService.error("Silindi",car.carName + " sepetten silindi.")
  }
}
