import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Post } from '../../../addnewpost/models/post.model';
import { PostService } from '../../../addnewpost/services/post.service';

@Component({
    selector: 'sb-others',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './others.component.html',
    styleUrls: ['others.component.scss'],
})
export class OthersComponent implements OnInit {
    otherPosts!: Observable<Post[]>;

    constructor(private postService: PostService) {}

    ngOnInit() {
        this.otherPosts = this.postService.getOtherPosts();
    }

    // setAsFAQ(post: Post) {
    //     post.isFAQ = true;
    //     this.postService.setFAQstatus(post);
    // }
}
