import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isMenuOpened: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  onDropMenu() {
    this.isMenuOpened = !this.isMenuOpened;
  }
}
