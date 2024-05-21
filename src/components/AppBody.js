import React from 'react';
import './Appbody.css';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import PrimarySearchAppBar from './Header/Header';
import { Outlet } from 'react-router-dom';
import { Flare } from '@mui/icons-material';


const AppBody = () => {
    const handleClick = () => {

    }

    return (
        <>
            <PrimarySearchAppBar></PrimarySearchAppBar>
            <div style={{ height: '104px', backgroundColor: '#D9D9D9' }}></div>
            <div style={{ backgroundColor: '#D9D9D9', height: '4000px' }}>
                <div className='body-container'>
                    <div style={{ height: '40px', position: 'fixed', top: 64, zIndex: 999, width: '100%', backgroundColor: '#D9D9D9', alignItems: 'center', display: 'flex' }}>
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
