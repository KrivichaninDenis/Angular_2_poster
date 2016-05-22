/**
 * Created by КРИВИЧАНИН on 20.05.2016.
 */
import { Component } from '@angular/core';
import {PostService} from '../post.service';
import {Post} from '../post';
import {Location} from '@angular/common';

@Component({
  selector: 'addPost',
  templateUrl: 'app/post/addPost/addPost.component.html'
})


export class AddPostComponent {
  constructor(
    private postService: PostService){
  }

  post: Post = new Post();

  addPost(){
    if (this.post.title != '' && this.post.description != '' && this.post.link != ''){
      this.post.id=5;
      this.post.upvotes = 0;
      this.postService.addPost(this.post);
    }
    this.goBack();
  }

  goBack() {
        window.history.back();
    }
}
