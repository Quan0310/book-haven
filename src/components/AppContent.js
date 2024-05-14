import React from 'react';
import './AppContent.css'
import Banner from './Banner';
import Tab from './Tab';
const AppContent = () => {
    return (
        <div className='Content-container' >
            <Banner />
            <Tab />
        </div>
    );
}

export default AppContent;
