import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';
import { ModalController, ViewController, NavParams } from 'ionic-angular';
import { MenuServiceProvider } from '../../providers/menu-service/menu-service';
import { DetpreparaPage } from "../detprepara/detprepara";


@Component({
  selector: 'page-prueba',
  templateUrl: 'prueba.html',
  providers: [MenuServiceProvider]
})
export class PruebaPage {
  paraPreparar;
  delmodal:string;
   constructor(public navCtrl: NavController,public modalCtrl: ModalController,
              storage: Storage, public http: Http, public menuservice: MenuServiceProvider,public params: NavParams) {
    storage.ready().then(() => {
     });
      this.cargarPreparar();
  }

  ionViewWillEnter(){
    this.cargarPreparar();
  }
  ionViewDidEnter(){
    this.cargarPreparar();
  }
  onPageWillUnload(){
    this.cargarPreparar();
  }

  cargarPreparar(){
    this.menuservice.getAllPreparar()
      .then( 
        data=>{
                if(data[0]=="error"){
                  this.paraPreparar=null;
                }else{
                  this.paraPreparar =data; 
                }                
              }
        )
      .catch( error=>{console.log(error)})
  }

  presentProfileModal(varid) {
    let profileModal = this.modalCtrl.create(DetpreparaPage,{ idPedido: varid});
    profileModal.onDidDismiss(data => {
      this.delmodal = data;
      this.updatedatos();
    }); 
   profileModal.present();
 }

 updatedatos(){ 
   this.cargarPreparar(); 
 }

 
}


