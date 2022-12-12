import { Component, OnInit } from '@angular/core';
import { Event, Router, NavigationStart, NavigationEnd } from '@angular/router';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { delay, fromEvent } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  notLoading: string = '';
  loading: boolean;

  constructor(
    private router: Router,
  ) {
 this.loading = false
    // const clicks = fromEvent(document, 'click');
    // const delayedClick = clicks.pipe(delay(3000));

    // this.router.events.subscribe((routerEvent: Event) => {

    //   if (routerEvent instanceof NavigationStart) {
    //     this.loading = true;
    //   }

    //   if (routerEvent instanceof NavigationEnd) {
    //     this.loading = false;
    //   }
    // })
  }

  ngOnInit(): void {
  }

  mostrarTudo() {
    this.loading = true;
    setTimeout(()=>{ this.router.navigate(['/ver-tudo']) }, 2000)
  }

  adicionar() {
    return this.router.navigate(['/adicionar'])
  }

}