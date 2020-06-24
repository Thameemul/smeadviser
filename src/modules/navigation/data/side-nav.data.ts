import { SideNavItems, SideNavSection } from '@modules/navigation/models';

export const sideNavSections: SideNavSection[] = [
    {
        text: 'CORE',
        items: ['dashboard'],
        // items: ['dashboard', 'viewprofile', 'newquery'],
    },
    {
        text: 'INTERFACE',
        items: ['layouts', 'contributions', 'category'],
        // items: ['layouts', 'contributions', 'pages'], - Pages is hidden here
    },
    {
        text: 'ADDONS',
        items: ['charts'],
        // items: ['charts', 'tables'], - tables is hidden here
    },
];

export const sideNavItems: SideNavItems =
{
    dashboard: {
        icon: 'tachometer-alt',
        text: 'Dashboard',
        link: '/dashboard',
    },
    viewprofile: {
        icon: 'book-open',
        text: 'View Profile',
        link: '/view-profile',
    },
    newquery: {
        icon: 'book-open',
        text: 'Add New Query',
        link: '/newquery',
    },
    layouts: {
        icon: 'columns',
        text: 'Themes',
        submenu: [
            {
                text: 'Black Theme',
                link: '/dashboard/static',
            },
            {
                text: 'Light Theme',
                link: '/dashboard/light',
            },
        ],
    },
    contributions: {
        icon: 'columns',
        text: 'Contributions',
        submenu: [
            {
                text: 'Post',
                link: '/contribution/post',
            },
            {
                text: 'Query',
                link: '/contribution/query',
            },
            {
                text: 'FAQ',
                link: '/contribution/faq',
            },
        ],
    },
    category: {
        icon: 'columns',
        text: 'Category',
        submenu: [
            {
                text: 'Tech',
                link: '/category/tech',
            },
            {
                text: 'Domain',
                link: '/category/domain',
            },
            {
                text: 'Others',
                link: '/category/others',
            },
        ],
    },
    pages: {
        icon: 'book-open',
        text: 'Pages',
        submenu: [
            {
                text: 'Authentication',
                submenu: [
                    {
                        text: 'Login',
                        link: '/auth/login',
                    },
                    {
                        text: 'Register',
                        link: '/auth/register',
                    },
                    {
                        text: 'Forgot Password',
                        link: '/auth/forgot-password',
                    },
                ],
            },
            {
                text: 'Error',
                submenu: [
                    {
                        text: '401 Page',
                        link: '/error/401',
                    },
                    {
                        text: '404 Page',
                        link: '/error/404',
                    },
                    {
                        text: '500 Page',
                        link: '/error/500',
                    },
                ],
            },
        ],
    },
    charts: {
        icon: 'chart-area',
        text: 'Statistics',
        link: '/charts',
    },
    tables: {
        icon: 'table',
        text: 'Tables',
        link: '/tables',
    },
};
