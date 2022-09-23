import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Plantinha } from '../plantinha.interface';
import { Observable } from 'rxjs';

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
    return this.http.get<Plantinha[]>("http://localhost:8080/plantas");
  }

  buscarGeneroEspecie(termo: string) : Observable<Plantinha[]> {
    return this.http.get<Plantinha[]>("http://localhost:8080/plantas/buscar/" + termo)
  }

  buscarPlanta(id: number) : Observable<Plantinha>{
    return this.http.get<Plantinha>("http://localhost:8080/plantas/" + id)
  }

  //inacabado
  // atualizarCuidados(planta: Plantinha) : Observable<Plantinha>{
  //   return this.http.put<Plantinha>("http://localhost:8080/plantas")
  // }

  // buscarCuidados(id: number, cuidados: Cuidados) : Observable<Plantinha> {
  //   return this.http.get<Plantinha>("http://localhost:8080/plantas/" + id + cuidados)
  // }
}