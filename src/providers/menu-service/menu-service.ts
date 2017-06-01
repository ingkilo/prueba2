import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MenuServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MenuServiceProvider {

  constructor(public http: Http) {
  }

  getAllPedido(){
    return new Promise( 
      resolve =>{
        this.http.get("http://localhost:80/restaurante/public/pedido/all")
        .map(res => res.json())
        .subscribe(
          data => {
            resolve(data);
          },
          error=>{
            console.log(error);
          }
        )

      }      
    );
  }

  getPedidoDetalle(varid){
    return new Promise( 
      resolve =>{
        this.http.get("http://localhost:80/restaurante/public/pedido/datospedido/id/"+varid)
        .map(res => res.json())
        .subscribe(
          data => {
            resolve(data);
          },
          err=>{
            console.log(err);
          }
        )

      }      
    );
  }

  updateConfirmar(varid){
    return new Promise( 
      resolve =>{
        this.http.put("http://localhost:80/restaurante/public/update",varid)
        .map(res => res.json())
        .subscribe(
          data => {
            resolve(data);
          },
          err=>{
            console.log(err);
          }
        )

      }      
    );
  }


   getAllPreparar(){
    return new Promise( 
      resolve =>{
        this.http.get("http://localhost:80/restaurante/public/preparar/all")
        .map(res => res.json())
        .subscribe(
          data => {
            resolve(data);
          },
          error=>{
            console.log(error);
          }
        )

      }      
    );
  }

  getPrepararDetalle(varid){
    return new Promise( 
      resolve =>{
        this.http.get("http://localhost:80/restaurante/public/pedido/datospedido/id/"+varid)
        .map(res => res.json())
        .subscribe(
          data => {
            resolve(data);
          },
          err=>{
            console.log(err);
          }
        )

      }      
    );
  }

  updatePreparar(varid){
    return new Promise( 
      resolve =>{
        this.http.put("http://localhost:80/restaurante/public/preparar/update",varid)
        .map(res => res.json())
        .subscribe(
          data => {
            resolve(data);
          },
          err=>{
            console.log(err);
          }
        )

      }      
    );
  }

  getAllEntrega(){
    return new Promise( 
      resolve =>{
        this.http.get("http://localhost:80/restaurante/public/entrega/all")
        .map(res => res.json())
        .subscribe(
          data => {
            resolve(data);
          },
          error=>{
            console.log(error);
          }
        )

      }      
    );
  }

  updateEntrega(varid){
    return new Promise( 
      resolve =>{
        this.http.put("http://localhost:80/restaurante/public/entrega/update",varid)
        .map(res => res.json())
        .subscribe(
          data => {
            resolve(data);
          },
          err=>{
            console.log(err);
          }
        )

      }      
    );
  }

  getAllCompleto(){
    return new Promise( 
      resolve =>{
        this.http.get("http://localhost:80/restaurante/public/completo/all")
        .map(res => res.json())
        .subscribe(
          data => {
            resolve(data);
          },
          error=>{
            console.log(error);
          }
        )

      }      
    );
  }

}
