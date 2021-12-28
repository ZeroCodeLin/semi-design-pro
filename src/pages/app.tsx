import React, { lazy, Suspense } from 'react';
import { HashRouter, Route, Router, Routes } from 'react-router-dom';
import { IconUser, IconStar, IconSetting } from '@douyinfe/semi-icons';

import 'reset-css';

import { BaseLayout } from './layout';
import { CorePage403, CorePage404, CorePage500 } from './corePage';
import { WrappedRouter } from '../component';

const Analysis = lazy(() => import('./dashboard/analysis/analysis'))
const Workplace = lazy(() => import('./dashboard/workplace/workplace'))

import './index.scss'

const menus: any = [
    {
        path: '/dashboard',
        name: 'Dashboard',
        icon: <IconSetting />,
        children: [
            { path: '/analysis', name: '分析页', },
            { path: '/workplace', name: '工作台', }
        ],
    },
]

export const App: React.FC = props => {
    return (
        <HashRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <BaseLayout
                            siderMenu={menus}
                            siderMenuTitle="Semi-design-pro"
                            logo="//lf1-cdn-tos.bytescm.com/obj/ttfe/ies/semi/webcast_logo.svg"
                        />
                    }>
                    <Route
                        path="/dashboard/analysis"
                        element={
                            <WrappedRouter>
                                <Analysis />
                            </WrappedRouter>
                        }
                    />
                    <Route
                        path="/dashboard/workplace"
                        element={
                            <WrappedRouter>
                                <Workplace />
                            </WrappedRouter>
                        }
                    />
                    <Route path="/403" element={<CorePage403 />} />
                    <Route path="/500" element={<CorePage500 />} />
                    <Route path="*" element={<CorePage404 />} />
                </Route>
            </Routes>
        </HashRouter>
    )
}