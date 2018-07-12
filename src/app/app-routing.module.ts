import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { ShowComponent } from './show/show.component';
import { Routes , RouterModule} from '@angular/router';

const routes: Routes = [
 // {path: '', redirectTo: '/add' , pathMatch: 'full' },
  {path: 'add' , component: AddComponent},
  {path: 'show' , component: ShowComponent}
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
