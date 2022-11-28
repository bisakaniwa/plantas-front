import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCuidadosComponent } from './add-cuidados/add-cuidados.component';
import { AdicionarComponent } from './adicionar/adicionar.component';
import { CuidadosComponent } from './cuidados/cuidados.component';
import { DeletarComponent } from './deletar/deletar.component';
import { GeneroComponent } from './genero/genero.component';
import { PaginasGenerosComponent } from './genero/paginas-generos/paginas-generos.component';
import { HomeComponent } from './home/home.component';
import { IndividualComponent } from './individual/individual.component';
import { ModificarComponent } from './modificar/modificar.component';
import { ResultadoComponent } from './resultado/resultado.component';
import { VerTudoComponent } from './ver-tudo/ver-tudo.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'adicionar', component: AdicionarComponent },
  { path: 'deletar', component: DeletarComponent },
  { path: 'resultado/:termo', component: ResultadoComponent },
  { path: 'ver-tudo', component: VerTudoComponent },
  { path: 'individual/:id', component: IndividualComponent },
  { path: 'modificar-dados/:id', component: ModificarComponent },
  { path: 'cuidados/:id', component: CuidadosComponent },
  { path: 'add-cuidados/:id', component: AddCuidadosComponent },
  { path: 'generos', component: GeneroComponent },
  { path: 'genero/:genero', component: PaginasGenerosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
