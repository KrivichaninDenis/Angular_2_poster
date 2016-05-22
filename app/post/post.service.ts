import {Injectable} from '@angular/core'

import {Post} from './post';
import {Comment} from '../comment/comment';
import {POSTS} from './posts';


@Injectable()
export class PostService{


  getPosts(){
    return Promise.resolve(POSTS);
  }

  addPost(Post){
    POSTS.push(Post);
  }

  removePost(index: number){
    POSTS.splice(index, 1);
  }

  getPost(id: number){
    return Promise.resolve(POSTS).then(
            posts => posts.filter(post => post.id === id)[0]
        );
  }



  addComment(post: Post, comment: Comment){
    post.comments.push(comment);
  }

  removeComment(post: Post, index: number){
    post.comments.splice(index, 1);
  }
};
