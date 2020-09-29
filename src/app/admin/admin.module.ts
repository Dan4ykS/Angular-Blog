import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AdminComponent } from './pages/admin/admin.component';
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AdminComponent, CreatePostComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: AdminComponent },
      { path: 'createPost', component: CreatePostComponent }
    ])
  ],
  exports: [RouterModule]
})
export class AdminModule { }
