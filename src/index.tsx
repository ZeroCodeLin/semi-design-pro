import React from 'react';
import ReactDOM from 'react-dom'
import { RecoilRoot } from 'recoil'
import { axiosService } from 'axios-services';

import { filterCode } from './utils/request';
import { App } from './pages/app'

axiosService.setFilterCode(filterCode);


ReactDOM.render(
    <RecoilRoot>
        <App />
    </RecoilRoot>,
    document.getElementById('root')
);