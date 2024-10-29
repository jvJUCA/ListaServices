import { Component } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  userAuth: boolean = false;

  constructor(private userService: UsuarioService) { }

  // saveLoginData(dataObject: { name: string, pass: string }) {
  //   this.username = dataObject.name
  //   this.password = dataObject.pass
  // }

  setUserAuth(){
    this.userAuth = true
  }
}