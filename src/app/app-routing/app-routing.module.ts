import { CommonModule } from '@angular/common';
import { NgModule,} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelfieListComponent } from '../features/selfies/selfie-list/selfie-list.component';

const routes : Routes=[

  {
    component : SelfieListComponent, 
    path :'selfies',
  },
  {
    path: "", pathMatch :"full", redirectTo:'/selfies'
  },
  {
    path: "", pathMatch :"full", redirectTo:'/selfies'
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
