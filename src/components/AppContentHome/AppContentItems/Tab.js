import { Tab, Tabs, styled } from '@mui/material';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import './Tab.css';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const TabContent = () => {
    const [value, setValue] = useState('one');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    const image = 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg';
    const name = 'Tắc kè hoa siêu đẹp chai ha ha ha ah vv vvv vvv vv vvv vvvv vvv vvv ah aha ha hs';
    const price = '10.000đ';
    const originalPrice = '20.000đ';
    const discountPercent = 50;
    const rating = 4;
    const sales = '1.4k';
    return (
        <Box sx={{ width: '100%' }}>
            <Tabs
                value={value}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
            >
                <Tab value="one" label="Item One" />
                <Tab value="two" label="Item Two" />
                <Tab value="three" label="Item Three" />
            </Tabs>
            <Box>
                <Grid container spacing={1}>

                    <Grid item xs={6} sm={4} md={3} lg={12 / 5} >
                        <Item sx={{ padding: '0', fontSize: '1em', textAlign: 'left' }}>

                            <img src={image} alt={name} style={{ width: '100%', height: 'auto', aspectRatio: '1/1', objectFit: 'cover' }} />
                            <Typography className='prodName' sx={{ margin: '10px 7px' }}>{name}</Typography>
                            <Typography variant="body1" className='prodName' sx={{ margin: '10px 7px', display: 'flex' }} color="textSecondary">
                                {price}
                                {discountPercent && <span style={{ textDecoration: 'line-through', marginLeft: '5px', color: '#ccc' }}>{originalPrice}</span>}
                                {discountPercent && <span style={{ marginLeft: '5px' }}><div className='discount'>-{discountPercent}%</div></span>}
                            </Typography>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '0 7px' }}>
                                <div>{[...Array(rating)].map((_, index) => (
                                    <StarIcon key={index} style={{ color: '#faaf00', fontSize: '20px' }} />
                                ))}</div>
                                <Typography variant="body2" color="black">Đã bán {sales} </Typography>
                            </div>

                        </Item>
                    </Grid>
                    <Grid item xs={6} sm={4} md={3} lg={12 / 5} >
                        <Item sx={{ padding: '0', fontSize: '1em', textAlign: 'left' }}>

                            <img src={image} alt={name} style={{ width: '100%', height: 'auto', aspectRatio: '1/1', objectFit: 'cover' }} />
                            <Typography className='prodName' sx={{ margin: '10px 7px' }}>{name}</Typography>
                            <Typography variant="body1" className='prodName' sx={{ margin: '10px 7px', display: 'flex' }} color="textSecondary">
                                {price}
                                {discountPercent && <span style={{ textDecoration: 'line-through', marginLeft: '5px', color: '#ccc' }}>{originalPrice}</span>}
                                {discountPercent && <span style={{ marginLeft: '5px' }}><div className='discount'>-{discountPercent}%</div></span>}
                            </Typography>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '0 7px' }}>
                                <div>{[...Array(rating)].map((_, index) => (
                                    <StarIcon key={index} style={{ color: '#faaf00', fontSize: '20px' }} />
                                ))}</div>
                                <Typography variant="body2" color="black">Đã bán {sales} </Typography>
                            </div>

                        </Item>
                    </Grid><Grid item xs={6} sm={4} md={3} lg={12 / 5} >
                        <Item sx={{ padding: '0', fontSize: '1em', textAlign: 'left' }}>

                            <img src={image} alt={name} style={{ width: '100%', height: 'auto', aspectRatio: '1/1', objectFit: 'cover' }} />
                            <Typography className='prodName' sx={{ margin: '10px 7px' }}>{name}</Typography>
                            <Typography variant="body1" className='prodName' sx={{ margin: '10px 7px', display: 'flex' }} color="textSecondary">
                                {price}
                                {discountPercent && <span style={{ textDecoration: 'line-through', marginLeft: '5px', color: '#ccc' }}>{originalPrice}</span>}
                                {discountPercent && <span style={{ marginLeft: '5px' }}><div className='discount'>-{discountPercent}%</div></span>}
                            </Typography>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '0 7px' }}>
                                <div>{[...Array(rating)].map((_, index) => (
                                    <StarIcon key={index} style={{ color: '#faaf00', fontSize: '20px' }} />
                                ))}</div>
                                <Typography variant="body2" color="black">Đã bán {sales} </Typography>
                            </div>

                        </Item>
                    </Grid><Grid item xs={6} sm={4} md={3} lg={12 / 5} >
                        <Item sx={{ padding: '0', fontSize: '1em', textAlign: 'left' }}>

                            <img src={image} alt={name} style={{ width: '100%', height: 'auto', aspectRatio: '1/1', objectFit: 'cover' }} />
                            <Typography className='prodName' sx={{ margin: '10px 7px' }}>{name}</Typography>
                            <Typography variant="body1" className='prodName' sx={{ margin: '10px 7px', display: 'flex' }} color="textSecondary">
                                {price}
                                {discountPercent && <span style={{ textDecoration: 'line-through', marginLeft: '5px', color: '#ccc' }}>{originalPrice}</span>}
                                {discountPercent && <span style={{ marginLeft: '5px' }}><div className='discount'>-{discountPercent}%</div></span>}
                            </Typography>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '0 7px' }}>
                                <div>{[...Array(rating)].map((_, index) => (
                                    <StarIcon key={index} style={{ color: '#faaf00', fontSize: '20px' }} />
                                ))}</div>
                                <Typography variant="body2" color="black">Đã bán {sales} </Typography>
                            </div>

                        </Item>
                    </Grid><Grid item xs={6} sm={4} md={3} lg={12 / 5} >
                        <Item sx={{ padding: '0', fontSize: '1em', textAlign: 'left' }}>

                            <img src={image} alt={name} style={{ width: '100%', height: 'auto', aspectRatio: '1/1', objectFit: 'cover' }} />
                            <Typography className='prodName' sx={{ margin: '10px 7px' }}>{name}</Typography>
                            <Typography variant="body1" className='prodName' sx={{ margin: '10px 7px', display: 'flex' }} color="textSecondary">
                                {price}
                                {discountPercent && <span style={{ textDecoration: 'line-through', marginLeft: '5px', color: '#ccc' }}>{originalPrice}</span>}
                                {discountPercent && <span style={{ marginLeft: '5px' }}><div className='discount'>-{discountPercent}%</div></span>}
                            </Typography>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '0 7px' }}>
                                <div>{[...Array(rating)].map((_, index) => (
                                    <StarIcon key={index} style={{ color: '#faaf00', fontSize: '20px' }} />
                                ))}</div>
                                <Typography variant="body2" color="black">Đã bán {sales} </Typography>
                            </div>

                        </Item>
                    </Grid><Grid item xs={6} sm={4} md={3} lg={12 / 5} >
                        <Item sx={{ padding: '0', fontSize: '1em', textAlign: 'left' }}>

                            <img src={image} alt={name} style={{ width: '100%', height: 'auto', aspectRatio: '1/1', objectFit: 'cover' }} />
                            <Typography className='prodName' sx={{ margin: '10px 7px' }}>{name}</Typography>
                            <Typography variant="body1" className='prodName' sx={{ margin: '10px 7px', display: 'flex' }} color="textSecondary">
                                {price}
                                {discountPercent && <span style={{ textDecoration: 'line-through', marginLeft: '5px', color: '#ccc' }}>{originalPrice}</span>}
                                {discountPercent && <span style={{ marginLeft: '5px' }}><div className='discount'>-{discountPercent}%</div></span>}
                            </Typography>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '0 7px' }}>
                                <div>{[...Array(rating)].map((_, index) => (
                                    <StarIcon key={index} style={{ color: '#faaf00', fontSize: '20px' }} />
                                ))}</div>
                                <Typography variant="body2" color="black">Đã bán {sales} </Typography>
                            </div>

                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </Box >
    );
}

export default TabContent;

