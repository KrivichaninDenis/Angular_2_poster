/**
 * Created by КРИВИЧАНИН on 19.05.2016.
 */
import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import {HomeComponent} from './home/home.component';
import {AddPostComponent} from './post/addPost/addPost.component';
import {PostService} from './post/post.service'

@Component({
    selector: 'app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        PostService]
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
  }
])

export class AppComponent { }
