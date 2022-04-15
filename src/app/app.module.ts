import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CadastraCompraModule } from './cadastra-compra/cadastra-compra/cadastra-compra.module';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    HttpClientModule       
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
