import { Routes } from '@angular/router';
import { RouterModule} from '@angular/router';
import { Calificaciones } from './calificaciones/calificaciones';
import { Home } from './home/home';


export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'calificaciones',
        component: Calificaciones
    },

];
