import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Help } from '../../models/help.model';
import { HelpService } from '../../services/help.service';

@Component({
    selector: 'sb-help',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './help.component.html',
    styleUrls: ['help.component.scss'],
})
export class HelpComponent implements OnInit {
    helps!: Observable<Help[]>;

    constructor(private helpService: HelpService) {}

    ngOnInit(){
        this.helps = this.helpService.getHelps();
    }
}
