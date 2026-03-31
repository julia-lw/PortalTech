import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Tutoriais } from './pages/tutoriais/tutoriais';
import { Documentacao } from './pages/documentacao/documentacao';
import { Autor } from './pages/autor/autor';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'tutoriais', component: Tutoriais},
    {path: 'documentacao', component: Documentacao},
    {path: 'autor', component: Autor}
];
