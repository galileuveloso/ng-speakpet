import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpeakPetRoutes } from './speakpet';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  ...SpeakPetRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
