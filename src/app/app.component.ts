import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <nav class='navbar navbar-expand navbar-light bg-light'>
  <a class="navbar-brand">
            <img src="assets/img/order.png" width="100" class="logo">
          </a>
    <ul class='nav nav-pills'>
    <li> <a class='nav-link' [routerLink]="['/welcome']"><b>Home</b></a></li>
    <li> <a class='nav-link' [routerLink]="['/items']"><b>Item</b></a></li>
    </ul>
  </nav>
  <div class='container'>
  <router-outlet></router-outlet>
  </div>`
})
export class AppComponent {
  title = 'Order Application';
}
