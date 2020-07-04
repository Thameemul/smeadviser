import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AuthService } from '@modules/auth/services';
import { Observable } from 'rxjs';

import { Post } from '../models/post.model';

@Injectable()
export class PostService {
    formData!: Post;
    postCollections!: AngularFirestoreCollection<Post>;

    posts: Observable<Post[]>;

    constructor(private firestore: AngularFirestore, private authService: AuthService) {
        this.posts = this.firestore.collection<Post>('post').valueChanges();
    }

    getPosts(): Observable<Post[]> {
        return this.firestore.collection<Post>('post').valueChanges();
    }
    createPost(post: Post) {
        const date = new Date();
        const id =
            date.getFullYear() +
            '_' +
            +date.getMonth() +
            '_' +
            +date.getDate() +
            '_' +
            +date.getTime();
        post.id = id;
        return this.firestore.collection('post').doc(id).set(post);
    }

    updatePost(post: Post) {
        this.firestore.doc('post/' + post.id).update(post);
    }

    setFAQstatus(post: Post) {
        this.firestore.doc('post/' + post.id).update({ isFAQ: 1 });
    }
    deletePost(postId: string) {
        this.firestore.doc('post/' + postId).delete();
    }
}

