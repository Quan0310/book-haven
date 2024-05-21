import React from 'react';
import SideBarProfile from './sidebarprofile/SideBarProfile';
import ProfileContent from './ProfileContent/ProfileContent';

// import '../home/Home.css';

const Profile = () => {
    return (
        <div style={{ display: 'flex' }} >
            <SideBarProfile></SideBarProfile>
            <div className='pseudoSidebar'></div>
            <ProfileContent />
        </div>

    );
}

export default Profile;
