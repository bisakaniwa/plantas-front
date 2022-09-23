import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit { 

  tudo: string = '';

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  mostrarTudo() {
    return this.router.navigate(['/ver-tudo'])
  }
  
  adicionar() {
    return this.router.navigate(['/adicionar'])
  }

}
