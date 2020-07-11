import { FAQComponent } from './faq/faq.component';
import { AddNewPostComponent } from './Post/addnewpost.component';
import { PostComponent } from './post/post.component';
import { AddNewQueryComponent } from './query/addnewquery.component';
import { DetailqueryComponent } from './query/detailquery.component';
import { QueryComponent } from './query/query.component';

export const components = [
    PostComponent,
    QueryComponent,
    FAQComponent,
    DetailqueryComponent,
    AddNewQueryComponent,
    AddNewPostComponent,
];

export * from './post/post.component';
export * from './query/query.component';
export * from './faq/faq.component';
export * from './query/detailquery.component';
export * from './query/addnewquery.component';
export * from './Post/addnewpost.component';
