import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Input,
    OnInit,
    QueryList,
    ViewChildren,
} from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
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

    constructor(private postservice: PostService, private firestore: AngularFirestore) {}

    ngOnInit() {
        this.resetForm();
        this.model = {
            id: '',
            firstname: '',
            lastname: '',
            email: '',
            phone: '',
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
        this.firestore.collection('post').add(this.model);
        this.resetForm(form);
        alert('Post Submitted successfully');
    }

    create(post: Post) {
        this.postservice.createPost(post);
    }

    update(post: Post) {
        this.postservice.updatePost(post);
    }

    delete(id: string) {
        this.postservice.deletePost(id);
    }
}
