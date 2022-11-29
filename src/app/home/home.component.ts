import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit { 

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