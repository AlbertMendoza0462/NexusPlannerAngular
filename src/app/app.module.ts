import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { TareaComponentComponent } from './components/tarea-component/tarea-component.component';
import { LoginComponent } from './components/login/login.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { CuentaComponent } from './components/cuenta/cuenta.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
    declarations: [
        AppComponent,
        TareaComponentComponent,
        PrincipalComponent,
        LoginComponent,
        CuentaComponent,
        SidebarComponent,
        ProyectoComponent
    ],
    providers: [SidebarComponent],
    bootstrap: [AppComponent],
    imports: [
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        NgbModule
    ]
})
export class AppModule { }
