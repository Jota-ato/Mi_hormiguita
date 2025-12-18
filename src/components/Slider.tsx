import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function MySlider() {
  const photos = [
    "IMG-20250115-WA0001.jpg",
    "IMG-20250211-WA0005.jpg",
    "IMG-20250518-WA0019.jpg",
    "IMG-20250711-WA0012.jpg",
    "IMG-20250823-WA0007.jpg",
    "IMG_20240524_181856.jpg",
    "IMG_20250208_195806.jpg",
    "IMG_20250409_102726.jpg",
    "IMG_20250711_152523.jpg",
    "IMG_20250919_132817.jpg",
    "IMG_20251122_155028.jpg",
    "IMG_20251210_093038.jpg" 
  ];

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