import {Component, OnInit} from '@angular/core';
import {PostService} from '../post/post.service';
import {Post} from '../post/post';
import {WatchPostComponent} from '../post/watchPost/watchPost.component';
import { Router } from '@angular/router-deprecated';

@Component({
    selector: 'home',
    templateUrl: 'app/home/home.component.html',
    directives: [WatchPostComponent]
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

    selectPost(post: Post){
       this.router.navigate(['WatchPost',{id: post.id}]);
    }
}
