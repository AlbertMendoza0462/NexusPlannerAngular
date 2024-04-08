import { Component } from '@angular/core';
import { LoginService } from './servicios/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sistema de Gestion de Tareas ';
  estaAutenticado = false

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.estaAutenticado = this.loginService.estaAutenticado()
  }
}
