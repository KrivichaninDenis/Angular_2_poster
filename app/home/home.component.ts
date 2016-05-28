import {Component, OnInit, Input} from '@angular/core';
import {Router} from '@angular/router-deprecated';

import {PostService} from '../service/post.service';
import {Post} from '../post/post';
import {WatchPostComponent} from '../post/watchPost/watchPost.component';
import {RenderPost} from '../post/renderPost/renderPost.component';
import {SearchPipe} from '../search/searchPipe';
import {SearchBox} from '../search/search-box';


@Component({
    selector: 'home',
    pipes: [SearchPipe],
    templateUrl: 'app/home/home.component.html',
    directives: [
        WatchPostComponent,
        RenderPost,
        SearchBox
    ]
})

export class HomeComponent implements OnInit {
    term;
    posts: Post[] = [];


    constructor(
        private postService: PostService,
        private router: Router
    ) {
    }

    ngOnInit() {
        this.postService.getPosts()
            .then(posts => this.posts = posts);
    }

    selectPostComments(post: Post) {
        this.router.navigate(['WatchPost', { id: post.id }]);
    }

    removePost(index: number) {
        this.postService.removePost(index);
    }

    upVotesPost(post: Post) {
        this.postService.upVotesPost(post);
    }

    downVotesPost(post: Post) {
        this.postService.downVotesPost(post);
    }
}
