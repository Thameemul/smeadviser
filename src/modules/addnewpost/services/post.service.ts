import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { Post } from '../models/post.model';

@Injectable()
export class PostService {
    formData!: Post;

    constructor(private firestore: AngularFirestore) {}

    getPost() {
        return this.firestore.collection<PostItem>('post').snapshotChanges();
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

export interface PostItem {
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    category: string;
    postdesc: string;
 }
