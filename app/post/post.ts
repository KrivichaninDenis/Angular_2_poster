import {Comment} from '../comment/comment';

export class Post {
    id: number;
    title: string;
    link: string;
    author: string;
    description: string;
    comments: Comment[];
}
