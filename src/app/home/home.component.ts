import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    animations: [
      trigger('fade', [
        state('in', style({ opacity: 1 })),
        transition('void => *', [
          style({ opacity: 0 }),
          animate(1000)
        ]),
        transition('* => void', [
          animate(1000, style({ opacity: 0 }))
        ])
      ])
    ]
  })
  export class HomeComponent implements OnInit {
    isVisible: boolean = true;
  
    toggleVisibility() {
      this.isVisible = !this.isVisible;
    }
  }
  