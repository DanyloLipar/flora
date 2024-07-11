"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";
import Link from "next/link";
import { imageData } from "@/data/data";
import { IImage } from "@/types/image";
import useMediaQuery from "@/hooks/useMediaQuery";

export const Gallery = () => {
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");

  return (
    <section id="gallery" className="flex flex-col gap-[25px] items-center">
      <h1 className="text-text-general text-[40px] font-semibold text-center max-sm:text-[30px] font-poppins">
        Галерея
      </h1>
      <div className="flex justify-center items-center">
        <Splide
          options={{
            type: "loop",
            perPage: 3,
            perMove: 1,
            autoplay: true,
            interval: 5000,
            pagination: true,
            arrows: true,
            width: isLargeScreen ? "85%" : "90%",
            gap: "1rem",
            focus: "center",
            breakpoints: {
              640: {
                perPage: 1,
              },
              768: {
                perPage: 2,
              },
              1024: {
                perPage: 3,
              },
            },
          }}
          aria-label="Flowers Carousel"
        >
          {imageData.map((img: IImage) => (
            <SplideSlide key={img.id}>
              <Image
                className="rounded-[8px] h-[20vw] max-lg:h-[auto] object-cover object-center object-top-[40px]"
                src={img.imageUrl}
                alt={`photo_${img.id}`}
                priority
              />
            </SplideSlide>
          ))}
        </Splide>
      </div>
      <Link
        target="blank"
        href="https://www.instagram.com/flora_komarno/"
        className="bg-button-bg text-button-txt p-[10px] rounded-[8px] box-border w-[150px] font-roboto"
      >
        Показати більше
      </Link>
    </section>
  );
};
