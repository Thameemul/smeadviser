import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Post } from '@modules/contribution/models/post.model';
import { PostService } from '@modules/contribution/services';
import { Observable } from 'rxjs';

@Component({
    selector: 'sb-domain',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './domain.component.html',
    styleUrls: ['domain.component.scss'],
})
export class DomainComponent implements OnInit {
    // posts!: Observable<Post[]>;
    domainPosts!: Observable<Post[]>;

    constructor(private postService: PostService) {}

    ngOnInit() {
        this.domainPosts = this.postService.getDomainPosts();
    }

    // setAsFAQ(post: Post) {
    //     post.isFAQ = true;
    //     this.postService.setFAQstatus(post);
    // }
}
