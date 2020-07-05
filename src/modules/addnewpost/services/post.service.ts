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
    constructor(private fireStore: AngularFirestore, private authService: AuthService) {}

    getPosts(): Observable<Post[]> {
        const t: AngularFirestoreCollection = this.fireStore.collection<Post>('post');
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
        return this.fireStore.collection('post').doc(id).set(post);
    }

    updatePost(post: Post) {
        this.fireStore.doc('post/' + post.id).update(post);
    }

    setFAQstatus(post: Post) {
        this.fireStore.doc('post/' + post.id).update({ isFAQ: 1 });
    }
    deletePost(postId: string) {
        this.fireStore.doc('post/' + postId).delete();
    }
}