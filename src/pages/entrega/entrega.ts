import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';
import { ModalController, ViewController, NavParams } from 'ionic-angular';
import { MenuServiceProvider } from '../../providers/menu-service/menu-service';
import { DetentregaPage } from "../detentrega/detentrega";


@Component({
  selector: 'page-entrega',
  templateUrl: 'entrega.html',
   providers: [MenuServiceProvider]
})
export class EntregaPage {
productos;
  delmodal:string;
   constructor(public navCtrl: NavController,public modalCtrl: ModalController,
              storage: Storage, public http: Http, public menuservice: MenuServiceProvider,public params: NavParams) {
    storage.ready().then(() => {
     });
      this.cargarProductos();
  }

  ionViewWillEnter(){
    this.cargarProductos();
  }
  ionViewDidEnter(){
    this.cargarProductos();
  }
  onPageWillUnload(){
    this.cargarProductos();
  }

  cargarProductos(){
    this.menuservice.getAllEntrega()
      .then( 
        data=>{
                if(data[0]=="error"){
                  this.productos=null;
                }else{
                  this.productos =data; 
                }                
              }
        )
      .catch( error=>{console.log(error)})
  }

  presentProfileModal(varid) {
    let profileModal = this.modalCtrl.create(DetentregaPage,{ idPedido: varid});
    profileModal.onDidDismiss(data => {
      this.delmodal = data;
      this.updatedatos();
    }); 
   profileModal.present();
 }

 updatedatos(){ 
   this.cargarProductos(); 
 }

 
}
