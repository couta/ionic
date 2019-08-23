import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'gerar-e-ler-qrcode', loadChildren: './gerar-e-ler-qrcode/gerar-e-ler-qrcode.module#GerarELerQrcodePageModule' },
  { path: 'imprimir', loadChildren: './imprimir/imprimir.module#ImprimirPageModule' },
  { path: 'imprimir2', loadChildren: './imprimir2/imprimir2.module#Imprimir2PageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
