import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Home } from './pages/home/home';
import { Tutoriais } from './pages/tutoriais/tutoriais';
import { Documentacao } from './pages/documentacao/documentacao';
import { Autor } from './pages/autor/autor';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Home, Tutoriais, Documentacao, Autor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portaltech');
}
