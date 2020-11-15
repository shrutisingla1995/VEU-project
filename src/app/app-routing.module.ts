import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostDataComponent } from './post-data/post-data.component';
import { RecentPostsComponent } from './recent-posts/recent-posts.component';
import { VeuPostsComponent } from './veu-posts/veu-posts.component';

//This is my case 
const routes: Routes = [
    {
        path: '',
        component: VeuPostsComponent
    },
    {
        path: 'recent-posts',
        component: RecentPostsComponent
    },
    {
        path: 'posts',
        component: PostDataComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }