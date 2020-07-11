import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Post } from '@modules/contribution/models/post.model';
import { PostService } from '@modules/contribution/services';
import { Observable } from 'rxjs';

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
