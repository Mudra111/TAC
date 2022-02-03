import React from 'react';
import Carousel from 'react-elastic-carousel';
import './Carousel.css'

export default function Carousel1() {
    const breakPoints = [
        { width: 1, itemToShow: 1 },
        { width: 550, itemToShow: 2 },
        { width: 768, itemToShow: 3 },
        { width: 1200, itemToShow: 5 }
    ];

    return (
        <div className='carousel'>
            <Carousel className='main-con' breakPoints={breakPoints}>
                <span className='sub-block sb-1'>
                    <p>Build your brand</p>
                    <p style={{ fontSize: '30px', fontWeight: 'bold', lineHeight: '1' }}>Logo design</p>
                </span>
                <span className='sub-block sb-2'>
                    <p>Customize your size</p>
                    <p style={{ fontSize: '30px', fontWeight: 'bold', lineHeight: '1' }}>WordPress</p>
                </span>
                <span className='sub-block sb-3'>
                    <p>Share your message</p>
                    <p style={{ fontSize: '30px', fontWeight: 'bold', lineHeight: '1' }}>Voice Over</p>
                </span>
                <span className='sub-block sb-4'>
                    <p>Engage your audience</p>
                    <p style={{ fontSize: '30px', fontWeight: 'bold', lineHeight: '1' }}>Video Explainer</p>
                </span>
                <span className='sub-block sb-5'>
                    <p>Reach your customers</p>
                    <p style={{ fontSize: '30px', fontWeight: 'bold', lineHeight: '1' }}>Social Media</p>
                </span>

                <span className='sub-block sb-1'>
                    <p>Build your brand</p>
                    <p style={{ fontSize: '30px', fontWeight: 'bold', lineHeight: '1' }}>Logo design</p>
                </span>
                <span className='sub-block sb-2'>
                    <p>Customize your size</p>
                    <p style={{ fontSize: '30px', fontWeight: 'bold', lineHeight: '1' }}>WordPress</p>
                </span>
                <span className='sub-block sb-3'>
                    <p>Share your message</p>
                    <p style={{ fontSize: '30px', fontWeight: 'bold', lineHeight: '1' }}>Voice Over</p>
                </span>
                <span className='sub-block sb-4'>
                    <p>Engage your audience</p>
                    <p style={{ fontSize: '30px', fontWeight: 'bold', lineHeight: '1' }}>Video Explainer</p>
                </span>
                <span className='sub-block sb-5'>
                    <p>Reach your customers</p>
                    <p style={{ fontSize: '30px', fontWeight: 'bold', lineHeight: '1' }}>Social Media</p>
                </span>
            </Carousel>

            
        </div>
    );
}
