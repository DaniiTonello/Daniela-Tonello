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
import { SeccionComponent } from './components/body/seccion/seccion.component';
import { NombreComponent } from './components/body/nombre/nombre.component';
import { AcercaDeComponent } from './components/body/acerca-de/acerca-de.component';
import { EducacionComponent } from './components/body/educacion/educacion.component';
import { ExperienciaComponent } from './components/body/experiencia/experiencia.component';
import { SkillsComponent } from './components/body/skills/skills.component';
import { ProyectosComponent } from './components/body/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';

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
    SeccionComponent,
    NombreComponent,
    AcercaDeComponent,
    EducacionComponent,
    ExperienciaComponent,
    SkillsComponent,
    ProyectosComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
