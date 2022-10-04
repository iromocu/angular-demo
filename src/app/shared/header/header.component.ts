import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  showMenu: boolean = false
  constructor() { }

  ngOnInit(): void {
  }

  mostrarMenu(){
    const menu = document.getElementById('navMenuPrincipal')
    menu!.style.zIndex = '1'
    menu!.style.visibility = 'visible'
    menu!.style.opacity = '1'
  }

}
