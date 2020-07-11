import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Post } from '@modules/contribution/models/post.model';
import { PostService } from '@modules/contribution/services';
import { Observable } from 'rxjs';

@Component({
    selector: 'sb-tech',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './tech.component.html',
    styleUrls: ['tech.component.scss'],
})
export class TechComponent implements OnInit {
    techPosts!: Observable<Post[]>;

    constructor(private postService: PostService) {}

    ngOnInit() {
        this.techPosts = this.postService.getTechPosts();
    }

    // setAsFAQ(post: Post) {
    //     post.isFAQ = true;
    //     this.postService.setFAQstatus(post);
    // }
}
