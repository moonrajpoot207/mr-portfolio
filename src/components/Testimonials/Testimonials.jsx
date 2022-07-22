import React from 'react';
import '../Testimonials/Testimonials.css'
import AVATAR1 from '../../assets/avatar1.jpg'
import AVATAR2 from '../../assets/avatar2.jpg'
import AVATAR3 from '../../assets/avatar3.jpg'
import AVATAR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
    {
        avatar: AVATAR1,
        name: "Tina Snow",
        review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, animi, placeat iste consequuntur aut saepe eum enim optio facere soluta qui! Vero excepturi beatae voluptatem ipsum quae! Alias, enim voluptates!"
    },
    {
        avatar: AVATAR2,
        name: "Shatta Wale",
        review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, animi, placeat iste consequuntur aut saepe eum enim optio facere soluta qui! Vero excepturi beatae voluptatem ipsum quae! Alias, enim voluptates!"
    },
    {
        avatar: AVATAR3,
        name: "Bella Hesha",
        review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, animi, placeat iste consequuntur aut saepe eum enim optio facere soluta qui! Vero excepturi beatae voluptatem ipsum quae! Alias, enim voluptates!"
    },
    {
        avatar: AVATAR4,
        name: "Hishi Cobra",
        review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, animi, placeat iste consequuntur aut saepe eum enim optio facere soluta qui! Vero excepturi beatae voluptatem ipsum quae! Alias, enim voluptates!"
    }
]

const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>
            <Swiper className="container testimonials__container"
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}
            >
                {
                    data.map(({ avatar, name, review }, index) => {
                        return (
                            <SwiperSlide key={index} className="testimonials">
                                <div className="client__avatar">
                                    <img src={avatar} alt="" />
                                </div>
                                <h5 className='client__name'>{name}</h5>
                                <small className='client__reivew'>{review}</small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}
export default Testimonials