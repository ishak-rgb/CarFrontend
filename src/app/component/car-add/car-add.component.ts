import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {

  carAddForm:FormGroup

constructor(private formBuilder:FormBuilder,
  private carService:CarService,private toasterService:ToastrService){};

ngOnInit(): void {
 this.createCarAddForm()
}
createCarAddForm(){
this.carAddForm=this.formBuilder.group({
  carName:["",Validators.required],
  dailyPrice:["",Validators.required],
  colorId:["",Validators.required]
})


}
add(){
  if(this.carAddForm.valid){
    let productModel = Object.assign({},this.carAddForm.value)
    this.carService.add(productModel).subscribe(response=>{
      this.toasterService.success(response.message,"Başarılı")
    },responseError=>{
      if(responseError.error.Errors.length>0){
        for (let i = 0; i <responseError.error.Errors.length; i++) {
          this.toasterService.error(responseError.error.Errors[i].ErrorMessage
            ,"Doğrulama hatası")
        }       
      } 
    })
    
  }else{
    this.toasterService.error("Formunuz eksik","Dikkat")
  }

}


}
