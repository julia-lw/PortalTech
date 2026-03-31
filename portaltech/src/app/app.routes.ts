import { Routes } from '@angular/router';
import { Tutoriais } from './pages/tutoriais/tutoriais';
import { Documentacao } from './pages/documentacao/documentacao';
import { Autor } from './pages/autor/autor';
import { Home } from './pages/home/home';

export const routes: Routes = [
    {path: 'tutoriais', component: Tutoriais},
    {path: 'documentacao', component: Documentacao},
    {path: 'autor', component: Autor},
    {path: '', component: Home},
];
