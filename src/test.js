import React from 'react';
import './Cart.css'
import { Button, Checkbox, Grid } from '@mui/material';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
const Cart = () => {
    return (
        <div style={{ paddingTop: '104px', textAlign: 'left', fontFamily: 'Arial, Helvetica, sans-serif' }}>
            <h3 className='cart-header'>Giỏ hàng</h3>

            <div className='cart-body'>
                <Grid container>
                    <Grid xs={12} sm={9} >

                        <Grid container className='cart-product-row-header'>

                            <Grid xs={16 / 3} container sx={{ alignItems: 'center' }}  >
                                <Checkbox sx={{
                                    color: '#6868AC',
                                    '&.Mui-checked': {
                                        color: '#6868AC',
                                    },
                                }}
                                    // checked={checkedItems.indexOf(item) !== -1}
                                    color="primary"
                                />
                                <div className='all-product'>Tất cả sản phẩm (4 sản phẩm) </div>
                            </Grid>
                            <Grid display={{ xs: "none", sm: "none", md: 'block' }} md={4 / 3}> <div className='price'>Đơn giá</div></Grid>
                            <Grid display={{ xs: "none", sm: "none", md: 'block' }} md={8 / 3}> <div className='quantity'>Số lượng</div></Grid>
                            <Grid display={{ xs: "none", sm: "none", md: 'block' }} md={4 / 3}> <div className='total'>Thành tiền</div></Grid>
                            <Grid display={{ xs: "none", sm: "none", md: 'block' }} md={4 / 3}> <div className='delete'><DeleteOutlineOutlinedIcon sx={{ color: '#686868' }} /></div></Grid>
                        </Grid>

                        <Grid className='cart-shop'>
                            <Grid container className='cart-shop-name' >
                                <Checkbox sx={{
                                    color: '#6868AC',
                                    '&.Mui-checked': {
                                        color: '#6868AC',
                                    },
                                }}
                                    // checked={checkedItems.indexOf(item) !== -1}
                                    color="primary"
                                />
                                <div className='store-icon'> <StorefrontOutlinedIcon ></StorefrontOutlinedIcon></div>
                                <h5>Ahabook</h5>

                            </Grid>
                            <Grid container className='cart-product-row-header'>
                                <Grid xs={12} md={16 / 3} container sx={{ alignItems: 'center' }}>

                                    <div className='all-producst'>
                                        <Checkbox sx={{
                                            color: '#6868AC',
                                            '&.Mui-checked': {
                                                color: '#6868AC',
                                            },
                                        }}
                                            // checked={checkedItems.indexOf(item) !== -1}
                                            color="primary"
                                        />
                                        <img src={'https://via.placeholder.com/300'} alt={'a'} style={{ width: '100px', height: 'auto', aspectRatio: '1/1', objectFit: 'contain', margin: '0 10px 0 5px' }} />
                                        <div>
                                            <p className='product-cart-name'>Combo 2Q: Cuốn theo chiều gió 2T-Bìa mềm</p>
                                            <span className='product-cart-now'>NOW</span>
                                            <span className='product-cart-2h'>Giao trong 2h</span>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid display={{ xs: "none", sm: "none", md: 'block' }} md={4 / 3}> <div className='price'>Đơn giá</div></Grid>
                                <Grid display={{ xs: "none", sm: "none", md: 'block' }} md={8 / 3}> <div className='quantity'>Số lượng</div></Grid>
                                <Grid display={{ xs: "none", sm: "none", md: 'block' }} md={4 / 3}> <div className='total'>Thành tiền</div></Grid>
                                <Grid display={{ xs: "none", sm: "none", md: 'block' }} md={4 / 3}> <div className='delete'><DeleteOutlineOutlinedIcon sx={{ color: '#686868' }} /></div></Grid>
                                <Grid display={{ xs: "block", sm: "block", md: 'none' }} sm={12} sx={{ marginLeft: '47px', marginTop: "20px" }}>
                                    <div className="detail-item">
                                        <span className="detail-title">50.000đ</span>
                                        <span className="detail-value">5</span>
                                    </div>
                                    <div className="detail-item">
                                        <span className="detail-title">Số lượng:</span>
                                        <span className="detail-value" style={{ color: '#6868AC', fontWeight: '500' }}>50.000đ</span>
                                    </div>
                                    <div className="detail-item">
                                        <span className="detail-title">Thành tiền:</span>
                                        <span className="detail-value" style={{ color: '#6868AC', fontWeight: '500' }}>50.000đ</span>
                                    </div>
                                </Grid>

                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid xs={12} sm={3}>
                        <div className='cart-delivery-info'>
                            b
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div >
    );
}
export default Cart;