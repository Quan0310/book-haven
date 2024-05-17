import React from 'react';
import Login from '../Auth/AuthPage/Login';
import Register from '../Auth/AuthPage/register';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import PrimarySearchAppBar from '../Header/Header';
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
