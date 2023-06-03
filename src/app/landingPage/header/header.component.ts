import { Component, OnInit } from '@angular/core';
import { navbarData } from './header-data';

@Component({
  selector: 'app-header-landing',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderLandingComponent implements OnInit {

  navData = navbarData;
  
  constructor() { }

  ngOnInit(): void {
  }

}
