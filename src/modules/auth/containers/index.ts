import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { SkillsComponent } from './skills/skills.component';
import { UserManagementComponent } from './usermanagement/usermanagement.component';

export const containers = [
    LoginComponent,
    UserManagementComponent,
    ForgotPasswordComponent,
    SkillsComponent,
];

export * from './login/login.component';
export * from './usermanagement/usermanagement.component';
export * from './forgot-password/forgot-password.component';
export * from './skills/skills.component';
