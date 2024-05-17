import React from 'react';
import './AppContentHome.css'

import Tab from './AppContentItems/Tab';
import Banner from './AppContentItems/Banner';
const AppContentHome = () => {
    return (
        <div className='Content-container' >
            <Banner />
            <Tab />
        </div>
    );
}

export default AppContentHome;
