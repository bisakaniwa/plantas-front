import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BuscarComponent } from './buscar/buscar.component';
import { AdicionarComponent } from './adicionar/adicionar.component';
import { DeletarComponent } from './deletar/deletar.component';
import { ModificarComponent } from './modificar/modificar.component';
import { ResultadoComponent } from './resultado/resultado.component';
import { FormsModule } from '@angular/forms';
import { VerTudoComponent } from './ver-tudo/ver-tudo.component';
import { IndividualComponent } from './individual/individual.component';
import { CuidadosComponent } from './cuidados/cuidados.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BuscarComponent,
    AdicionarComponent,
    DeletarComponent,
    ModificarComponent,
    ResultadoComponent,
    VerTudoComponent,
    IndividualComponent,
    CuidadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
