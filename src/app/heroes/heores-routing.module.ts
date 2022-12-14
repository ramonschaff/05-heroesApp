import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListadoComponent } from './pages/listado/listado.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HeroesModule } from './heroes.module';
import { HeroesHomeComponent } from './pages/heroes-home/heroes-home.component';

const rutas:Routes=[
  {
    path:'',
    component: HeroesHomeComponent,
    children:[
      {
        path:'listado',
        component:ListadoComponent
      },
      {
        path:'agregar',
        component:AgregarComponent
      },
      {
        path:'editar/:id',
        component:AgregarComponent
      },
      {
        path:'buscar',
        component:BuscarComponent
      },
      {
        path:':id',
        component:HeroeComponent
      },
      {
        path:'**',
        redirectTo:'listado'
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(rutas)
  ],
  exports:[
    RouterModule
  ]
})
export class HeoresRoutingModule { }
