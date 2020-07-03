import { DashboardComponent } from './dashboard/dashboard.component';
import { HelpComponent } from './help/help.component';
import { LightComponent } from './light/light.component';
import { StaticComponent } from './static/static.component';

export const containers = [DashboardComponent, StaticComponent, LightComponent, HelpComponent];

export * from './dashboard/dashboard.component';
export * from './static/static.component';
export * from './light/light.component';
export * from './help/help.component';
