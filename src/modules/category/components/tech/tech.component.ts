import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Post } from '../../../addnewpost/models/post.model';
import { PostService } from '../../../addnewpost/services/post.service';

@Component({
    selector: 'sb-tech',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './tech.component.html',
    styleUrls: ['tech.component.scss'],
})
export class TechComponent implements OnInit {
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
