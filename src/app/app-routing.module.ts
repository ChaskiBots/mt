import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },

  {path: 'transporte',
   loadChildren: () => import('./pages/transporte/transporte.module').then( m => m.TransportePageModule)
  },

  {path: 'restaurante',
   loadChildren: () => import('./pages/restaurante/restaurante.module').then( m => m.RestaurantePageModule)
  },

  {path: 'medicina',
   loadChildren: () => import('./pages/medicina/medicina.module').then( m => m.MedicinaPageModule)
  },

  {path: 'repuesto',
   loadChildren: () => import('./pages/repuesto/repuesto.module').then( m => m.RepuestoPageModule)
  },

  {path: 'educacion',
  loadChildren: () => import('./pages/educacion/educacion.module').then( m => m.EducacionPageModule)
},

  {path: 'serviciospublicos',
   loadChildren: () => import('./pages/serviciospublicos/serviciospublicos.module').then( m => m.ServiciospublicosPageModule)
  },

  {path: 'destinos',
   loadChildren: () => import('./pages/destinos/destinos.module').then( m => m.DestinosPageModule)
  },

  {path: 'insumos',
  loadChildren: () => import('./pages/insumos/insumos.module').then( m => m.InsumosPageModule)
},

{path: 'hoteles',
loadChildren: () => import('./pages/hoteles/hoteles.module').then( m => m.HotelesPageModule)
},
  {path: 'tabcontacto',
  loadChildren: () => import('./pages/tabcontacto/tabcontacto.module').then( m => m.TabcontactoPageModule)
 },
  {
    path: 'tabrutas',
    loadChildren: () => import('./pages/tabrutas/tabrutas.module').then( m => m.TabrutasPageModule)
  },
  {
    path: 'mejia',
    loadChildren: () => import('./transporte/mejia/mejia.module').then( m => m.MejiaPageModule)
  },
  {
    path: 'chaski',
    loadChildren: () => import('./pages/chaski/chaski.module').then( m => m.ChaskiPageModule)
  },
  {
    path: 'ciencia',
    loadChildren: () => import('./ciencia/ciencia.module').then( m => m.CienciaPageModule)
  },
  {
    path: 'electronica',
    loadChildren: () => import('./pages/electronica/electronica.module').then( m => m.ElectronicaPageModule)
  },
  {
    path: 'chaskimapa',
    loadChildren: () => import('./pages/chaskimapa/chaskimapa.module').then( m => m.ChaskimapaPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
