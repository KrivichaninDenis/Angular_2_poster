import {Comment} from '../comment/comment';

export class Post {
    id: number;
    title: string;
    link: string;
    author: string;
    date: number;
    description: string;
    upvotes: number;
    comments: Comment[];
}
