import { Injectable } from '@angular/core';
import {
    AngularFirestore,
    AngularFirestoreCollection,
    AngularFirestoreCollectionGroup,
} from '@angular/fire/firestore';
import { AuthService } from '@modules/auth/services';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';

import { Post } from '../models/post.model';

@Injectable()
export class PostService {
    constructor(private firestore: AngularFirestore, private authService: AuthService) {}

    getPosts(): Observable<Post[]> {
        const t: AngularFirestoreCollection = this.firestore.collection<Post>('post');
        return t.valueChanges();
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
