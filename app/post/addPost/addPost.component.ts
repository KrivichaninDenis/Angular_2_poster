/**
 * Created by КРИВИЧАНИН on 20.05.2016.
 */
import {Location} from '@angular/common';

import {Component} from '@angular/core';
import {PostService} from '../../service/post.service';
import {Post} from '../post';

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
      this.post.author = "User1";
      this.post.date = Date.now();
      this.postService.addPost(this.post);
    }
    this.goBack();
  }

  goBack() {
        window.history.back();
    }
}
