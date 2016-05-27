import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router-deprecated';
import {FORM_DIRECTIVES} from '@angular/common';

import {PostService} from '../service/post.service';
import {Post} from '../post/post';
import {WatchPostComponent} from '../post/watchPost/watchPost.component';


@Component({
    selector: 'home',
    templateUrl: 'app/home/home.component.html',
    directives: [FORM_DIRECTIVES, WatchPostComponent]
})

export class HomeComponent implements OnInit {

    posts: Post[] = [];

    constructor(
        private postService: PostService,
        private router: Router
    ) { }

    ngOnInit() {
        this.postService.getPosts()
            .then(posts => this.posts = posts);
    }

    selectPostComments(post: Post){
       this.router.navigate(['WatchPost',{id: post.id}]);
    }

    removePost(index: number){
      this.postService.removePost(index);
    }

    upVotesPost(post: Post){
      this.postService.upVotesPost(post);
    }

    downVotesPost(post: Post){
      this.postService.downVotesPost(post);
    }
}
