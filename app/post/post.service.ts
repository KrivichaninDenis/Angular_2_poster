import {Post} from './post';
import {Comment} from '../comment/comment';
import {Injectable} from '@angular/core'
import {POSTS} from './posts';


@Injectable()
export class PostService{


  getPosts(){
    return Promise.resolve(POSTS);
  }

  addPost(Post){
    POSTS.push(Post);
  }

  getPost(id: number){
    return Promise.resolve(POSTS).then(
            posts => posts.filter(post => post.id === id)[0]
        );
  }

  addComment(post: Post, comment: Comment){
    post.comments.push(comment);
  }
};
