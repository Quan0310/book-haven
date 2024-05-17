import React from 'react';
import './Appbody.css';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import ResponsiveDrawer from './sidebar/SideBarHome';
import SideBar from './sidebar/SideBarHome';
import AppContentHome from './AppContentHome/AppContentHome';
import PrimarySearchAppBar from './Header/Header';
import SideBarHome from './sidebar/SideBarHome';
import Home from './home/Home';
import Profile from './profile/Profile';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';


const AppBody = () => {
    const handleClick = () => {

    }

    return (
        <>
            <PrimarySearchAppBar></PrimarySearchAppBar>
            <div style={{ backgroundColor: '#D9D9D9', height: '4000px' }}>
                <div className='body-container'>
                    <div style={{ height: '30px', position: 'fixed', top: 64, zIndex: 999, width: '100%', backgroundColor: '#D9D9D9' }}>
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link color="inherit" href="/" onClick={handleClick}>
                                Trang chủ
                            </Link>
                            <Link color="inherit" href="/danh-muc" onClick={handleClick}>
                                Danh mục sản phẩm
                            </Link>
                            <Typography color="text.primary">Sách văn học</Typography>
                        </Breadcrumbs>
                    </div>
                    <Outlet />
                </div>
            </div>
        </>
    );
}

export default AppBody;
