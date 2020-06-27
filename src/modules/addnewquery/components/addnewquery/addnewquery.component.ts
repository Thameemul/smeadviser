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
import { Observable } from 'rxjs';

import { Query } from '../../models/query.model';
import { QueryService } from '../../services/query.service';

@Component({
    selector: 'sb-addnewquery',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './addnewquery.component.html',
    styleUrls: ['addnewquery.component.scss'],
})
export class AddNewQueryComponent implements OnInit {
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

    constructor(private queryservice: QueryService, private firestore: AngularFirestore) { }

    ngOnInit() {
        this.resetForm();
    }

    resetForm(form?: NgForm) {
        if (form != null) {
            form.reset();
        }

        this.queryservice.formData = {
            id: '',
            firstname: '',
            lastname: '',
            email: '',
            phone: '',
            category: '',
            querydesc: '',
        };
    }

    onSubmit(form: NgForm) {
        let data = form.value;
        this.firestore.collection('query').add(data);
        this.resetForm(form);
        alert('Query Submitted successfully');
    }

    // create(query: Query) {
    //     this.queryservice.createQuery(query);
    // }

    // update(query: Query) {
    //     this.queryservice.updateQuery(query);
    // }

    // delete(id: string) {
    //     this.queryservice.deleteQuery(id);
    // }
}
