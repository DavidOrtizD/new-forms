import { Component, OnInit } from '@angular/core';
import { RouterHelper } from '../router-helper';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  public templateRoutes: RouterHelper [] = [
    {
      routeName: 'Basics',
      routePath: '/template/basics',
      parent:'template'
    },
    {
      routeName: 'Dynamics',
      routePath: '/template/dynamics',
      parent:'template'
    },
    {
      routeName: 'Switches',
      routePath: '/template/switches',
      parent:'template'
    }
  ];
  
  public reactiveRoutes: RouterHelper [] = [
    {
      routeName: 'Basics',
      routePath: '/reactive/basics',
      parent:'reactive'
    },
    {
      routeName: 'Dynamics',
      routePath: '/reactive/dynamics',
      parent:'reactive'
    },
    {
      routeName: 'Switches',
      routePath: '/reactive/switches',
      parent:'reactive'
    }
  ];
  
  public dynamicRoutes: RouterHelper [] = [
    {
      routeName: 'Selector',
      routePath: '/dynamic-inputs/selector',
      parent:'dynamic-innputs'
    }
  ];

  constructor() { 
  }

  ngOnInit(): void {
    
  }
}
