import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserSkill } from '@modules/auth/models/userskill.model';
import { User } from '@testing/mocks';

import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
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
    email!: string;
    password!: string;

    user?: User;

    constructor(
        private userskillservice: UserSkillService,
        private authService: AuthService,
        private userservice: UserService,
        private firestore: AngularFirestore,
        private router: Router
    ) {
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

    onSubmit(form: NgForm) {
        const data = form.value;

        this.authService.SignUp(this.model.email, this.model.password).then(
            (userid: string) => {
                this.model.id = userid;
                this.userskillservice.createUserSkill(this.model).then(() => {
                    this.resetForm(form);
                    // this.router.navigate(['dashboard']);
                    alert('User Registered successfully');
                    this.router.navigate(['dashboard']);
                });
            },
            (message: string) => {
                alert(
                    'User Registration failed. Please try again. If the issue persists, please contact Admin.'
                );
            }
        );
    }
}
