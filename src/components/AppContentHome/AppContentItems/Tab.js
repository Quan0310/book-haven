import { Button, Pagination, Tab, Tabs, styled } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import './Tab.css';
import { ArrowForwardIosOutlined, BorderAll, ColorLens } from '@mui/icons-material';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import { useNavigate, useNavigation } from 'react-router-dom';
import { books } from '../../../services/UserServices';
import { useDispatch } from 'react-redux';
import { setProductId } from '../../../action/action';
import { connect } from "react-redux"
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const StyledTabs = styled((props) => (
    <Tabs
        {...props}
        TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
))({
    '& .pageTab': {
        marginRight: '30px',
        marginLeft: 'auto',
        alignContent: 'center',
        '& > span': {
            marginBottom: '1px',
            fontSize: '15px',
            fontFamily: "Roboto, Helvetica, Arial, sans-serif"
        },
        '& > button': {
            minWidth: '30px'
        }
    },
    '& .MuiTabs-scroller': {
        height: '60px',
        alignContent: 'center'
    },
    '& .MuiTabs-indicator': {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        top: '40px'

    },
    '& .MuiTabs-indicatorSpan': {
        borderRadius: '1px',
        width: '50%',
        backgroundColor: '#6868AC',
    },

});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
        textTransform: 'none',
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.pxToRem(15),
        marginRight: theme.spacing(1),
        // color: '#6868AC',
        '&.Mui-selected': {
            color: '#6868AC',
        },
        '&.Mui-focusVisible': {
            backgroundColor: 'rgba(100, 95, 228, 0.32)',
        },
    }),
);

const TabContent = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [value, setValue] = useState('PHỔ BIẾN');
    const [products, setProduct] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleDetail = (index) => {
        props.setProductId(index);
        console.log(index);
        navigate('/user/detail');
    }

    useEffect(() => {
        const token = localStorage.getItem('jwtToken');
        books(token, 0, 20)
            .then(response => {
                console.log(response.data);
                setProduct(response.data.content);
                setTotalPages(response.data.totalPages);
            })
            .catch(error => {
                console.log(error);
            });
    })
    const image = 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg';
    const name = 'Tắc kè hoa siêu đẹp chai ha ha ha ah vv vvv vvv vv vvv vvvv vvv vvv ah aha ha hs';
    const price = '1000.000đ';
    const originalPrice = '2000.000đ';
    const discountPercent = 50;
    const rating = 4;
    const sales = '1.4k';
    return (
        <Box sx={{ width: '100%' }}>
            <StyledTabs
                value={value}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
                sx={{

                    margin: '15px 0',
                    backgroundColor: '#fff',
                }}
            >
                {['PHỔ BIẾN', 'BÁN CHẠY', 'HÀNG MỚI', 'GIÁ THẤP ĐẾN CAO', 'GIÁ CAO ĐẾN THẤP'].map((item, index) => (
                    <StyledTab
                        key={index}
                        value={item}
                        label={item}
                    />
                ))}
                <div className='pageTab'>
                    <span> 1</span>
                    <span> /</span>
                    <span> 10</span>
                    <Button color='inherit' >   <ChevronLeftOutlinedIcon /></Button>
                    <Button color='inherit' >  <ChevronRightOutlinedIcon /></Button>


                </div>
            </StyledTabs>
            <Box>
                {/* <Button onClick={() => { handleDetail(5) }}> test </Button> */}
                <Grid container spacing={1}>

                    {
                        products.map((item, index) => (
                            <Grid item xs={6} sm={4} md={3} lg={12 / 5} >
                                <Item onClick={() => { handleDetail(item.bookId) }} className="item-container" sx={{ padding: '0', fontSize: '1em', textAlign: 'left' }}>

                                    <img src={item.image} alt={item.name} style={{ width: '100%', height: 'auto', aspectRatio: '1/1', objectFit: 'cover' }} />
                                    <Typography className='prodName' sx={{ margin: '18px 10px', fontSize: '14px', color: '#29282D', lineHeight: '18px' }}>{item.name}</Typography>
                                    <Typography variant="body1" className='prodName' sx={{ margin: '15px 10px', display: 'flex', fontSize: '14px' }} color="textSecondary">
                                        {item.specialPrice}
                                        {item.discountPercent && <span style={{ marginLeft: '5px' }}><div className='discount'>-10%</div></span>}
                                    </Typography>
                                    {/* <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '0 10px', paddingBottom: '15px' }}>
                                        <div>{[...Array(item.rating)].map((_, index) => (
                                            <StarIcon key={index} style={{ color: '#faaf00', fontSize: '20px' }} />
                                        ))}</div>
                                        <Typography variant="body2" color="black">Đã bán {item.sales} </Typography>
                                    </div> */}

                                </Item>
                            </Grid>
                        ))
                    }
                </Grid>
                <div className='pagination'>
                    <Pagination sx={{
                        margin: '0 auto',
                        '& .MuiPaginationItem-root': {
                            color: '#6868AC', // Màu chữ mặc định
                            borderColor: '#6868AC', // Màu viền
                        },
                        '& .Mui-selected': {
                            backgroundColor: '#6868AC !important', // Màu nền khi được chọn
                            color: '#ffffff', // Màu chữ khi được chọn
                        },
                        '& .MuiPaginationItem-root:hover': {
                            backgroundColor: '#E3CDFF', // Màu nền khi hover
                            color: '#ffffff', // Màu chữ khi hover
                        },
                        '& .MuiPaginationItem-ellipsis': {
                            color: '#6868AC', // Màu cho dấu ba chấm
                        },
                    }} count={totalPages} shape="rounded" />
                </div>
            </Box>
        </Box >
    );
}

const mapStateToProps = (state) => {
    return {
        count: state.counter.count,
        productId: state.counter.productId,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setProductId: (id) => dispatch(setProductId(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TabContent);

