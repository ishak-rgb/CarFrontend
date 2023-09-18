import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/modules/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  colors:Color[]=[];
currentColor:Color;

constructor(private colorService:ColorService){}

  ngOnInit(): void {
    this.getColors()
  }

getColors(){
  this.colorService.getColors().subscribe(reponse=>{
    this.colors=reponse.data;
    
  })
}

setCurrentColors(color:Color){
this.currentColor=color;

}

getCurrentColors(color:Color){
  if(this.currentColor==color){
    return "list-group-item active"
  }
  else{
    return "list-group-item"
  }
}

getAllColorClass(){
  if(!this.currentColor){
    return"list-group-item actives"
  }
  else{
    return "list-group-item"
  }
}


}
