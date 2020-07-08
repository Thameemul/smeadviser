import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Post } from '../../../addnewpost/models/post.model';
import { PostService } from '../../../addnewpost/services/post.service';

@Component({
    selector: 'sb-domain',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './domain.component.html',
    styleUrls: ['domain.component.scss'],
})
export class DomainComponent implements OnInit {
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
