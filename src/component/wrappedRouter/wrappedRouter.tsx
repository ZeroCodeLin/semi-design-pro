import React, { useEffect, useState } from 'react'
import { Navigate, RouteProps, useLocation, useNavigate } from 'react-router';
import { useRecoilState } from 'recoil';
import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css'; // progress bar style

import { getPerm } from '../../services/perm';
import { permListState } from '../../store';
import { HelpUtils } from '../../utils/utils';

export interface WrappedRouterProps extends RouteProps {
    isAuth?: boolean;

}

const PublicRoute = (props: any) => {
    NProgress.done();
    return props.children
}

NProgress.configure({ showSpinner: false });

const Perm: React.FC<any> = props => {
    const navigator = useNavigate();
    const location = useLocation();
    const { pathname } = location
    const [permList, setPermList] = useRecoilState(permListState);

    useEffect(() => {
        NProgress.done();
    }, [])

    const getPermList = async () => {
        const list = await getPerm();
        setPermList(list)
        return list
    }

    const checkPerm = (permList: any): boolean => {
        let isAuth = false;
        for (let i = 0; i < permList?.length; i++) {
            if (permList[i]?.children?.length > 0) {
                isAuth = checkPerm(permList[i].children)
            }
            if (pathname === permList[i].path) {
                isAuth = true
            }
            if (isAuth) return isAuth
        }
        return isAuth
    }

    const isAuth = async () => {
        let list = permList;
        if (list?.length === 0) {
            const res = await getPermList();
            list = res.data
        }
        const isAuth = checkPerm(list);

        if (!isAuth) {
            navigator('/404', { replace: true })
        }
        return isAuth
    }

    return isAuth() ? props.children : <Navigate to="/404" replace />
}

export const WrappedRouter: React.FC<WrappedRouterProps> = props => {
    NProgress.start();
    const { isAuth } = props;
    const WitchRoute = isAuth ? Perm : PublicRoute

    return <WitchRoute {...props} />
}