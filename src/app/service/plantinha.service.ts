import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Plantinha } from '../interface/plantinha.interface';
import { delay, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlantinhaService {

  constructor(private http: HttpClient ) { }

  adicionarPlanta(planta: Plantinha) : Observable<Plantinha>{
    return this.http.post<Plantinha>("http://localhost:8080/plantas", planta)
  };

  atualizarPlanta(planta: Plantinha) : Observable<Plantinha>{
    return this.http.put<Plantinha>("http://localhost:8080/plantas/atualizar/dados", planta)
  }

  buscarTudo() : Observable<Plantinha[]> {
    return this.http.get<Plantinha[]>("http://localhost:8080/plantas")
  }

  buscarPorGenero(genero: string) : Observable<Plantinha[]> {
    return this.http.get<Plantinha[]>("http://localhost:8080/plantas/genero/" + genero)
  }

  buscarGenero() : Observable<String[]> {
    return this.http.get<String[]>("http://localhost:8080/plantas/generos")
  }

  buscarGeneroEspecie(termo: string) : Observable<Plantinha[]> {
    return this.http.get<Plantinha[]>("http://localhost:8080/plantas/buscar/" + termo)
  }

  buscarPlanta(id: number) : Observable<Plantinha>{
    return this.http.get<Plantinha>("http://localhost:8080/plantas/" + id)
  }

  deletarPlanta(id: number) : Observable<Plantinha>{
    return this.http.delete<Plantinha>("http://localhost:8080/plantas/" + id)
  }
}
