import { CanDeactivateGuardService } from './../../services/can-deactivate-guard.service';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { TodoManagerComponent } from './../../todo-manager/todo-manager.component';
import { TodoListComponent } from './../../todo-list/todo-list.component';
import { NotFoundComponent } from './../../not-found/not-found.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/todos', pathMatch: 'full' },
  { path: 'todos', component: TodoListComponent },
  { path: 'create', component: TodoManagerComponent, canDeactivate: [CanDeactivateGuardService] },
  { path: 'not-found', component: NotFoundComponent},
  { path: '**', redirectTo: '/not-found'},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
