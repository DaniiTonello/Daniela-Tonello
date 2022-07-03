import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { HeaderComponent } from './components/header/header/header.component';
import { RedesSocialesComponent } from './components/header/redes-sociales/redes-sociales.component';
import { LoginComponent } from './components/header/login/login.component';
import { HeadingComponent } from './components/body/heading/heading.component';
import { BodyComponent } from './components/body/body/body.component';
import { BannerComponent } from './components/body/banner/banner.component';
import { PerfilComponent } from './components/body/perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    HeaderComponent,
    RedesSocialesComponent,
    LoginComponent,
    HeadingComponent,
    BodyComponent,
    BannerComponent,
    PerfilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
