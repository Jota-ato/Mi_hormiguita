// Importar los componentes de Swiper React
import { Swiper, SwiperSlide } from 'swiper/react';

// Importar los módulos necesarios
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// IMPORTANTE: Importar los estilos (esto es lo que te daba error)
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function MySlider() {
  return (
    <div style={{ width: '100%', height: '300px' }}>
      <Swiper
        // Instalar módulos
        loop={true}
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}       // Espacio entre diapositivas
        slidesPerView={1}       // Cuántas imágenes ver a la vez
        navigation              // Habilita flechas
        pagination={{ clickable: true }} // Habilita puntitos abajo
        autoplay={{ delay: 2500 }}       // Cambio automático
        onSlideChange={() => console.log('Cambió el slide')}
      >
        <SwiperSlide>
          <img src="./public/IMG_20240524_181856.jpg" alt="Slide 1" style={{ width: '100%' }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://via.placeholder.com/800x300" alt="Slide 2" style={{ width: '100%' }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://via.placeholder.com/800x300" alt="Slide 3" style={{ width: '100%' }} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}