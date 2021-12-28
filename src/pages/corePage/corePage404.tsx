import React from 'react';
import { Empty } from '@douyinfe/semi-ui';
import { IllustrationNotFoundDark, IllustrationSuccess, IllustrationFailure, IllustrationNoAccess, IllustrationNoContent, IllustrationNotFound, IllustrationNoResult } from '@douyinfe/semi-illustrations';

import './index.scss'

export const CorePage404 = () => {

    return (
        <div className="core-page-container">
            <Empty
                image={<IllustrationNotFound style={{ width: 300, height: 300 }} />}
                darkModeImage={<IllustrationNotFoundDark style={{ width: 300, height: 300 }} />}
                description={'页面404'}
            />
        </div>
    )
}