import { Component } from '@angular/core';
import { MiApiService } from '../services/mi-api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private serviciolistado: MiApiService){}
    listado: any=[];

  obtener(){
    this.serviciolistado.obtener().subscribe(
      (data) =>{
      console.log(data);
      this.listado = data;
      }
    )
  }

}
