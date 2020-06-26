import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PostService } from '../../../addnewpost/services/post.service';
import { Post } from '@modules/addnewpost/models';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';

@Component({
    selector: 'sb-post',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './post.component.html',
    styleUrls: ['post.component.scss'],
})
export class PostComponent implements OnInit {
    posts!: Observable< Post[]>;

    constructor(private postservice: PostService,
    ) {

    }

    ngOnInit()   {
        this.posts = this.postservice.getPosts();
        }
}
