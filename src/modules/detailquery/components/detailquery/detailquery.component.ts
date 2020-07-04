import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Observable } from 'rxjs';

@Component({
    selector: 'sb-detailquery',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './detailquery.component.html',
    styleUrls: ['detailquery.component.scss'],
})
export class DetailQueryComponent implements OnInit {
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
        translate: 'no',
        defaultParagraphSeparator: 'p',
        defaultFontName: 'Arial',
    };

    constructor() {}

    ngOnInit() {}
    // this.resetForm();

    // resetForm(form?: NgForm) {
    //     if (form != null) {
    //         form.reset();
    //     }

    //     this.queryservice.formData = {
    //         id: '',
    //         title: '',
    //         category: '',
    //         querydesc: '',
    //     };
    // }

    // onSubmit(form: NgForm) {
    //     let data = form.value;
    //     this.queryservice.formData.category = this.model.category;

    //     console.log("Selected category is :", this.queryservice.formData.category);
    //     console.log("Selected title is :", this.queryservice.formData.title);

    //     this.queryservice.createQuery(data);
    //     this.resetForm(form);
    //     alert('Query Submitted successfully');
    // }
}
