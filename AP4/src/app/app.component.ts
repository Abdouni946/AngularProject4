import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  actions : Array<any> = [
    {title: 'Home', "route":"/home",icon:"bi-house"},
    {title: 'Products', "route":"/products", icon:"bi-search"},
    {title: 'New Product', "route":"/newProduct", icon:"bi-plus"}
  ];
  CurrentAction: any;
  SetCurrentAction(action: any) {
    this.CurrentAction = action;
  }
}
