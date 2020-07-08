import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
@Component({
    selector: 'sb-reportbug',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './reportbug.component.html',
    styleUrls: ['reportbug.component.scss'],
})
export class ReportBugComponent implements OnInit {

    htmlContent = '';
    title = 'Report your needs';
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
