import { Component } from '@angular/core';
import { ClienteServiceService } from '../cliente-service.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.scss'
})
export class ClientesComponent {
  clientes: any = [];
  constructor(private server: ClienteServiceService) {

  }
  async getClientes() {
    this.clientes = await this.server.getClientes()
    console.log(this.clientes);
  }
}
