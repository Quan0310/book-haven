import React, { useState } from 'react';
import { Container, Box, TextField, Radio, RadioGroup, FormControl, FormControlLabel, FormLabel, Button, Select, MenuItem, InputLabel } from '@mui/material';
import './style/MyAccount.css'
const MyAccount = () => {
    const [gender, setGender] = useState('female');
    const [dob, setDob] = useState({ day: '04', month: '10', year: '2000' });

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };

    const handleDobChange = (field) => (event) => {
        setDob({ ...dob, [field]: event.target.value });
    };

    return (
        <div className='MyAccount-container'>
            <h4>Thông tin cá nhân</h4>
            <div className='line'></div>
            <div className='MyAccount-body'>
                <div className='MyAccount-info'>
                    <span className='MyAccount-info-title'>Tên đăng nhập</span>
                    <span className='MyAccount-info-value'>diepminhchau</span>
                </div>
                <div className='MyAccount-info'>
                    <span className='MyAccount-info-title'>Tên</span>
                    <span className='MyAccount-info-value'>Diep Minh Chau</span>
                </div>
                <div className='MyAccount-info'>
                    <span className='MyAccount-info-title'>Email</span>
                    <span className='MyAccount-info-value'>minhchau123@gmail.com</span>
                </div>
                <div className='MyAccount-info'>
                    <span className='MyAccount-info-title'>Số điện thoại</span>
                    <span className='MyAccount-info-value'>+84123456789</span>
                </div>

                <div className='MyAccount-info'>
                    <span className='MyAccount-info-title'>Giới tính</span>

                    <span className='MyAccount-info-value'>
                        <RadioGroup sx={{ marginTop: '-7px' }} row aria-label="gender" name="row-radio-buttons-group" value={gender} onChange={handleGenderChange}>
                            <FormControlLabel value="male" control={<Radio />} label="Nam" />
                            <FormControlLabel value="female" control={<Radio />} label="Nữ" />
                            <FormControlLabel value="other" control={<Radio />} label="Khác" />
                        </RadioGroup>
                    </span>
                </div>
                <div className='MyAccount-info'>
                    <span className='MyAccount-info-title'>Ngày sinh</span>
                    <span className='MyAccount-info-value'>
                        <Box sx={{ display: 'flex' }}>
                            <Select value={dob.day} onChange={handleDobChange('day')} sx={{ height: '35px', width: '90px', marginRight: '20px' }}>
                                {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
                                    <MenuItem key={day} value={String(day).padStart(2, '0')}>{String(day).padStart(2, '0')}</MenuItem>
                                ))}
                            </Select>
                            <Select value={dob.month} onChange={handleDobChange('month')} sx={{ height: '35px', width: '90px', marginRight: '20px' }}>
                                {Array.from({ length: 12 }, (_, i) => i + 1).map(month => (
                                    <MenuItem key={month} value={String(month).padStart(2, '0')}>{String(month).padStart(2, '0')}</MenuItem>
                                ))}
                            </Select>
                            <Select value={dob.year} onChange={handleDobChange('year')} sx={{ height: '35px', width: '90px', marginRight: '20px' }}>
                                {Array.from({ length: 100 }, (_, i) => 2022 - i).map(year => (
                                    <MenuItem key={year} value={String(year)}>{year}</MenuItem>
                                ))}
                            </Select>
                        </Box>
                    </span>
                </div>
                <div className='MyAccount-button'>
                    <Button
                        sx={{
                            width: '150px',
                            backgroundColor: '#6868ac', color: '#fff',
                            '&:hover': {
                                backgroundColor: '#4d4db3', // Màu nền khi hover
                            },
                            marginRight: '15px'
                        }}
                    >Lưu thay đổi</Button>
                    <Button
                        sx={{
                            border: '1px solid #6868ac',
                            color: '#6868AC',
                            width: '150px',
                            marginLeft: '15px'
                        }}
                    >Thoát</Button>
                </div>
            </div>
        </div >
    );
};

export default MyAccount;
