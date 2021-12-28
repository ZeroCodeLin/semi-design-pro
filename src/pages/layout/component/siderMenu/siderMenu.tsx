import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { Nav } from '@douyinfe/semi-ui';
import { SiderMenuProps } from './interface';

export const SiderMenu: React.FC<SiderMenuProps> = (props) => {
    const { data, title, logo } = props;
    const navigate = useNavigate();
    const location = useLocation();
    const { pathname } = location;
    const [selectedKeys, setSelectedKeys] = useState<string>()
    const [openKeys, setOpenKeys] = useState([]);

    useEffect(() => {
        setSelectedKeys(pathname);
        const arr = pathname.split('/');
        if (arr?.length > 1) {
            setOpenKeys([`/${arr[1]}`])
        }
    }, [pathname])

    const clickNav = (data: any) => {
        navigate(data.itemKey)
        setSelectedKeys(data.itemKey)
    }

    const onOpenChange = (data: any) => {
        setOpenKeys([...data.openKeys]);
    };

    const getSubNav = (item: any) => {
        const navItemArr: any = [];
        for (let el of item.children) {
            const navItem = (
                <Nav.Item itemKey={`${item.path}${el.path}`} text={el.name} icon={el.icon} />
            )
            navItemArr.push(navItem)
        }
        return (
            <Nav.Sub itemKey={item.path} text={item.name} icon={item.icon}>
                {navItemArr}
            </Nav.Sub>
        )
    }

    const getNavItem = () => {
        const navArr = [];
        for (let item of data) {
            if (item?.children?.length > 0) {
                const navItem = getSubNav(item);
                navArr.push(navItem)
                continue
            }
            const navItem = (
                <Nav.Item itemKey={item.path} text={item.name} icon={item.icon} />
            )
            navArr.push(navItem)
        }
        return navArr;
    }

    return (
        <Nav
            bodyStyle={{ height: 320 }}
            openKeys={openKeys}
            selectedKeys={[selectedKeys]}
            onSelect={clickNav}
            onOpenChange={onOpenChange}
        >
            <Nav.Header logo={<img src={logo} />} text={title} />
            {getNavItem()}
            <Nav.Footer collapseButton={true} />
        </Nav>
    )
}