import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'sb-login',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './login.component.html',
    styleUrls: ['login.component.scss'],
})
export class LoginComponent implements OnInit {
    email!: string;
    password!: string;
    isChecked = false;
    returnUrl!: string;
    isLoading!: Subject<boolean>;
    constructor(
        private authservice: AuthService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        //  this.resetForm();
        this.isLoading = new Subject<boolean>();
        this.isLoading.next(false);

        this.returnUrl = this.route.snapshot.queryParams.returnUrl || 'dashboard';
    }

    resetForm(form?: NgForm) {}

    SignIn() {
        this.showProgressBar(true);
        // return;
        this.authservice.SignIn(this.email, this.password).subscribe(
            () => {
                this.showProgressBar(false);
                this.router.navigateByUrl(this.returnUrl);
            },
            err => {
                alert(err);
                this.showProgressBar(false);
            }
        );
    }

    showProgressBar(show: boolean) {
        this.isLoading.next(show);
    }
}
