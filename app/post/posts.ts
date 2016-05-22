import {Post} from './post';

export var POSTS: Post[] = [
    {
        id: 0, title: "title1", link: "google.ru", author: "author1", description: "description1", comments: [
            { id: 0, body: "Body1" , author: "user1", upvotes: 2},
            { id: 1, body: "Body2", author: "user2", upvotes: 3 }
        ]
    },
    {
        id: 1, title: "title2", link: "google.ru", author: "author2", description: "description2", comments: [
            { id: 2, body: "Body1", author: "user3", upvotes: 5 },
            { id: 3, body: "Body2", author: "user4", upvotes: 1 }
        ]
    }
];
