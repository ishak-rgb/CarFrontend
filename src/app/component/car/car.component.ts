import { Component,OnInit } from '@angular/core';
import { Car } from 'src/app/modules/car';
import { CarService } from 'src/app/services/car.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit  {

cars:Car[]=[];
filtertext="";
  constructor(private carservice:CarService,private activatedRoute:ActivatedRoute,
    private toasterService:ToastrService,private cartService:CartService){}

ngOnInit(): void {
  this.activatedRoute.params.subscribe(params=>{
    if(params["colorId"]){
      this.getCarsByColor(params["colorId"])
    }
    else{
      this.getCars()
    }
  })
}

getCars(){
  this.carservice.getCars().subscribe(response=>{
   this.cars=response.data

  })
}
getCarsByColor(colorId:number){
  this.carservice.getCarsByColor(colorId).subscribe(reponse=>{
    this.cars=reponse.data
  })
}
addToCart(car:Car){
  this.toasterService.success("sepete eklendi",car.carName)
  this.cartService.addToCart(car);
}

}
