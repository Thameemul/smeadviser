import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PostService } from '../../../addnewpost/services/post.service';
import { Post } from '@modules/addnewpost/models';
import * as firebase from 'firebase/app';

@Component({
    selector: 'sb-post',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './post.component.html',
    styleUrls: ['post.component.scss'],
})
export class PostComponent implements OnInit {
    postList!: Post[];

    constructor(private postservice: PostService,
    ) {

    }

    ngOnInit()   {
        // this.postservice.getPost<PostItem>().subscribe(data => {
        //   this.postList = data.map(e => {
        //     let test = e.payload.doc.data();

        //      return {
        //        id: e.payload.doc.id,
        //        ...e.payload.doc.data()
        //      } as unknown  as Post;
        //   })
        // });
     }


    // getTodayPosts() {
    //     this.postservice.getPost$().subscribe(data => {
    //         this.postList = data.map(e => {
    //             return {
    //                 id: e.payload.doc.id,
    //                 ...e.payload.doc.data()
    //             } as unknown as Post;
    //         })
    //     });
    // }

}
