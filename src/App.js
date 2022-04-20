import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';

import 'swiper/css/bundle';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function App() {
  return (
    <div className='App'>
      <Swiper
        slidesPerView={1}
        autoHeight={true}
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 6000,                 // mini second
          disableOnInteraction: false, // true: disable autoplay
        }}
        pagination={{
          clickable: true,             // page dot can click ?
        }}
        navigation={true}              // page arrow show ?
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper'>
        <SwiperSlide>
          <img src={'https://thumbs.gfycat.com/SpeedyNaiveHeron-size_restricted.gif'} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={'https://thumbs.gfycat.com/TastyBrokenArachnid-max-1mb.gif'} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={'https://64.media.tumblr.com/142c26f66433f5aec8aa8bc94855cde8/a6cdc8956646f826-f2/s500x750/f5372dae479ba3c3c301551aa37dcb3f83e2b0f9.gifv'} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={'https://64.media.tumblr.com/6357aa8fdede8c772932812b0c89b4c3/tumblr_phgovnSK4J1vbdodoo1_500.gifv'} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={'https://64.media.tumblr.com/b0764381d0fe8d9ece2902da6bcec63a/tumblr_plpo7aCNks1x7wr08o1_500.gifv'} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default App;
