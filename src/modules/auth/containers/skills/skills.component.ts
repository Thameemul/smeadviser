import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { UserSkill } from '@modules/auth/models/userskill.model';

import { UserSkillService } from '../../services/userskill.service';

@Component({
    selector: 'sb-skills',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './skills.component.html',
    styleUrls: ['skills.component.css'],
})
export class SkillsComponent implements OnInit {
    skill = '';
    model: UserSkill;
    constructor(private userskillservice: UserSkillService, private firestore: AngularFirestore) {
        this.model = {
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
            skills: [],
        };
    }

    ngOnInit() {
        this.resetForm();
    }

    onAdd() {
        if (
            this.skill.trim() !== '' &&
            this.model.skills.findIndex(value => {
                return this.skill === value;
            }) < 0
        ) {
            this.model.skills.push(this.skill);
        }
        this.skill = '';
    }

    resetForm(form?: NgForm) {
        if (form != null) {
            form.reset();
        }
    }

    onSubmit(form: NgForm) {
        const data = form.value;
        this.userskillservice.createUserSkill(this.model).then(
            () => {
                this.resetForm(form);
                alert('User Registered successfully');
            },
            () => {
                // this.resetForm(form);
                alert(
                    'User Registration failed. Please try again. If the issue persists, please contact Admin.'
                );
            }
        );
    }
}
