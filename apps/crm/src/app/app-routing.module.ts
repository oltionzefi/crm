import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
	{ path: '', component: AppComponent },
	{
		path: 'notes',
		loadChildren: () =>
			import('./note/note.module').then(m => m.NoteModule),
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
