import {Component, OnInit} from '@angular/core';
import {PostService} from '../../post/post.service';
import {Comment} from '../comment';
import { RouteParams } from '@angular/router-deprecated';
import {Post} from '../../post/post';

@Component({
  selector: 'addComment',
  templateUrl: 'app/comment/addComment/addComment.component.html'
})

export class AddCommentComponent implements OnInit {
  comment: Comment = new Comment();
  post: Post;
  constructor(
    private postService: PostService,
    private routeParams: RouteParams
  ){

  }

  ngOnInit() {
        let id = +this.routeParams.get('id');
        this.postService.getPost(id)
            .then(post => this.post = post);
    }

  addComment(){
    this.comment.author = "user1";
    this.comment.upvotes = 0;
    this.comment.id = 10;

    this.postService.addComment(this.post, this.comment);
    this.comment = new Comment();
  }
}
