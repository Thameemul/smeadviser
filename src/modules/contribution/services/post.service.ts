import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';

import { Post } from '../models/post.model';

@Injectable()
export class PostService {
    constructor(private fireStore: AngularFirestore) {}

    getPosts(): Observable<Post[]> {
        const t: AngularFirestoreCollection = this.fireStore.collection<Post>('post');
        return t.valueChanges();
    }

    getDomainPosts(): Observable<Post[]> {
        const o = new Observable<Post[]>(observer => {
            const t = firebase
                .firestore()
                .collection('post')
                .where('category', '==', 'Domain')
                // .orderBy('createDate', 'desc')
                .get()
                .then(querySnapshot => {
                    const domainPosts: Post[] = [];
                    querySnapshot.forEach(doc => {
                        domainPosts.push(doc.data());
                    });
                    observer.next(domainPosts);
                });
        });
        return o;
    }

    getTechPosts(): Observable<Post[]> {
        const o = new Observable<Post[]>(observer => {
            const t = firebase
                .firestore()
                .collection('post')
                .where('category', '==', 'Technical')
                // .orderBy('createDate', 'desc')
                .get()
                .then(querySnapshot => {
                    const techPosts: Post[] = [];
                    querySnapshot.forEach(doc => {
                        techPosts.push(doc.data());
                    });
                    observer.next(techPosts);
                });
        });
        return o;
    }

    getOtherPosts(): Observable<Post[]> {
        const o = new Observable<Post[]>(observer => {
            const t = firebase
                .firestore()
                .collection('post')
                .where('category', '==', 'Others')
                // .orderBy('createDate', 'desc')
                .get()
                .then(querySnapshot => {
                    const otherPosts: Post[] = [];
                    querySnapshot.forEach(doc => {
                        otherPosts.push(doc.data());
                    });
                    observer.next(otherPosts);
                });
        });
        return o;
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
        post.createdDate = id;
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
