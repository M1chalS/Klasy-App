import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaComponent } from './klasy/lista.component';
import { HttpClientModule } from "@angular/common/http";
import { IndexComponent } from './index/index.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatIconModule } from "@angular/material/icon";
import { CreateComponent } from './create/create.component';
import { TitleComponent } from './title/title.component';
import { FormsModule } from "@angular/forms";
import { DodajUczniaComponent } from "./klasy/dodaj-ucznia.component";
import {EdytujKlaseComponent} from "./klasy/edytuj-klase.component";
import {EdytujUczniaComponent} from "./klasy/edytuj-ucznia.component";

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    IndexComponent,
    NavbarComponent,
    CreateComponent,
    TitleComponent,
    ListaComponent,
    DodajUczniaComponent,
    EdytujKlaseComponent,
    EdytujUczniaComponent
  ],
    imports: [
        FormsModule,
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        MatIconModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
