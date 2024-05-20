import React from 'react';
import LightGallery from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/Star';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import './Review.css'; // Import your custom CSS

const Review = ({ reviews }) => {
    return (
        <div className="reviews">
            {reviews.map((review, reviewIndex) => (
                <div key={reviewIndex} className="review" style={{ display: 'flex', marginBottom: '20px' }}>
                    <div className="avatar">
                        <img src={review.avatar} alt="avatar" className="avatar-img" />
                    </div>
                    <div className="review-content" style={{ marginLeft: '10px' }}>
                        <p className="review-name" >{review.name}</p>
                        <Rating
                            value={review.rate}
                            readOnly
                            max={5}
                            precision={1}
                            icon={<StarIcon style={{ color: '#FFB800', height: '25  px', width: '25   px' }} />}
                            emptyIcon={<StarBorderIcon style={{ height: '25 px', width: '25  px' }} />}
                        />
                        <h5>{review.date}</h5>
                        <h5>{review.comment}</h5>
                        <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
                            {review.images.map((image, imageIndex) => (
                                <a key={imageIndex} href={image}>
                                    <img alt={`img${imageIndex}`} src={image} className="thumbnail" />
                                </a>
                            ))}
                        </LightGallery>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Review;
