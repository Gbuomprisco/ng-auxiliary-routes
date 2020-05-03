import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <button [routerLink]="[{ outlets: { dialog: ['auth', 'sign-in'] } }]">Sign In</button>
    <button [routerLink]="[{ outlets: { dialog: ['auth', 'sign-up'] } }]">Sign Up</button>
  `
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
