import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cuidados } from '../interface/plantinha.interface';

@Injectable({
  providedIn: 'root'
})
export class CuidadosServiceService {

  constructor(
    private http: HttpClient
  ) { }

  adicionarCuidados(cuidados: Cuidados) : Observable<Cuidados>{
    return this.http.post<Cuidados>("http://localhost:8080/cuidados", cuidados)
  };

  buscarPorPlantaId(id: number) : Observable<Cuidados>{
    return this.http.get<Cuidados>("http://localhost:8080/cuidados/planta/" + id)
  }

  atualizarCuidados(cuidado: Cuidados) : Observable<Cuidados>{
    return this.http.put<Cuidados>("http://localhost:8080/cuidados/atualizar/cuidados", cuidado)
  }

  deletarCuidados(id: number) : Observable<Cuidados>{
    return this.http.delete<Cuidados>("http://localhost:8080/cuidados/" + id)
  }
} 

