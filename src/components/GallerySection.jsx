import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";

const GallerySection = () => {
  const photos = [
    {
      id: 1,
      src: "/images/photo_1.webp",
      alt: "Photo 1",
    },
    {
      id: 2,
      src: "/images/photo_2.webp",
      alt: "Photo 2",
    },
    {
      id: 3,
      src: "/images/photo_3.webp",
      alt: "Photo 3",
    },
    {
      id: 4,
      src: "/images/photo_4.webp",
      alt: "Photo 4",
    },
    {
      id: 5,
      src: "/images/photo_5.webp",
      alt: "Photo 5",
    },
    {
      id: 6,
      src: "/images/photo_6.webp",
      alt: "Photo 6",
    },
    {
      id: 7,
      src: "/images/photo_7.webp",
      alt: "Photo 7",
    },
    {
      id: 8,
      src: "/images/photo_8.webp",
      alt: "Photo 8",
    },
    {
      id: 9,
      src: "/images/photo_9.webp",
      alt: "Photo 9",
    },
    {
      id: 10,
      src: "/images/photo_10.webp",
      alt: "Photo 10",
    },
    {
      id: 11,
      src: "/images/photo_11.webp",
      alt: "Photo 11",
    },
    {
      id: 12,
      src: "/images/photo_12.webp",
      alt: "Photo 12",
    },
  ];

  return (
    <section>
      <h2 className="text-xl font-semibold text-left mb-3">Gallery</h2>
      <Swiper
        effect="cards"
        grabCursor={true}
        modules={[EffectCards]}
        className="w-60 h-80 my-8"
      >
        {photos.map((photo) => (
          <SwiperSlide
            key={photo.id}
            className="flex items-center justify-center rounded-lg"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default GallerySection; 