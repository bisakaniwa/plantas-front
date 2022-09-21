import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicionarComponent } from './adicionar/adicionar.component';
import { DeletarComponent } from './deletar/deletar.component';
import { HomeComponent } from './home/home.component';
import { IndividualComponent } from './individual/individual.component';
import { ResultadoComponent } from './resultado/resultado.component';
import { VerTudoComponent } from './ver-tudo/ver-tudo.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'adicionar', component: AdicionarComponent },
  { path: 'deletar', component: DeletarComponent },
  { path: 'resultado/:termo', component: ResultadoComponent },
  { path: 'ver-tudo', component: VerTudoComponent },
  { path: 'individual/:id', component: IndividualComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
