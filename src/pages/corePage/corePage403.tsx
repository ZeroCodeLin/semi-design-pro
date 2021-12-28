import React from 'react';
import { Empty } from '@douyinfe/semi-ui';
import { IllustrationNoAccess, IllustrationNoAccessDark } from '@douyinfe/semi-illustrations';

import './index.scss'

export const CorePage403 = () => {

    return (
        <div className="core-page-container">
            <Empty
                image={<IllustrationNoAccess style={{ width: 300, height: 300 }} />}
                darkModeImage={<IllustrationNoAccessDark style={{ width: 300, height: 300 }} />}
                description={'页面404'}
            />
        </div>
    )
}