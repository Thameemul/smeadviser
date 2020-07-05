import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
@Component({
    selector: 'sb-contact',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './contact.component.html',
    styleUrls: ['contact.component.scss'],
})
export class ContactComponent implements OnInit {
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
    constructor() {}

    ngOnInit() {}
}
