import { DashboardService } from './dashboard.service';
import { HelpService } from '../../help/services/help.service';

export const services = [DashboardService, HelpService];

export * from './dashboard.service';
export * from '../../help/services/help.service';
