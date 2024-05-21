

import React from 'react';
import './Cart.css'
import { Button, Checkbox, Grid } from '@mui/material';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import { useNavigate } from 'react-router-dom';
const Cart = () => {
    const navigate = useNavigate();
    const handleBuy = () => {
        navigate("/user/checkout");
    }
    return (
        <div style={{ textAlign: 'left', fontFamily: 'Arial, Helvetica, sans-serif' }}>
            <h3 className='cart-header'>Giỏ hàng</h3>

            <div className='cart-body'>
                <Grid container>
                    <Grid xs={12} sm={9}>
                        <div className='cart-product'>
                            <div className='cart-product-row'>
                                <div className='cart-product-row-header'>
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
                                    <div className='price'>Đơn giá</div>
                                    <div className='quantity'>Số lượng</div>
                                    <div className='total'>Thành tiền</div>
                                    <div className='delete'><DeleteOutlineOutlinedIcon sx={{ color: '#686868' }} /></div>
                                </div>
                            </div>

                            <div className='cart-product-row' style={{ marginTop: '20px' }}>
                                <div className='cart-shop' >
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
                                </div>
                                <div className='cart-product-row-header ' style={{ paddingBottom: '30px' }}>
                                    <Checkbox sx={{
                                        color: '#6868AC',
                                        '&.Mui-checked': {
                                            color: '#6868AC',
                                        },
                                    }}
                                        // checked={checkedItems.indexOf(item) !== -1}
                                        color="primary"
                                    />
                                    <div className='all-product'>

                                        <img src={'https://via.placeholder.com/300'} alt={'a'} style={{ width: '100px', height: 'auto', aspectRatio: '1/1', objectFit: 'contain' }} />
                                        <div>
                                            <p className='product-cart-name'>Combo 2Q: Cuốn theo chiều gió 2T-Bìa mềm</p>
                                            <span className='product-cart-now'>NOW</span>
                                            <span className='product-cart-2h'>Giao trong 2h</span>
                                        </div>

                                    </div>
                                    <div className='price price-value'>50.000đ</div>
                                    <div className='quantity quantity-value'>
                                        <div className="counter-container cart-counter-container">
                                            <Button sx={{ minWidth: '40px', color: '#000' }} className="counter-button" >-</Button>
                                            <div className="counter-value">2000</div>
                                            <Button sx={{ minWidth: '40px', color: '#000' }} className="counter-button" >+</Button>
                                        </div>
                                        <p>Còn lại 2 sản phẩm</p>
                                    </div>
                                    <div className='total total-value'>250.000đ</div>
                                    <div className='delete'><Button sx={{ color: '#686868' }}><DeleteOutlineOutlinedIcon /></Button></div>
                                </div>
                            </div>
                            <div className='cart-product-row' style={{ marginTop: '20px' }}>
                                <div className='cart-shop' >
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
                                </div>
                                <div className='cart-product-row-header ' style={{ paddingBottom: '30px' }}>
                                    <Checkbox sx={{
                                        color: '#6868AC',
                                        '&.Mui-checked': {
                                            color: '#6868AC',
                                        },
                                    }}
                                        // checked={checkedItems.indexOf(item) !== -1}
                                        color="primary"
                                    />
                                    <div className='all-product'>

                                        <img src={'https://via.placeholder.com/300'} alt={'a'} style={{ width: '100px', height: 'auto', aspectRatio: '1/1', objectFit: 'contain' }} />
                                        <div>
                                            <p className='product-cart-name'>Combo 2Q: Cuốn theo chiều gió 2T-Bìa mềm</p>
                                            <span className='product-cart-now'>NOW</span>
                                            <span className='product-cart-2h'>Giao trong 2h</span>
                                        </div>

                                    </div>
                                    <div className='price price-value'>50.000đ</div>
                                    <div className='quantity quantity-value'>
                                        <div className="counter-container cart-counter-container">
                                            <Button sx={{ minWidth: '40px', color: '#000' }} className="counter-button" >-</Button>
                                            <div className="counter-value">2000</div>
                                            <Button sx={{ minWidth: '40px', color: '#000' }} className="counter-button" >+</Button>
                                        </div>
                                        <p>Còn lại 2 sản phẩm</p>
                                    </div>
                                    <div className='total total-value'>250.000đ</div>
                                    <div className='delete'><Button sx={{ color: '#686868' }}><DeleteOutlineOutlinedIcon /></Button></div>
                                </div>
                                <div className='cart-product-row-header ' style={{ paddingBottom: '30px' }}>
                                    <Checkbox sx={{
                                        color: '#6868AC',
                                        '&.Mui-checked': {
                                            color: '#6868AC',
                                        },
                                    }}
                                        // checked={checkedItems.indexOf(item) !== -1}
                                        color="primary"
                                    />
                                    <div className='all-product'>

                                        <img src={'https://via.placeholder.com/300'} alt={'a'} style={{ width: '100px', height: 'auto', aspectRatio: '1/1', objectFit: 'contain' }} />
                                        <div>
                                            <p className='product-cart-name'>Combo 2Q: Cuốn theo chiều gió 2T-Bìa mềm</p>
                                            <span className='product-cart-now'>NOW</span>
                                            <span className='product-cart-2h'>Giao trong 2h</span>
                                        </div>

                                    </div>
                                    <div className='price price-value'>50.000đ</div>
                                    <div className='quantity quantity-value'>
                                        <div className="counter-container cart-counter-container">
                                            <Button sx={{ minWidth: '40px', color: '#000' }} className="counter-button" >-</Button>
                                            <div className="counter-value">2000</div>
                                            <Button sx={{ minWidth: '40px', color: '#000' }} className="counter-button" >+</Button>
                                        </div>
                                        <p>Còn lại 2 sản phẩm</p>
                                    </div>
                                    <div className='total total-value'>250.000đ</div>
                                    <div className='delete'><Button sx={{ color: '#686868' }}><DeleteOutlineOutlinedIcon /></Button></div>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid xs={12} sm={3}>
                        <div className='cart-delivery-info'>
                            <div className='delivered-to box-border'>
                                <div className='delivered-to-header'>
                                    <p>Giao tới</p>
                                    <p className='change-address'>Thay đổi</p>
                                </div>
                                <span className='delivered-name'>Minh Châu</span>
                                <span>(+84)123456789</span>
                                <p style={{ marginTop: '5px' }}>Lô 15/20, Khu Dịch Vụ 2</p>
                                <p>Phường Đồng Mai, Quận Hà Đông, Hà Nội</p>
                            </div>
                            <div className='voucher box-border'>
                                <div className='delivered-to-header'>
                                    <p>Khuyến mãi</p>
                                    <p>Có thể chọn 2 <InfoOutlinedIcon sx={{ color: '#686868', height: '20px', marginBottom: '3px', cursor: 'pointer' }} /> </p>
                                </div>
                                <span className='delivered-name'>Minh Châu</span>
                                <span>(+84)123456789</span>
                                <p style={{ marginTop: '5px', color: '#6868ac', cursor: 'pointer' }} >
                                    <LocalAtmOutlinedIcon sx={{ color: '#686868' }} />
                                    Chọn hoặc nhập khuyến mãi khác
                                </p>
                            </div>
                            <div className='total-checkout box-border'>
                                <div className='delivered-to-header delivered-total'>
                                    <p>Tạm tính</p>
                                    <p>139.000đ</p>
                                </div>
                                <div className='delivered-to-header delivered-total-body'>
                                    <p className='delivered-total-title'>Tổng tiền</p>
                                    <div className='delivered-total-value-container'>
                                        <p className='delivered-total-value'>139.000đ</p>
                                        <p className='delivered-vat'>(Đã bao gồm VAT nếu có)</p>
                                    </div>
                                </div>
                            </div>
                            <Button onClick={handleBuy} sx={{
                                width: '100%', backgroundColor: '#6868ac', color: '#fff',
                                '&:hover': {
                                    backgroundColor: '#4d4db3', // Màu nền khi hover
                                },
                            }}>Mua hàng (1)</Button>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Cart;

