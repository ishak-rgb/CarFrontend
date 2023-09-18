import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { ListResponseModel } from '../modules/listResponseModel';
import { Car } from '../modules/car';
import { ResponseModel } from '../modules/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl= "https://localhost:7181/api/"
  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<Car>>{
   let newPath=this.apiUrl+"cars/getall"
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }
  getCarsByColor(colorId:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/getbycolor?colorId="+colorId
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }
  add(car:Car):Observable<ResponseModel>{

  return this.httpClient.post<ResponseModel>(this.apiUrl+"cars/add",car)

  }


}
