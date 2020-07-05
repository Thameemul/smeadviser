export interface SBRouteData {
    title?: string;
    activeTopNav?: string;
    breadcrumbs: Breadcrumb[];
}

export interface QueryRouteData {
    title?: string;
    docid: string;
}

export interface Breadcrumb {
    text: string;
    link?: string;
    active?: boolean;
}

export interface SideNavItems {
    [index: string]: SideNavItem;
}

export interface SideNavItem {
    icon?: string;
    text: string;
    link?: string;
    submenu?: SideNavItem[];
}

export interface SideNavSection {
    text?: string;
    items: string[];
}
