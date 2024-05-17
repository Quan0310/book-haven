import React from 'react';
import { Outlet } from 'react-router-dom';

const ProfileContent = () => {
    return (
        <div style={{ backgroundColor: 'pink' }}>
            <Outlet />
        </div>
    );
}

export default ProfileContent;
