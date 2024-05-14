import React from 'react';
import './Appbody.css';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import ResponsiveDrawer from './SideBar';
import SideBar from './SideBar';
import AppContent from './AppContent';
import PrimarySearchAppBar from './Header';
const AppBody = () => {
    const handleClick = () => {

    }
    return (
        <>
            <PrimarySearchAppBar></PrimarySearchAppBar>
            <div style={{ backgroundColor: '#D9D9D9', height: '4000px' }}>
                <div className='body-container'>
                    <div style={{ height: '30px' }}>
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
                    <div style={{ display: 'flex' }} >
                        <SideBar></SideBar>
                        <AppContent></AppContent>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AppBody;
