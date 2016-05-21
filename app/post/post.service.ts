import {Post} from './post';
import {Comment} from '../comment/comment';
import {Injectable} from '@angular/core'
import {Posts} from './posts';


@Injectable()
export class PostService{


  getPosts(){
    return Promise.resolve(Posts);
  }

  addPost(Post){
    Posts.push(Post);
  }
};
