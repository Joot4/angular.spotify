import { Token } from '@angular/compiler';
import { NgModule, Injectable } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
      path:'',
      redirectTo:'player',
      pathMatch:'full'
  },


  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(r => r.LoginModule)
  },
  {
    path:'player',
    loadChildren: ()=> import('./pages/player/player.module').then(r=> r.PlayerModule),
    

  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
