import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Plantinha } from '../interface/plantinha.interface';
import { PlantinhaService } from '../service/plantinha.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.scss']
})
export class ResultadoComponent implements OnInit {

  plantas: Plantinha[] = []

  constructor(private service: PlantinhaService, private route: ActivatedRoute) { } 

  ngOnInit(): void {
    const termo = String(this.route.snapshot.paramMap.get('termo'));
    this.buscarGeneroEspecie(termo);
  }

  buscarGeneroEspecie(termo: string) {
    this.service.buscarGeneroEspecie(termo).subscribe(resultado => {
      this.plantas = resultado;
      console.log(resultado)
    } 
    );
  }
}
