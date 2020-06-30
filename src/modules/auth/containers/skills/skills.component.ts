import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sb-skills',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './skills.component.html',
    styleUrls: ['skills.component.css'],
})
export class SkillsComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
