// components/FashionSlider.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import Link from 'next/link';

const BoxSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000, // Scroll within 2 seconds
        slidesToShow: window.innerWidth >= 1024 ? 4 : window.innerWidth >= 640 ? 2 : 1,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const ImageData = [
        "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/g/t/u/-original-imagxhd5xtjuwnqz.jpeg?q=70",
        "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/y/s/l/-original-imagtnqjjuc6dh6v.jpeg?q=70",
        "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/u/q/f/-original-imagtyw2vfzzwzgs.jpeg?q=70",
        "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/r/i/i/-original-imagwyhjupspqhhp.jpeg?q=70",
        "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/p/j/k/2xl-hm-st01-st06-metronaut-original-imagy2pkyy6bv33g.jpeg?q=70",
        "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/v/g/u/s-r-stbrg-stoneberg-original-imaghf7mfydfgfxg.jpeg?q=70",
        "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/t/d/9/xs-grey-101-yellow-freluro-original-imagc26vffprrbdu-bb.jpeg?q=70",
        "https://rukminim2.flixcart.com/image/612/612/xif0q/trouser/c/v/m/34-el-p-cot-el-cielo-original-imaggu7jtfyrv5sc.jpeg?q=70",
        "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/o/u/n/5-890-wt-deals4you-multicolor-original-imagm2a2rusxeuud.jpeg?q=70",
        "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/8/r/t/5-779-womn-t-rock-multicolor-original-imag7zs5yh3crtzz-bb.jpeg?q=70",
        "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/t/b/w/-original-imaggygyqr9hfwjd-bb.jpeg?q=70",
        "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/i/8/c/-original-imagfxf9phhzxech-bb.jpeg?q=70",
        "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/t/3/n/3-875-mlt-3-deals4you-multi-original-imagg27xn9hnxw6h.jpeg?q=70",
        "https://rukminim2.flixcart.com/image/612/612/xif0q/ball/6/8/d/300-storm-football-size-5-5-20-1-1-football-nivia-original-imaggurhz3jukjd3.jpeg?q=70",
        "https://rukminim2.flixcart.com/image/612/612/l2f20sw0/skate/q/s/m/7-10-inline-skating-shoes-adjustable-size-led-wheels-skates-for-original-imagdr8kgas4w4n8.jpeg?q=70",
        "https://rukminim2.flixcart.com/image/612/612/ksgehzk0/board/g/o/i/carrom-board-for-kids-26-inch-medium-size-glossy-finish-coins-original-imag6ynmdfshzngx.jpeg?q=70",
        "https://rukminim2.flixcart.com/image/612/612/l4rd0280/bicycle-lock/i/i/h/1-12-bike-lock-cable-bike-locks-with-complimentary-mounting-original-imagfh9mjz6fe9d3.jpeg?q=70",
        "https://rukminim2.flixcart.com/image/612/612/xif0q/boxing-hand-wrap/r/v/i/110-india-professional-weight-lifting-stretchable-cotton-1-pair-original-imagnnbefc7jjkhm.jpeg?q=70"
    ]

    return (
        <div className=''>
            <Slider {...settings}>
                {/* Your slider content goes here */}
                {
                    ImageData.map((card, index) => {

                        return (
                             <Link
                               href={
                                 index >= 3
                                   ? "/mobiles"
                                   : index >= 7
                                   ? "/menwear"
                                   : index >= 11
                                   ? "/shoes"
                                   : "/sports"
                               }
                             > 
                                <div className="p-4 transition-transform  hover:scale-110 h-80 shadow-md ">
                                    <img src={card} alt="Slider-Image" className='h-full object-contain'/>
                                    <div>{index}</div>
                                </div>
                            </Link>
                        )
                    })
                }

                {/* Add more slides as needed */}
            </Slider>

        </div>
    );
};

export default BoxSlider;





