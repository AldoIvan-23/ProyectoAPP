import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.page.html',
  styleUrls: ['./jobs.page.scss'],
})
export class JobsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  jobs: any[]=[
    {page:'job1',link:'',url:'../assets/Principal/Asistente administrativo.jpg',title:'Asistente administrativo'},
    {page:'job2',link:'',url:'../assets/Principal/Archivista.jpg',title:'Archivista'},
    {page:'job3',link:'',url:'../assets/Principal/Atencion a clientes.jpg',title:'Atención a clientes'},
    {page:'job4',link:'',url:'../assets/Principal/programador.jpg',title:'Programador Full stack'},
  ]
  public data = ['Asistente administrativo','Archivista','Atención a clientes','Programador Full stack'];
  public results = [...this.data];

  handleChange(event:any) {
    const query = event.target.value.toLowerCase();
    this.results = this.data.filter(d => d.toLowerCase().indexOf(query) > -1);
  }
}
