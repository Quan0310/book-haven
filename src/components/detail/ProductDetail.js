import React, { useEffect } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import './ProductDetail.css';
import { Button, Grid, Pagination, Rating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { ArrowBackIos, CheckCircle, CheckCircleRounded, KeyboardArrowDown, KeyboardArrowDownOutlined } from '@mui/icons-material';
import { useState } from 'react';
import Review from './Review/Review';
import { connect, useSelector } from 'react-redux';
import { bookById } from '../../services/UserServices';
import { setProductId } from '../../action/action';
const ProductDetail = (props) => {
    const [product, setProduct] = useState({});
    const [selected, setSelected] = useState(1);

    useEffect(() => {
        console.log("quoanbnd", props.productId);

        bookById(props.productId)
            .then(response => {
                // console.log(response.data);
                setProduct(response.data);
                // setTotalPages(response.data.totalPages);
            })
            .catch(error => {
                console.log(error);
            });
    })
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
    const reviews = [
        {
            name: 'John Doe',
            avatar: 'https://via.placeholder.com/50', // URL ảnh đại diện
            rate: 4,
            date: '2023-05-18',
            comment: 'Sản phẩm rất tốt!',
            images: [
                'https://via.placeholder.com/300',
                'https://via.placeholder.com/300/0000FF/808080',
                'https://via.placeholder.com/300/FF0000/FFFFFF'
            ]
        },
        {
            name: 'Jane Smith',
            avatar: 'https://via.placeholder.com/50', // URL ảnh đại diện
            rate: 5,
            date: '2023-05-18',
            comment: 'Tôi rất hài lòng với sản phẩm này.',
            images: [
                'https://via.placeholder.com/300/00FF00/000000',
                'https://via.placeholder.com/300/0000FF/808080'
            ]
        }
    ];
    const description = `“Vuong thực sự có thiên tài quan sát.” The New York Times
    “Với một xuất thân bên rìa hết sức xa lạ, Vuong đã viết nên một tác phẩm trữ tình về quá trình tự khám phá chính mình, vừa thành thật đến choáng váng, vừa phổ quát trong từng câu chữ.” The Washington Post 
    “Bằng sự chính xác của một nhà thơ, Ocean Vuong xem xét liệu biến kinh nghiệm của chúng ta thành từ ngữ có thể chữa lành những vết thương trải hàng thế hệ hay không, và liệu tiếng nói của ta có thể nào thực sự được nghe bởi những người ta yêu thương nhất.” Celeste Ng
    Một thoáng ta rực rỡ ở nhân gian viết dưới dạng một lá thư của nhân vật chính, Chó Con, gửi cho người mẹ không biết chữ của mình. Dưới dạng những mẩu chuyện nhỏ, xen kẽ với những đoạn trữ tình ngoại đề, triết lý, và những bài thơ, cuốn sách kể câu chuyện đời không chỉ của Chó Con (tên gọi yêu do bà ngoại đặt cho, nhưng cũng là cách tất cả mọi người trong sách gọi cậu) từ thuở nhỏ đến lúc chớm trưởng thành, mà cả ba thế hệ từ bà, đến mẹ, đến cậu, một cuộc di cư dài từ làng quê Việt Nam sang đất Mỹ, cũng như câu chuyện của những thanh niên Mỹ thế hệ cậu mà đặc trưng là người bạn trai Trevor. Cuốn sách thường được đọc như một Bildungsroman (tiểu thuyết trưởng thành), nhưng cũng có nhiều người coi đây là một Künstlerroman (tiểu thuyết kể về quá trình một người nghệ sĩ trở thành nghệ sĩ).`;
    const description2 = `TÁC GIẢ: 
    Ocean Vuong sinh năm 1988 ở Sài Gòn với tên Vương Quốc Vinh.
    Ocean Vuong - đã sáng tác thơ và ấp ủ mong muốn được làm nhà thơ từ những năm cấp 3 - dần dần nhập vào giới thơ ca ở New York, rồi tiếp đó được nhận vào trường Brooklyn College thuộc Đại học thành phố New York. Anh đã xuất bản hai tập thơ mỏng (chapbook) No (2013) và Burnings (2010) cũng như tham gia nhiều cuộc biểu diễn thơ (open mic) trước khi tập thơ đầu tay, Night Time with Exit Wounds, giành được giải thưởng trong một cuộc thi và được chính thức xuất bản, biến anh trong chớp mắt thành một ngôi sao. Tiểu thuyết đầu tay Một thoáng ta rực rỡ ở nhân gian được cả đống báo lớn kể tên trong danh sách các cuốn sách đáng mong chờ nhất năm 2019, khi ra đời lập tức nhảy vào danh sách Bestseller của New York Times cùng được bầu chọn là Cuốn sách của năm của vô số báo, tạp chí, trang văn học mạng, và càn quét cả đống giải thưởng (chi tiết xem ở đây: ). Anh sắp cho ra mắt tập thơ mới với tựa đề Time is a Mother, nhiều bài trong đó nói về nỗi đau mất mát khi mẹ anh qua đời năm 2020.
    Hiện nay, Ocean Vuong tham gia giảng dạy chuyên ngành sáng tác ở trình độ Thạc sĩ nghệ thuật (MFA) ở trường Đại học Massachusetts Amherst.`
    return (
        <div>
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
                                <h5>{product.name} </h5>
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
                                    {product.price}
                                    <span style={{ position: 'absolute', top: '-2px', left: '-7px', fontSize: '0.7em' }}>đ</span>
                                </div>

                                <div style={{ position: 'relative', margin: ' 0 40px', fontSize: '35px', color: '#6868AC' }}>
                                    {product.specialPrice}
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
            <div className='product-detail-detail'>
                <div className='detail-header'>
                    Thông tin chi tiết
                </div>
                <div className="detail-item">
                    <span className="detail-title">Thương hiệu:</span>
                    <span className="detail-value" style={{ color: '#6868AC', fontWeight: '500' }}>Ocean Vương</span>
                </div>
                <div className="detail-item">
                    <span className="detail-title">Công ty phát hành:</span>
                    <span className="detail-value">Nhã Nam</span>
                </div>
                <div className="detail-item">
                    <span className="detail-title">Năm xuất bản:</span>
                    <span className="detail-value">2021</span>
                </div>
                <div className="detail-item">
                    <span className="detail-title">Kích thước:</span>
                    <span className="detail-value">14 x 20.5cm</span>
                </div>
                <div className="detail-item">
                    <span className="detail-title">Loại bìa:</span>
                    <span className="detail-value">Bìa mềm</span>
                </div>
                <div className="detail-item">
                    <span className="detail-title">Số trang:</span>
                    <span className="detail-value">304</span>
                </div>
                <div className="detail-item">
                    <span className="detail-title">Nhà xuất bản:</span>
                    <span className="detail-value">Quân</span>
                </div>
            </div>
            <div className='product-detail-detail'>
                <div className='detail-header'>
                    Mô tả sản phẩm
                </div>
                <div className="product-description">
                    {description.split('\n').map((str, index) => (
                        <p key={index}>{str}</p>
                    ))}
                </div>
                <div className="product-description">
                    {description2.split('\n').map((str, index) => (
                        <p key={index}>{str}</p>
                    ))}
                </div>
            </div>

            <div className='product-detail-detail'>
                <div className='detail-header'>
                    Đánh giá sản phẩm
                </div>
                <div className='filter-rating'>
                    <div className='rating-value-container'>
                        <span className='rating-value'>4.9</span>
                        <span> trên 5</span>
                        <br></br>
                        <Rating
                            value={5}
                            readOnly
                            max={5}
                            precision={1}
                            sx={{ marginLeft: '-5px', marginTop: '8px' }}
                            icon={<StarIcon style={{ color: '#FFB800', height: '22px', width: '22px' }} />}
                        />
                    </div>
                    <div className='rating-value-filter'>
                        {/* <Grid container xs={12}> */}
                        <Grid xs={12} container>
                            <Grid xs={3} sm={3} md={2} key={1}><div onClick={() => setSelected(1)} className={`rating-item ${selected === 1 ? 'selected' : ''}`} >Tất cả</div></Grid>
                            <Grid xs={3} sm={3} md={2} key={2}><div onClick={() => setSelected(2)} className={`rating-item ${selected === 2 ? 'selected' : ''}`} >5 sao (554)</div></Grid>
                            <Grid xs={3} sm={3} md={2} key={3}><div onClick={() => setSelected(3)} className={`rating-item ${selected === 3 ? 'selected' : ''}`} >4 sao (29)</div></Grid>
                            <Grid xs={3} sm={3} md={2} key={4}><div onClick={() => setSelected(4)} className={`rating-item ${selected === 4 ? 'selected' : ''}`}> 3 sao (7)</div></Grid>
                            <Grid xs={3} sm={3} md={2} key={5}><div onClick={() => setSelected(5)} className={`rating-item ${selected === 5 ? 'selected' : ''}`} >2 sao (1)</div></Grid>
                            <Grid xs={3} sm={3} md={2} key={6}><div onClick={() => setSelected(6)} className={`rating-item ${selected === 6 ? 'selected' : ''}`} >1 sao (4)</div></Grid>
                            <Grid xs={3} sm={3} md={4} key={7}><div onClick={() => setSelected(7)} className={`rating-item text-align-none ${selected === 7 ? 'selected' : ''}`} >Có bình luận (500)</div></Grid>
                            <Grid xs={3} sm={3} md={5} key={8}><div onClick={() => setSelected(8)} className={`rating-item text-align-none ${selected === 8 ? 'selected' : ''}`} >Có hình ảnh / Video (200)</div></Grid>
                        </Grid>

                        {/* </Grid> */}

                    </div>
                </div>
                <Review reviews={reviews} />
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
                    }} count={15} shape="rounded" />
                </div>
            </div>

        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail)
