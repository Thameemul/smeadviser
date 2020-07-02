import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { Post } from '../models/post.model';

@Injectable()
export class PostService {
    formData!: Post;
    //postCollections!: AngularFirestoreCollection<Post>;

    posts: Observable<Post[]>;

    constructor(private firestore: AngularFirestore) {
        this.posts = this.firestore.collection<Post>('post').valueChanges();
    }

    getPosts(): Observable<Post[]> {
        return this.posts;
    }
    createPost(post: Post) {
        return this.firestore.collection('post').add(post);
    }

    updatePost(post: Post) {
        delete post.id;
        this.firestore.doc('post/' + post.id).update(post);
    }

    deletePost(postId: string) {
        this.firestore.doc('post/' + postId).delete();
    }
}

