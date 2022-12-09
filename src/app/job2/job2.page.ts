import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job2',
  templateUrl: './job2.page.html',
  styleUrls: ['./job2.page.scss'],
})
export class Job2Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  job: any[]=[
    {function:'Dar la bienvenida y ayudar a los visitantes de la oficina o empresa.'},
    {function:'Contestar el teléfono y transferir las llamadas al destinatario correcto.'},
    {function:'Atención al cliente: reclamos y sugerencias.'},
    {function:'Supervisar varias operaciones diarias de la oficina.'},
    {function:'Programar citas, recibir y entregar la correspondencia y manejar los correos electrónicos entrantes y responderlos.'},
    {function:'Editar, hacer fotocopias y archivar documentos'},
    {function:'Programación de reuniones y entrevistas.'},
    {function:'Generación de informes, gestión de inventarios y tareas de contabilidad.'},

  ]
}
