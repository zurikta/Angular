import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-calificaciones',
  standalone: true,
  imports: [CommonModule], //Permitir el uso de directivas comunes como ngIf, ngFor
  templateUrl: './calificaciones.html',   
  styleUrls: ['./calificaciones.css']
})
export class Calificaciones implements OnInit {
  headers: string[] = [];
  rows: string[][] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('/assets/calificaciones.scv', { responseType: 'text' }) // Cargar el archivo CSV
      .subscribe(data => { //Se usa para manejar la respuesta del servidor 
        const lines = data.split('\n').filter(line => line.trim());// Dividir el contenido en líneas y filtrar líneas vacías 
        this.headers = lines[0].split(',').map(h => h.trim());// Dividir la primera línea en encabezados y eliminar espacios en blanco 
        this.rows = lines.slice(1).map(line => line.split(',').map(cell => cell.trim()));// Dividir las líneas restantes en celdas y eliminar espacios en blanco
      });
  }
}
