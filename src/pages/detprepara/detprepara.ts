import { Component, ViewChild,forwardRef} from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';
import { App,ModalController, ViewController, NavParams } from 'ionic-angular';
import { MenuServiceProvider } from '../../providers/menu-service/menu-service';


@Component({
  selector: 'page-detprepara',
  templateUrl: 'detprepara.html',
  providers: [MenuServiceProvider],
})
export class DetpreparaPage {
 pd;
   constructor(public navCtrl: NavController,public modalCtrl: ModalController,
              storage: Storage, public http: Http, public menuservice: MenuServiceProvider,public params: NavParams,public viewCtrl: ViewController,public appCtrl: App) {
    storage.ready().then(() => {
     });

     this.menuservice.getPedidoDetalle(this.params.get('idPedido'))
      .then( 
        data=>{
                this.pd =data;  
              }
        )
      .catch( error=>{console.log(error)})
  }

  confirmar(){
    this.menuservice.updatePreparar({ id: this.params.get('idPedido')});
    this.viewCtrl.dismiss('actualiza');
  }
}