import React from 'react';
import { Empty } from '@douyinfe/semi-ui';
import { IllustrationFailureDark, IllustrationFailure } from '@douyinfe/semi-illustrations';

import './index.scss'

export const CorePage500 = () => {

    return (
        <div className="core-page-container">
            <Empty
                image={<IllustrationFailure style={{ width: 300, height: 300 }} />}
                darkModeImage={<IllustrationFailureDark style={{ width: 300, height: 300 }} />}
                description={'加载失败'}
            />
        </div>
    )
}