import { Box, Grid, Paper, TextField, Typography, colors, Button } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { isAdmin, loginApi } from '../../../services/UserServices';
import { TwoK } from '@mui/icons-material';
const linkStyle = {
    cursor: 'pointer', color: '#6868AC', textDecoration: 'none',
    '&:hover': {
        color: '#485689',
    },
    '&:active': {
        color: '#ccc',
    },
}
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    // useEffect(() => {
    //     console.log(username, password);
    // }, [username]);
    const handleInputChange = (setValue) => (event) => {
        setValue(event.target.value);
    };
    const handleLogin = async () => {
        try {
            let response = await loginApi(username, password);
            // let response = await axios.post('http://localhost:8088/api/login', {
            //     "email": username,
            //     "password": password
            // });
            if (response && response.data && response.data["jwt-token"]) {
                console.log('Đăng nhập thành công:', response.data["jwt-token"]);
                localStorage.setItem('jwtToken', response.data["jwt-token"]);

            }
        } catch (error) {
            // Xử lý lỗi khi gọi API
            console.error('Error while calling login API:', error);
        }
        const token = localStorage.getItem('jwtToken');
        if (token) {
            isAdmin(token)
                .then(response => {
                    navigate("/admin")
                })
                .catch(error => {
                    navigate('/user')
                });
        }



    };
    return (
        <Box sx={{
            height: '100vh',
            backgroundColor: '#6868AC',

        }}>
            <Toolbar />
            <Paper sx={{ padding: 5, width: '55vh', height: '70vh', margin: '0 auto' }}>
                <Typography variant="h5" gutterBottom align='left'
                    sx={{ marginBottom: '45px', fontWeight: '500', fontSize: 26 }}
                >
                    Đăng nhập
                </Typography>

                <TextField
                    fullWidth
                    label="Email/Số điện thoại/Tên đăng nhập"
                    variant="outlined"
                    onChange={handleInputChange(setUsername)}
                    sx={{ marginBottom: '40px' }}
                />

                <TextField
                    fullWidth
                    label="Mật khẩu"
                    type="password"
                    variant="outlined"
                    onChange={handleInputChange(setPassword)}
                    sx={{ marginBottom: '40px' }}
                />

                <Button
                    onClick={handleLogin}
                    sx={{
                        width: '100%',
                        backgroundColor: '#6868AC',
                        color: '#fff',
                        '&:hover': {
                            backgroundColor: '#485689',
                        },
                        '&:active': {
                            backgroundColor: '#2E3B4F',
                        },
                    }}
                >
                    Đăng nhập
                </Button>


                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
                    <Typography
                        component={Link}
                        to={"/forgottenpassword"}
                        variant="body2"
                        sx={linkStyle}>
                        Quên mật khẩu
                    </Typography>
                    <Typography
                        component={Link}
                        to={"/logginbysms"}
                        variant="body2"
                        sx={linkStyle}>
                        Đăng nhập qua SMS
                    </Typography>
                </Box>

                <Typography variant="body2" sx={{ mt: 2 }}>
                    Bạn mới biết đến BookHaven?{' '}
                    <Typography
                        component={Link}
                        to={"/register"}
                        variant="body2"
                        sx={linkStyle}>
                        Đăng ký
                    </Typography>
                </Typography>
            </Paper>
        </Box>
    );
}

export default Login;
