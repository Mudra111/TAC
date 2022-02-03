import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./slicker.css"

export default class CenterMode extends Component {
    render() {
        var settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div className="main-slider">
                <Slider {...settings}>
                    <div  style={{width:'100%',}}>
                        <div className='sub-block sb-1'>
                            <p>Build your brand</p>
                            <p style={{ fontSize: '30px', fontWeight: 'bold', lineHeight: '1' }}>Logo design</p>
                        </div>
                    </div>
                    <div>
                        <div className='sub-block sb-2'>
                            <p>Customize your size</p>
                            <p style={{ fontSize: '30px', fontWeight: 'bold', lineHeight: '1' }}>WordPress</p>
                        </div>
                    </div>
                    <div>
                        <div className='sub-block sb-3'>
                            <p>Share your message</p>
                            <p style={{ fontSize: '30px', fontWeight: 'bold', lineHeight: '1' }}>Voice Over</p>
                        </div>
                    </div>
                    <div>
                        <div className='sub-block sb-4'>
                            <p>Engage your audience</p>
                            <p style={{ fontSize: '30px', fontWeight: 'bold', lineHeight: '1' }}>Video Explainer</p>
                        </div>
                    </div>
                    <div>
                        <div className='sub-block sb-5'>
                            <p>Reach your customers</p>
                            <p style={{ fontSize: '30px', fontWeight: 'bold', lineHeight: '1' }}>Social Media</p>
                        </div>
                    </div>
                    <div>
                        <div className='sub-block sb-1'>
                            <p>Build your brand</p>
                            <p style={{ fontSize: '30px', fontWeight: 'bold', lineHeight: '1' }}>Logo design</p>
                        </div>
                    </div>
                    <div>
                        <div className='sub-block sb-2'>
                            <p>Customize your size</p>
                            <p style={{ fontSize: '30px', fontWeight: 'bold', lineHeight: '1' }}>WordPress</p>
                        </div>
                    </div>
                    <div>
                        <div className='sub-block sb-3'>
                            <p>Share your message</p>
                            <p style={{ fontSize: '30px', fontWeight: 'bold', lineHeight: '1' }}>Voice Over</p>
                        </div>
                    </div>
                    <div>
                        <div className='sub-block sb-4'>
                            <p>Engage your audience</p>
                            <p style={{ fontSize: '30px', fontWeight: 'bold', lineHeight: '1' }}>Video Explainer</p>
                        </div>
                    </div>
                    <div>
                        <div className='sub-block sb-5'>
                            <p>Reach your customers</p>
                            <p style={{ fontSize: '30px', fontWeight: 'bold', lineHeight: '1' }}>Social Media</p>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}