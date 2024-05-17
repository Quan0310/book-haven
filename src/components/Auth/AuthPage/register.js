import { Box, Grid, Paper, TextField, Typography, colors, Button } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import React from 'react';
import { Link } from 'react-router-dom';
const linkStyle = {
    cursor: 'pointer', color: '#6868AC', textDecoration: 'none',
    '&:hover': {
        color: '#485689',
    },
    '&:active': {
        color: '#ccc',
    },
}
const Register = () => {
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
                    Đăng ký
                </Typography>

                <TextField
                    fullWidth
                    label="Số điện thoại"
                    variant="outlined"
                    sx={{ marginBottom: '40px' }}
                />

                <Button
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
                    Tiếp theo
                </Button>
                <Typography variant="body2" sx={{ mt: 5 }}>
                    Bằng việc đăng ký, bạn đã đồng ý với BookHaven về
                    <br />
                    <Typography
                        component={Link}
                        to={"/legacy"}
                        variant="body2"
                        sx={linkStyle}>
                        Điều khoản dịch vụ & Chính sách bảo mật
                    </Typography>
                </Typography>
                <Typography variant="body2" sx={{ mt: 5 }}>
                    Bạn đã có tài khoản?{' '}
                    <Typography
                        component={Link}
                        to={"/"}
                        variant="body2"
                        sx={linkStyle}>
                        Đăng nhập
                    </Typography>
                </Typography>
            </Paper>
        </Box>
    );
}

export default Register;
