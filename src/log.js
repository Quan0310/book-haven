
import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { isAdmin, isUser } from './services/UserServices';



const API_log = () => {

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('jwtToken');
        
        const checkUser = async () => {
            try {
                let response = await isUser(token);
                if (response && response.data) {
                    navigate('/user');
                }
            } catch (error) {
                navigate('/login')
            }
        }

        const checkAdmin = async () => {
            try {
                let response = await isAdmin(token);
                if (response && response.data) {
                    navigate('/admin');
                }
            } catch (error) {
                checkUser();
            }
        }
        checkAdmin();
    })
    
    return(
    <div>...</div>
    
);}


export default API_log;