import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { photos } from '../db/photos';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function MySlider() {

  return (
    <div className="w-full max-w-4xl mx-auto h-125"> 
      <Swiper
        loop={true}
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        className="h-full rounded-2xl shadow-xl"
      >
        {photos.map((photo, index) => (
          <SwiperSlide key={index}>
            <img 
              src={`/${photo}`}
              alt={`Foto hormiguita ${index + 1}`} 
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}