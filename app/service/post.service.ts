/**
 * Created by КРИВИЧАНИН on 27.05.2016.
 */
import {Injectable} from '@angular/core'

import {Post} from '../post/post';
import {Comment} from '../comment/comment';
import {POSTS} from '../post/posts';



@Injectable()
export class PostService {
    posts:Post[] =  POSTS;

    constructor(){}

    getPosts() {
       return Promise.resolve(this.posts);
    }

    addPost(Post) {
        this.posts = [...this.posts,Post];
    }

    removePost(index: number) {
        return this.posts.splice(index, 1);
    }

    getPost(id: number) {
        return Promise.resolve(this.posts).then(
            posts => posts.filter(post => post.id === id)[0]
        );
    }

    upVotesPost(post: Post) {
        return post.upvotes += 1;
    }

    downVotesPost(post: Post) {
        if (post.upvotes === 0) { return; }
        return post.upvotes -= 1;
    }

    addComment(post: Post, comment: Comment) {
        return post.comments.push(comment);
    }

    upVotesComment(comment: Comment) {
        return comment.upvotes += 1;
    }

    downVotesComment(comment: Comment) {
        if (comment.upvotes === 0) { return; }
        return comment.upvotes -= 1;
    }

    removeComment(post: Post, index: number) {
        return post.comments.splice(index, 1);
    }
};
