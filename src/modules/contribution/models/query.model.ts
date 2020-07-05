import { reply } from './reply.model';

// tslint:disable-next-line: class-name
export interface userquery {
    id?: string;
    desc?: string;
    replies?: reply[];
}
