import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'registro-usuario',
    loadChildren: () => import('./registro-usuario/registro-usuario.module').then( m => m.RegistroUsuarioPageModule)
  },
  {
    path: 'plant-carrot',
    loadChildren: () => import('./plant-carrot/plant-carrot.module').then( m => m.PlantCarrotPageModule)
  },
  {
    path: 'plant-potato',
    loadChildren: () => import('./plant-potato/plant-potato.module').then( m => m.PlantPotatoPageModule)
  },
  {
    path: 'ingreso-usuario',
    loadChildren: () => import('./ingreso-usuario/ingreso-usuario.module').then( m => m.IngresoUsuarioPageModule)
  },
  {
    path: 'plant-garlic',
    loadChildren: () => import('./plant-garlic/plant-garlic.module').then( m => m.PlantGarlicPageModule)
  },
  {
    path: 'plant-blackberry',
    loadChildren: () => import('./plant-blackberry/plant-blackberry.module').then( m => m.PlantBlackberryPageModule)
  },
  {
    path: 'plant-cherry-tomato',
    loadChildren: () => import('./plant-cherry-tomato/plant-cherry-tomato.module').then( m => m.PlantCherryTomatoPageModule)
  },
  {
    path: 'plant-lemon',
    loadChildren: () => import('./plant-lemon/plant-lemon.module').then( m => m.PlantLemonPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
