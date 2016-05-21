import {Component, OnInit} from '@angular/core';
import {PostService} from '../post/post.service';
import {Post} from '../post/post';

@Component({
    selector: 'home',
    templateUrl: 'app/home/home.component.html',
})




export class HomeComponent implements OnInit {
    posts: Post[] = [];

    constructor(
        private postService: PostService
    ) { }

    ngOnInit() {
        this.postService.getPosts()
            .then(posts => this.posts = posts);
    }
}
