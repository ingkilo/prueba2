import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Storage } from '@ionic/storage';
import { VariablesGlobalesProvider } from '../../providers/variables-globales/variables-globales';
import { Http } from '@angular/http';
import { MenuServiceProvider } from '../../providers/menu-service/menu-service';
import { ModalController, ViewController } from 'ionic-angular';
import { PedidosPage } from "../pedidos/pedidos";
import { ConfirmarPage } from "../confirmar/confirmar";
import { PruebaPage } from "../prueba/prueba";
import { EntregaPage } from "../entrega/entrega";
import { CompletoPage } from "../completo/completo";



@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [MenuServiceProvider],
  template: 
    '<ion-tabs><ion-tab tabIcon="heart" [root]="tab1"></ion-tab><ion-tab tabIcon="star" [root]="tab2"></ion-tab><ion-tab tabIcon="car" [root]="tab3"></ion-tab><ion-tab tabIcon="car" [root]="tab4"></ion-tab></ion-tabs>'
    
})
export class HomePage {
 
  tab1: any;
  tab2: any;
  tab3: any;
  tab4: any;
  //coco=ConfirmarPage;
 
  constructor(public navCtrl: NavController,public modalCtrl: ModalController,
              storage: Storage, public varglobal: VariablesGlobalesProvider,
              public http: Http, public menuservice: MenuServiceProvider) {
    storage.ready().then(() => {
     });
     this.tab1 = ConfirmarPage;
     this.tab2 = PruebaPage;
     this.tab3 = EntregaPage;
     this.tab4 = CompletoPage;
     
  }

}
