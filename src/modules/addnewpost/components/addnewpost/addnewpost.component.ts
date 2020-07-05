import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';

import { Post } from '../../models/post.model';
import { PostService } from '../../services/post.service';

@Component({
    selector: 'sb-addnewpost',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './addnewpost.component.html',
    styleUrls: ['addnewpost.component.scss'],
})
export class AddNewPostComponent implements OnInit {
    htmlContent = '';
    public config: AngularEditorConfig = {
        editable: true,
        spellcheck: true,
        height: '5rem',
        minHeight: '15rem',
        placeholder: 'Enter text here...',
        translate: 'no',
        defaultParagraphSeparator: 'p',
        defaultFontName: 'Arial',
    };
    model!: Post;

    constructor(private postService: PostService) {}

    ngOnInit() {
        this.resetForm();
        this.model = {
            id: '',
            title: '',
            category: '',
            postdesc: '',
        };
    }

    resetForm(form?: NgForm) {
        if (form != null) {
            form.reset();
        }
    }

    onSubmit(form: NgForm) {
        this.postService.createPost(this.model).then(() => {
            this.resetForm(form);
            alert('Post Submitted successfully');
        });
    }

    create(post: Post) {
        this.postService.createPost(post);
    }

    update(post: Post) {
        this.postService.updatePost(post);
    }

    delete(id: string) {
        this.postService.deletePost(id);
    }
}
