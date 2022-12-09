import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}

  jobs: any[]=[
    {img:'../assets/Categorias/0.jpg',name:'Trabajo eventual',url:'../categoria1'},
    {img:'../assets/Categorias/1.jpg',name:'Trabajo informal',url:'../categoria2'},
    {img:'../assets/Categorias/2.jpg',name:'Trabajo intelectual',url:'../categoria3'},
    {img:'../assets/Categorias/3.jpg',name:'Trabajo informal',url:'../categoria4'},
   ]
}
