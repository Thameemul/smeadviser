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

import { UserSkill } from '../../../auth/models/userskill.model';
import { UserSkillService } from '../../../auth/services/userskill.service';
import { Query } from '../../models/query.model';
import { QueryService } from '../../services/query.service';

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

    selectedOption = 'Technical';

    model!: Query;

    htmlContent = '';
    public config: AngularEditorConfig = {
        editable: true,
        spellcheck: true,
        height: '5rem',
        minHeight: '15rem',
        placeholder: '',
        translate: 'no',
        defaultParagraphSeparator: 'p',
        defaultFontName: 'Arial',
    };

    constructor(private queryservice: QueryService, private userskillservice: UserSkillService) {}

    ngOnInit() {
        this.resetForm();
        this.model = {
            id: '',
            title: '',
            category: '',
            querydesc: '',
        };
    }

    resetForm(form?: NgForm) {
        if (form != null) {
            form.reset();
        }
        this.model = {
            id: '',
            title: '',
            category: '',
            querydesc: '',
        };
    }

    onSubmit(form: NgForm) {
        this.model.category = this.selectedOption;
        this.queryservice.createQuery(this.model);
        this.resetForm(form);
        alert('Query Submitted successfully');
    }

    // update(query: Query) {
    //     this.queryservice.updateQuery(query);
    // }

    // delete(id: string) {
    //     this.queryservice.deleteQuery(id);
    // }
}
