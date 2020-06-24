import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SkillsComponent } from './skills/skills.component';

export const containers = [
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    SkillsComponent,
];

export * from './login/login.component';
export * from './register/register.component';
export * from './forgot-password/forgot-password.component';
export * from './skills/skills.component';
