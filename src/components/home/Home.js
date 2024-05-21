import React from 'react';
import SideBarHome from '../sidebar/SideBarHome';
import AppContentHome from '../AppContentHome/AppContentHome';

import './Home.css';


const Home = () => {
    return (
        <div style={{ display: 'flex' }} >
            <SideBarHome></SideBarHome>
            <div className='pseudoSidebar'></div>
            <AppContentHome></AppContentHome>
        </div>

    );
}

export default Home;
