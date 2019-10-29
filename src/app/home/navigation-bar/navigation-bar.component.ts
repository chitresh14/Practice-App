import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})

export class NavigationComponent {
  navElement = null;

  dropdownMenu() {
    this.navElement = document.getElementById('navDropdownClick');
    if (this.navElement.className === 'nav__top-nav') {
      this.navElement.className += ' responsive';
    } else {
      this.navElement.className = 'nav__top-nav';
    }
  }
}
