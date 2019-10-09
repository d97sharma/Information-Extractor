import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainingModuleComponent } from './training-module/training-module.component';
import { ExtractionModuleComponent } from './extraction-module/extraction-module.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UploadListComponent } from './upload-list/upload-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  {path:'upload-list',component: UploadListComponent},
  { path: 'home', component: HomeComponent },
  { path: 'train', component: TrainingModuleComponent },
  { path: 'extract', component: ExtractionModuleComponent },
  { path: '**', component: PageNotFoundComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
