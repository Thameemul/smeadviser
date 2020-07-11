import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Post } from '../../models/post.model';
import { Observable } from 'rxjs';

import { PostService } from '../../services/';

@Component({
    selector: 'sb-post',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './post.component.html',
    styleUrls: ['post.component.scss'],
})
export class PostComponent implements OnInit {
    posts!: Observable<Post[]>;

    constructor(private postService: PostService) {}

    ngOnInit() {
        this.posts = this.postService.getPosts();
    }

    setAsFAQ(post: Post) {
        post.isFAQ = true;
        this.postService.setFAQstatus(post);
    }
}
