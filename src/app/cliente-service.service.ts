import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteServiceService {
  apiUrl: string = 'http://localhost:3000/clientes'
  cliente: object = {
    nome: "Juca",
    rg: "",
    cpf: "",
    email: "maria@teste.com.br",
    telefone: "",
    celular: "",
    cep: "18011-000",
    endereco: "rua das flores2",
    numero: "21",
    complemento: "",
    bairro: "Jd. ABC",
    cidade: "Sorocaba",
    estado: "SP"
  }

  constructor() { }

  async getClientes() {
    return await fetch(this.apiUrl).then(res =>
      res.json())
  }

  async getCliente(client_id: number) {
    return await fetch(`${this.apiUrl}/${client_id}`).then(res =>
      res.json())
  }

  async setCliente() {
    return await fetch(this.apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.cliente)
    }).then(res =>
      res.json())
  }

  async atualizarCliente() {
    return await fetch(this.apiUrl, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.cliente)
    }).then(res =>
      res.json())
  }

  async excluiCliente(client_id: number) {
    return await fetch(`${this.apiUrl}/${client_id}`, { method: 'DELETE' }).then(res =>
      res.json())
  }
}