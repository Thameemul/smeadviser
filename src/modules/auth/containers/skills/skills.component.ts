import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';

import { UserSkillService } from '../../services/userskill.service';

@Component({
    selector: 'sb-skills',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './skills.component.html',
    styleUrls: ['skills.component.css'],
})
export class SkillsComponent implements OnInit {
    skills: any = [];
    skill = ' ';
    constructor(private userskillservice: UserSkillService, private firestore: AngularFirestore) { }

    ngOnInit() {
        this.resetForm();
    }

    onAdd(form: NgForm){
        this.skills.push(this.skill);
    }

    resetForm(form?: NgForm) {
        if (form != null) {
            form.reset();
        }

        this.userskillservice.userskillData = {
            id: '',
            firstName: '',
            lastName: '',
            mobile: '',
            teamName: '',
            deskNo: '',
            email: '',
            password: '',
            confirmPassword: '',
            techSME: false,
            domainSME: false,
            othersSME: false,
            skills: [''],
        };
    }

    onSubmit(form: NgForm) {
        let data = form.value;
        this.firestore.collection('userskill').add(data);
        this.resetForm(form);
        alert('User Registered successfully');
    }
}
