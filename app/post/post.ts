import {Comment} from '../comment/comment';

export class Post {
    title: string;
    link: string;
    author: string;
    description: string;
    comments: Comment[];
}
