import {Component, OnInit} from '@angular/core';
import {RouteParams} from '@angular/router-deprecated';

import {PostService} from '../../service/post.service';
import {Post} from '../post';
import {AddCommentComponent} from '../../comment/addComment/addComment.component';

@Component({
  selector: 'watchPost',
  templateUrl: 'app/post/watchPost/watchPost.component.html',
  directives: [AddCommentComponent]
})
export class WatchPostComponent implements OnInit{
  post: Post;

  constructor(
    private postService: PostService,
    private routeParams: RouteParams
  ){}

  ngOnInit(){
    let id = +this.routeParams.get('id');
      this.postService.getPost(id)
          .then(post => this.post = post);
  }

  removeComment(post: Post, index: number){
    this.postService.removeComment(post, index);
  }

  upVotesComment(index: number){
    this.postService.upVotesComment(this.post.comments[index]);
  }

  downVotesComment(index: number){
    this.postService.downVotesComment(this.post.comments[index]);
  }
}
