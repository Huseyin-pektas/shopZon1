import React from 'react'
import Slider from 'react-slick';
import image1 from "../../assets/images1.jpg"

const SliderComp = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay:true,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div>
            <Slider {...settings}>
                <div className='!flex items-center bg-gray-100 px-4 rounded-md'>
                    <div>
                        <div className='text-5xl font-bold '>
                            En kalıteli ayakkabı

                        </div>
                        <div className='my-4 text-lg '>Lorem ipsum dolor sit amet    consectetur adipisicing elit. Distinctio officiis voluptas ipsum assumenda id praesentium expedita maxime deserunt culpa in.

                        </div>
                        <div className='flex items-center justify-center w-40 h-12 mb-1 text-3xl bg-gray-200 border rounded-full cursor-pointer hover:bg-gray-300'>İncele

                        </div>
                    </div>
                    <img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b1bcbca4-e853-4df7-b329-5be3c61ee057/dunk-low-retro-ayakkab%C4%B1s%C4%B1-mhrtZC.png" style={{ width: 300, height: 300 }} />
                </div>
                <div className='!flex items-center bg-gray-100 px-4'>
                    <div>
                        <div className='text-5xl font-bold '>
                            En kalıteli ayakkabı

                        </div>
                        <div className='my-4 text-lg '>Lorem ipsum dolor sit amet    consectetur adipisicing elit. Distinctio officiis voluptas ipsum assumenda id praesentium expedita maxime deserunt culpa in.

                        </div>
                        <div className='flex items-center justify-center w-40 text-3xl bg-gray-200 border rounded-full cursor-pointer hover:bg-gray-300 h-14'>İncele

                        </div>
                    </div>
                    <img src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/9cfd9c6d-59cb-4dac-af4f-1552ddc58d36/dunk-low-retro-ayakkab%C4%B1s%C4%B1-mhrtZC.png" style={{ width: 300, height: 300 }} />
                </div>


            </Slider>
        </div>
    )
}

export default SliderComp