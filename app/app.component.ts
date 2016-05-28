/**
 * Created by КРИВИЧАНИН on 19.05.2016.
 */
import {Component, Input} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';

import {HomeComponent} from './home/home.component';
import {AddPostComponent} from './post/addPost/addPost.component';
import {WatchPostComponent} from './post/watchPost/watchPost.component';
import {PostService} from './service/post.service';

@Component({
    selector: 'app',
    templateUrl: 'app/app.component.html',
    directives: [
      ROUTER_DIRECTIVES
    ],
    providers: [
        ROUTER_PROVIDERS,
        PostService
      ]
})

@RouteConfig([
  {
      path: "/home",
      name: "Home",
      component: HomeComponent,
      useAsDefault: true
  },
  {
    path: "/addPost",
    name: "AddPost",
    component: AddPostComponent
  },
  {
    path:"/watchPost/:id",
    name: "WatchPost",
    component: WatchPostComponent
  }
])

export class AppComponent {
}
