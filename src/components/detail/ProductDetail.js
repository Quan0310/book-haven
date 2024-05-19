import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import './ProductDetail.css';
import { Button, Grid, Rating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { ArrowBackIos, CheckCircle, CheckCircleRounded, KeyboardArrowDown, KeyboardArrowDownOutlined } from '@mui/icons-material';
const ProductDetail = () => {
    const images = [
        {
            original: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
            thumbnail: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
        },
        {
            original: 'https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp',
            thumbnail: 'https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp',
        },
        {
            original: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
            thumbnail: 'https://t4.ftcdn.net/jpg/05/28/15/29/360_F_528152997_fElU6be6dBc3km1sj9MaWyiG9aE53w9n.jpg',
        },
        {
            original: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
            thumbnail: 'https://t4.ftcdn.net/jpg/05/28/15/29/360_F_528152997_fElU6be6dBc3km1sj9MaWyiG9aE53w9n.jpg',
        },
        {
            original: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
            thumbnail: 'https://t4.ftcdn.net/jpg/05/28/15/29/360_F_528152997_fElU6be6dBc3km1sj9MaWyiG9aE53w9n.jpg',
        },
        {
            original: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
            thumbnail: 'https://t4.ftcdn.net/jpg/05/28/15/29/360_F_528152997_fElU6be6dBc3km1sj9MaWyiG9aE53w9n.jpg',
        },
        {
            original: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
            thumbnail: 'https://t4.ftcdn.net/jpg/05/28/15/29/360_F_528152997_fElU6be6dBc3km1sj9MaWyiG9aE53w9n.jpg',
        },
        {
            original: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
            thumbnail: 'https://t4.ftcdn.net/jpg/05/28/15/29/360_F_528152997_fElU6be6dBc3km1sj9MaWyiG9aE53w9n.jpg',
        },
        {
            original: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
            thumbnail: 'https://t4.ftcdn.net/jpg/05/28/15/29/360_F_528152997_fElU6be6dBc3km1sj9MaWyiG9aE53w9n.jpg',
        },
        {
            original: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
            thumbnail: 'https://t4.ftcdn.net/jpg/05/28/15/29/360_F_528152997_fElU6be6dBc3km1sj9MaWyiG9aE53w9n.jpg',
        },
        {
            original: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
            thumbnail: 'https://t4.ftcdn.net/jpg/05/28/15/29/360_F_528152997_fElU6be6dBc3km1sj9MaWyiG9aE53w9n.jpg',
        },
    ];
    return (
        <div className='product-detail-main'>
            <Grid container spacing={1}>
                <Grid xs={12} sm={5}>
                    <div className="custom-image-gallery">
                        <ImageGallery items={images}
                            showThumbnails={true}
                            showFullscreenButton={false}
                            showPlayButton={false}
                            slideDuration={450}
                            slideInterval={2000}
                            thumbnailPosition="bottom"
                            additionalClass="custom-image-gallery"
                        />


                    </div>
                </Grid>
                <Grid xs={12} sm={7} spacing={1}>
                    <div style={{ marginLeft: '20px' }}>
                        <div >
                            <p style={{ fontSize: '14px', display: 'flex', color: '#6868AC', backgroundColor: 'pink', width: '120px', justifyContent: 'center', borderRadius: '15px' }}>
                                <CheckCircleRounded sx={{ margin: ' auto 0', color: '#6868AC', fontSize: '16px' }} /> CHÍNH HÃNG</p>
                            <h5>Sách - Một thoáng ta rực rỡ ở nhân gian (On earth we're briefly gorgeous - Ocean Vuong) </h5>
                        </div>
                        <div>
                            <span style={{ width: '100px' }}>
                                4.9
                                <Rating
                                    value={5}
                                    readOnly
                                    max={5}
                                    precision={1}
                                    sx={{ marginLeft: '5px' }}
                                    icon={<StarIcon style={{ color: '#FFB800', height: '15px', width: '15px' }} />}
                                />
                            </span>
                            <span style={{ border: '1px solid #ccc', margin: '0 10px' }}></span>
                            <span>600</span>
                            <span style={{ color: '#686868' }}> đánh giá</span>
                            <span style={{ border: '1px solid #ccc', margin: '0 10px' }}></span>

                            <span>1.7k</span>
                            <span style={{ color: '#686868' }}> đã bán</span>
                        </div>
                        <div className='price-container'>
                            {/* {discountPercent && <span style={{ textDecoration: 'line-through', marginLeft: '5px', color: '#ccc' }}>{originalPrice}</span>} */}
                            <div style={{ textDecoration: 'line-through', position: 'relative', marginLeft: '5px', marginTop: '7px', color: '#686868', fontSize: '18px' }}>
                                135.000
                                <span style={{ position: 'absolute', top: '-2px', left: '-7px', fontSize: '0.7em' }}>đ</span>
                            </div>

                            <div style={{ position: 'relative', margin: ' 0 40px', fontSize: '35px', color: '#6868AC' }}>
                                103.950
                                <span style={{ position: 'absolute', left: '-7px', fontSize: '0.7em' }}>đ</span>
                            </div>
                            <div style={{ display: 'flex', backgroundColor: '#6868AC', fontSize: '14px', fontWeight: '500', color: ' #fff', marginTop: '7px', height: '27px', alignItems: 'center', padding: '0 13px', borderRadius: '5px' }}>23% GIẢM</div>
                        </div>
                        <div className='price-container'>
                            <div style={{ marginLeft: '5px', color: '#686868', fontSize: '16px', width: '100px', marginRight: '25px' }}>
                                Mã giảm giá của shop
                            </div>
                            <div style={{ display: 'flex', backgroundColor: '#6868AC', fontSize: '14px', fontWeight: '500', color: ' #fff', marginTop: '7px', height: '27px', alignItems: 'center', padding: '0 13px', borderRadius: '5px' }}>GIẢM 15K</div>
                        </div>
                        <div className='price-container'>
                            <div style={{ marginLeft: '5px', color: '#686868', fontSize: '16px', width: '100px', marginRight: '25px' }}>
                                Vận chuyển
                            </div>
                            <div>
                                <div style={{ color: '#6868AC', fontSize: '16px' }} >Miễn phí vận chuyển</div>
                                <div style={{ display: 'flex' }}>
                                    <div style={{ fontSize: '16px', marginRight: '15px' }} >Vận chuyển tới</div>
                                    <div>Phường Đông Mai, Quận Hà Đông <KeyboardArrowDownOutlined /> </div>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <div style={{ fontSize: '16px', marginRight: '15px' }} >Phí vận chuyển</div>
                                    <div style={{ position: 'relative', marginLeft: '5px', color: '#686868', fontSize: '18px' }}>
                                        0  <KeyboardArrowDownOutlined />
                                        <span style={{ position: 'absolute', top: '-2px', left: '-7px', fontSize: '0.7em' }}>đ</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='price-container ' >
                            <div style={{ display: 'flex', alignContent: 'center', marginLeft: '5px', color: '#686868', fontSize: '16px', width: '100px', marginRight: '25px' }}>
                                Số lượng
                            </div>
                            <div className="counter-container">
                                <Button sx={{ minWidth: '40px', color: '#000' }} className="counter-button" >-</Button>
                                <div className="counter-value">1</div>
                                <Button sx={{ minWidth: '40px', color: '#000' }} className="counter-button" >+</Button>
                            </div>
                        </div>
                        <div className='price-container action' >
                            <div className='addToCart actionButton'>Thêm vào giỏ hàng</div>
                            <div className='buyNow actionButton'>Mua ngay</div>

                        </div>
                    </div>
                </Grid>
            </Grid>
        </div >
    );
}

export default ProductDetail;
