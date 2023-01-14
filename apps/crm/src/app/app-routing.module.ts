import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'contacts',
  },
  {
    path: 'notes',
    loadChildren: () => import('./note/note.module').then(m => m.NoteModule),
  },
  {
    path: 'tasks',
    loadChildren: () => import('./task/task.module').then(m => m.TaskModule),
  },
  {
    path: 'contacts',
    loadChildren: () => import('./contacts/contacts.module').then(m => m.ContactsModule),
  },
  {
    path: 'institutions',
    loadChildren: () =>
      import('./institutions/institutions.module').then(m => m.InstitutionsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
