import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
    selector: 'sb-newpost',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './newpost.component.html',
    styleUrls: ['newpost.component.scss'],
})
export class NewPostComponent implements OnInit {
  
    constructor() {}
    ngOnInit() {}
}
