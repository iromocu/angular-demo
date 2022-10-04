import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/models/menu.interface';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'left-bar',
  templateUrl: './left-bar.component.html',
  styleUrls: ['./left-bar.component.css']
})
export class LeftBarComponent implements OnInit {
  menuItems : Menu[] = [] 
  activeMenuSolicitudes:boolean = false;
  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.getCatalogos()
  }

  async getCatalogos(){
    this.menuItems = await this.menuService.getMenu()
  }

  ocultarMenu(){
    if(screen.width < 700){
      const menu = document.getElementById('navMenuPrincipal')
      menu!.style.visibility = 'hidden' 
      menu!.style.opacity = '0'
    }
  }

}
