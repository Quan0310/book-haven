import React from 'react';
import { Outlet } from 'react-router-dom';

const ProfileContent = () => {
    return (
        <div style={{ backgroundColor: '#fff', textAlign: 'left' }}>
            <Outlet />
        </div>
    );
}

export default ProfileContent;
