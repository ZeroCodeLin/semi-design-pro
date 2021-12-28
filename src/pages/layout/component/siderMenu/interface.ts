export interface SiderMenuProps {
    data: SiderMenuItem[] | any;
    title: string;
    logo: string;
}

export interface SiderMenuItem {
    /**
     * 节点唯一标识
     */
    itemKey?: string;
    icon?: string | React.ReactNode;
    text: string;
    items?: SiderMenuItem[]
}