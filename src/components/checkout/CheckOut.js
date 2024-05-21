import { Button, Checkbox, FormControl, FormControlLabel, Grid, Radio, RadioGroup } from '@mui/material';
import React from 'react';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import { useNavigate } from 'react-router-dom';
import '../cart/Cart.css'

const CheckOut = () => {
    return (
        <div style={{ textAlign: 'left', fontFamily: 'Arial, Helvetica, sans-serif' }}>
            <h3 className='cart-header'>THANH TOÁN</h3>

            <div className='cart-body'>
                <Grid container>
                    <Grid xs={12} sm={9}>
                        <div className='cart-product'>
                            <div className='cart-shipment'>
                                <h5>Chọn hình thức giao hàng</h5>
                                <div className='choose-shipment'>
                                    <FormControl>

                                        <RadioGroup
                                            aria-labelledby="demo-radio-buttons-group-label"
                                            defaultValue="female"
                                            name="radio-buttons-group"
                                        >
                                            <FormControlLabel value="female" control={<Radio />} label={
                                                <>
                                                    <span className='product-cart-now'>NOW</span>
                                                    <span>Giao siêu tốc 2h</span>
                                                    <span className='ship-10k'>-10K</span>
                                                </>
                                            } />
                                            <FormControlLabel value="male" control={<Radio />} label="Giao tiếp kiệm" />
                                        </RadioGroup>
                                    </FormControl>
                                </div>
                                <div className='choose-shipment'>
                                    <div className='chosen-shipment' >
                                        <div>
                                            <span className='product-cart-now'>NOW</span>
                                            <span>GIAO SIÊU TỐC 2H</span>
                                        </div>
                                        <div>
                                            <span className='ship-cost-original'>25.000đ</span>
                                            <span className='ship-cost-discount'>15.000đ
                                                <InfoOutlinedIcon sx={{ color: '#686868', height: '20px', marginBottom: '3px', cursor: 'pointer' }} />
                                            </span>
                                        </div>
                                    </div>
                                    <div className='shipment-product' >
                                        <img src={'https://via.placeholder.com/300'} alt={'a'} style={{ width: '50px', height: 'auto', aspectRatio: '1/1', objectFit: 'contain' }} />
                                        <div className='shipment-product-info'>
                                            <p className='shipment-product-name'>Combo 2Q:  Cuốn theo chiều gió Cuốn theo chiều gió Cuốn theo chiều gió Cuốn theo chiều gió 2T-Bìa mềm</p>

                                            <div className='shipment-flex'>
                                                <span className='shipment-product-quantity'>SL: 1</span>
                                                <span className='shipment-product-price'>154.000đ</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='cart-shipment'>
                                <h5>Chọn hình thức thanh toán</h5>
                                <FormControl>

                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="female"
                                        name="radio-buttons-group"
                                    >
                                        <FormControlLabel value="female" control={<Radio />} sx={{
                                            '& .MuiFormControlLabel-label': {
                                                fontSize: '15px',
                                            },
                                        }} label='Thanh toán tiền khi nhận hàng' />
                                        <FormControlLabel value="male" control={<Radio />} sx={{
                                            '& .MuiFormControlLabel-label': {
                                                fontSize: '15px',
                                            },
                                        }} label="Thẻ ATM nội địa/Intetnet Banking" />
                                    </RadioGroup>
                                </FormControl>
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
                                <div className='total-checkout-header'>
                                    <p className='total-checkout-header-title'>Đơn hàng</p>
                                    <p className='total-checkout-header-value'>1 sản phẩm</p>
                                </div>
                                <div className='flex-spacebetween'>
                                    <p className='checkout-title'>Tạm tính</p>
                                    <p>129.000đ</p>
                                </div>
                                <div className='flex-spacebetween'>
                                    <p className='checkout-title'>Phí vận chuyển</p>
                                    <p>129.000đ</p>
                                </div>
                                <div className='flex-spacebetween'>
                                    <p className='checkout-title'>Khuyến mãi vận chuyển</p>
                                    <p>129.000đ</p>
                                </div>
                                <div className='flex-spacebetween checkout-total'>
                                    <p className='checkout-total-title'>Tổng tiền</p>
                                    <div className='checkout-total-value'>
                                        <p className='checkout-total-value-value'>154.000đ</p>
                                        <p className='checkout-total-value-note'>(Giá này đã bao gồm thuế GTGT, phí đóng gói, phí vận chuyển và các chi phí phát sinh khác)</p>
                                    </div>
                                </div>
                                <Button sx={{
                                    width: '100%', backgroundColor: '#6868ac', color: '#fff',
                                    '&:hover': {
                                        backgroundColor: '#4d4db3', // Màu nền khi hover
                                    },
                                }}>Mua hàng (1)</Button>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div >
    );
}

export default CheckOut;
