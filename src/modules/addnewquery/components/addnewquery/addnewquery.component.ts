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
import { UserSkillService } from '../../../auth/services/userskill.service';
import { UserSkill } from '../../../auth/models/userskill.model';

@Component({
    selector: 'sb-addnewquery',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './addnewquery.component.html',
    styleUrls: ['addnewquery.component.scss'],
})
export class AddNewQueryComponent implements OnInit {
    userSkills!: Observable<UserSkill[]>;
    radioTitle = 'Category';
    radioItems: Array<string> = ['Technical', 'Domain', 'Others'];

    model = { category: 'Technical' };

    htmlContent = '';
    public config: AngularEditorConfig = {
        editable: true,
        spellcheck: true,
        height: '5rem',
        minHeight: '15rem',
        placeholder: '',
            // ' Hello, \n Before you post, search the site to make sure your question hasn’t been answered..\n\n 1.Summarize the problem \n  2.Describe what you’ve tried \n 3.When appropriate, show some code',
        translate: 'no',
        defaultParagraphSeparator: 'p',
        defaultFontName: 'Arial',
    };

    constructor(
        private queryservice: QueryService,
        private firestore: AngularFirestore,
        private userskillservice: UserSkillService
    ) {}

    ngOnInit() {
        this.resetForm();
       // this.userSkills = this.userskillservice.getUserSkills();

        // this.userSkills.subscribe(data => {
        //     console.log(data);
        // });

    }

    resetForm(form?: NgForm) {
        if (form != null) {
            form.reset();
        }

        this.queryservice.formData = {
            id: '',
            title: '',
            category: '',
            querydesc: '',
        };
    }

    onSubmit(form: NgForm) {
        let data = form.value;
        this.queryservice.formData.category = this.model.category;

        console.log("Selected category is :", this.queryservice.formData.category);
        console.log("Selected title is :", this.queryservice.formData.title);
        
        this.queryservice.createQuery(data);
        this.resetForm(form);
        alert('Query Submitted successfully');
    }
}
