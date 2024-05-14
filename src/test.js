import React, { useState } from 'react';
import { Box, Paper, TextField, Button, Typography } from '@mui/material';

function VerificationCodeInput() {
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

    return (
        <Box sx={{ height: '100vh', backgroundColor: '#6868AC', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Paper sx={{ padding: 4, width: '40%', textAlign: 'center' }}>
                <Typography variant="h5" gutterBottom>
                    Nhập mã xác nhận
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
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
                <Button variant="contained" sx={{ backgroundColor: '#6868AC', color: 'white', mt: 2 }}>
                    Xác nhận
                </Button>
            </Paper>
        </Box>
    );
}

export default VerificationCodeInput;
