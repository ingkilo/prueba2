import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PedidosPage } from "../pages/pedidos/pedidos";
import { VariablesGlobalesProvider } from '../providers/variables-globales/variables-globales';
import { ConfirmarPage } from "../pages/confirmar/confirmar";
import { PruebaPage } from "../pages/prueba/prueba";
import { DetpreparaPage } from "../pages/detprepara/detprepara";
import { CloudSettings, CloudModule, Deploy } from '@ionic/cloud-angular';
import { DetentregaPage } from "../pages/detentrega/detentrega";
import { EntregaPage } from "../pages/entrega/entrega";
import { CompletoPage } from "../pages/completo/completo";
import { DetcompletoPage } from "../pages/detcompleto/detcompleto";




const cloudSettings: CloudSettings = {
  'core': {
    'app_id': 'perro'
  }
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PedidosPage,
    ConfirmarPage,
    PruebaPage,
    DetpreparaPage,
    EntregaPage,
    DetentregaPage,
    CompletoPage,
    DetcompletoPage

  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PedidosPage,
    ConfirmarPage,
    PruebaPage,  
    DetpreparaPage,
    EntregaPage,
    DetentregaPage,
    CompletoPage,
    DetcompletoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    VariablesGlobalesProvider
  ]
})
export class AppModule {}
