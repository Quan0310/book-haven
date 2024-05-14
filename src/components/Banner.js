import { Button } from '@mui/material';
import React, { useState, useEffect } from 'react';
import SwipeableViews from 'react-swipeable-views';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
function Banner() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % 3); // Giả sử có 3 banner
        }, 3000); // 3 giây

        return () => clearInterval(interval);
    }, [currentIndex]);

    const handleChangeIndex = (index) => {
        setCurrentIndex(index);
    };
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + 3) % 3);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
    };
    return (
        <>   <div style={{ position: 'relative' }}>
            <SwipeableViews
                index={currentIndex}
                onChangeIndex={handleChangeIndex}
                enableMouseEvents
                interval={3000}
                resistance
                style={{ overflow: 'hidden' }}
            >
                <div style={{ backgroundColor: '#fff', width: '100%', height: '200px', borderRadius: '5px' }}>Banner 1</div>
                <div style={{ backgroundColor: '#fff', width: '100%', height: '200px', borderRadius: '5px' }}>Banner 2</div>
                <div style={{ backgroundColor: '#fff', width: '100%', height: '200px', borderRadius: '5px' }}>Banner 3</div>
            </SwipeableViews>
            <Button onClick={handlePrev} disabled={currentIndex === 0} style={{ position: 'absolute', top: '50%', left: 0, transform: 'translateY(-50%)' }}><ArrowBackIosNewOutlinedIcon /></Button>
            <Button onClick={handleNext} disabled={currentIndex === 2} style={{ position: 'absolute', top: '50%', right: 0, transform: 'translateY(-50%)' }}><ArrowForwardIosOutlinedIcon /></Button>
        </div>
        </>
    );
}

export default Banner;
