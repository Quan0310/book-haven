import React from 'react';
import Login from './AuthPage/Login';
import Register from './AuthPage/register';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import PrimarySearchAppBar from './Header';
const Auth = () => {
    return (
        <>
            <PrimarySearchAppBar></PrimarySearchAppBar>
            <div>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </div>
        </>
    );
}

export default Auth;
