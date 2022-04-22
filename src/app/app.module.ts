import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



// Importamos clases de firebase
    import { AngularFireModule } from '@angular/fire/compat';
    import { AngularFireAuthModule } from '@angular/fire/compat/auth';
    import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
    /// importamos clase de la conexion del firebase
    import { environment } from 'src/environments/environment';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
