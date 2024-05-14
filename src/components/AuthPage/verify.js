import { Box, Grid, Paper, TextField, Typography, colors, Button } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const linkStyle = {
    color: '#6868AC',
    textDecoration: 'none',
}
const Verify = () => {
    const [seconds, setSeconds] = useState(30);
    const [values, setValues] = useState(Array(6).fill(''));
    const inputRefs = Array(6)
        .fill()
        .map((_, i) => React.createRef());

    const handleChange = (index, event) => {
        let { value } = event.target;
        // Loại bỏ các ký tự không phải số
        value = value.replace(/\D/g, '');
        const newValues = [...values];
        newValues[index] = value;
        setValues(newValues);

        // Chuyển đến ô tiếp theo nếu có giá trị và không phải là ô cuối cùng
        if (value && index < inputRefs.length - 1) {
            inputRefs[index + 1].current.focus();
        }
    };

    const handleKeyDown = (index, event) => {
        // Chuyển đến ô trước đó khi nhấn Backspace và ô hiện tại không có giá trị
        if (event.key === 'Backspace' && !event.target.value && index > 0) {
            inputRefs[index - 1].current.focus();
        }
    };
    const resendHandle = () => {
        setSeconds(30);
    }
    function CountdownTimer() {


        useEffect(() => {
            const intervalId = setInterval(() => {
                setSeconds((prevSeconds) => (prevSeconds > 0 ? prevSeconds - 1 : 0));
            }, 1000);

            return () => clearInterval(intervalId);
        }, []);

        return (
            <>
                {seconds > 0 ? (
                    <>
                        <Typography variant="body2" sx={{ mt: 5 }} align='left'>
                            Gửi lại mã sau {' '}
                            <Typography component="span" variant="body2" sx={linkStyle}>
                                {seconds}s
                            </Typography>
                        </Typography>
                        <Typography variant="body2" align='left'>
                            Mã xác minh có hiệu lực trong{' '}
                            <Typography component='span' variant="body2" sx={linkStyle}>
                                10 phút
                            </Typography>
                        </Typography>
                    </>
                ) : (<Typography variant="body2" sx={{ mt: 5 }} align='left'>
                    Không nhận được{' '}
                    <Typography component='span' onClick={resendHandle} variant="body2" sx={{ cursor: 'pointer', ...linkStyle }}>
                        Gửi lại mã
                    </Typography>
                </Typography>)
                }


            </>

        );
    }
    return (
        <Box sx={{
            height: '100vh',
            backgroundColor: '#6868AC',

        }}>
            <Toolbar />
            <Paper sx={{ padding: 5, width: '55vh', height: '70vh', margin: '0 auto' }}>
                <Typography variant="h5" gutterBottom align='left'
                    sx={{ fontWeight: '500', fontSize: 26 }}
                >
                    Nhập mã xác minh
                </Typography>
                <Typography variant="body2" align='left' sx={{ mb: 1 }}>
                    Số điện thoại 0123456789 chưa có tài khoản tại Book Haven. Vui lòng xác thực để tạo tài khoản.

                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: '10px', margin: '40px 0' }}>
                    {values.map((value, index) => (
                        <TextField
                            key={index}
                            variant="standard"
                            inputRef={inputRefs[index]}
                            value={value}
                            inputProps={{
                                maxLength: 1,
                                style: {
                                    textAlign: 'center',
                                    fontSize: '24px',

                                },
                                inputMode: 'numeric',
                                pattern: '[0-9]*',
                            }}
                            sx={{
                                width: '40px',
                                borderBottom: value ? '1px solid #6868AC' : 'none'
                            }}
                            onChange={(event) => handleChange(index, event)}
                            onKeyDown={(event) => handleKeyDown(index, event)}
                        />
                    ))}
                </Box>

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
                    Xác minh
                </Button>

                <CountdownTimer />


            </Paper>
        </Box>
    );
}

export default Verify;
