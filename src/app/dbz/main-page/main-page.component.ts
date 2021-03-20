import { Component, OnInit } from '@angular/core';

interface Personaje{
  nombre:string;
  poder:number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'  
})
export class MainPageComponent  {
  personajes: Personaje[]=[
    {nombre:'goku',
    poder:15000
    },
    {nombre:'Vegeta',
    poder:5000
    }
  ]
  nuevo: Personaje ={
    nombre:'Trunks',
    poder:1400
  }


  agregar(){
    if (this.nuevo.nombre.trim().length===0){return;}    
    console.log(this.nuevo)
    this.personajes.push(this.nuevo);
    this.nuevo={
      nombre:'',
      poder:0
    }
  }


}
