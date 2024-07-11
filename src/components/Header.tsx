"use client";

import Image from "next/image";
import tulips from "../assets/images/flowers-bg.svg";
import Link from "next/link";
import { BurgerMenu } from "./BurgerMenu";

export const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="flex-col bg-header-bg">
      <section className="flex justify-between items-center max-w-[85%] mx-[auto] pt-[30px] max-lg:max-w-[90%] max-md:pt-[20px]">
        <h1 className="text-[30px] font-semibold text-button-bg max-lg:text-[27px] max-md:text-[25px] font-manrope max-md:tracking-wider">
          Flora{" "}
          <span className="text-title-secondary text-stroke">Komarno</span>
        </h1>
        <nav className="flex items-center max-md:hidden">
          <ul className="flex items-center gap-[25px] max-lg:gap-[20px]">
            <li>
              <Link href="#about" passHref>
                <span onClick={() => scrollToSection("about")}>Про нас</span>
              </Link>
            </li>
            <li>
              <Link href="#gallery" passHref>
                <span onClick={() => scrollToSection("gallery")}>Галерея</span>
              </Link>
            </li>
            <li>
              <Link href="#why-us" passHref>
                <span onClick={() => scrollToSection("why-us")}>
                  Чому саме ми?
                </span>
              </Link>
            </li>
            <li>
              <Link href="#reviews" passHref>
                <span onClick={() => scrollToSection("reviews")}>Відгуки</span>
              </Link>
            </li>
            <li>
              <Link href="#contacts" passHref>
                <span onClick={() => scrollToSection("contacts")}>
                  Контакти
                </span>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="hidden max-md:block">
          <BurgerMenu />
        </div>
      </section>
      <section className="flex justify-between mt-[80px] max-w-[85%] mx-[auto] max-lg:relative max-lg:max-w-[90%] max-lg:mt-[60px]">
        <div className="mt-[50px] w-[60%] max-lg:mt-[0px] max-lg:mb-[50px] max-mobile:w-[100%]">
          <h1 className="text-text-general text-[60px] leading-[1] w-[507px] font-inter box-border max-lg:text-[50px] max-md:text-[40px] max-sm:w-[340px] max-mobile:w-[100%]">
            Квіти для кожного моменту життя
          </h1>
          <p className="text-text-second mt-[18px] ml-[5px] max-md:max-w-[300px] max-mobile:w-[55%] font-manrope">
            Обирайте ідеальні квіти для ваших особливих подій у Flora Komarno.
          </p>
          <div className="flex items-center justify-center bg-button-bg text-button-txt p-[10px] rounded-[8px] mt-[30px] box-border ml-[5px] w-[140px]">
            <a href="tel:+380679707448">Замовити букет</a>
          </div>
        </div>
        <div className="max-lg:absolute right-4 max-lg:bottom-0 max-sm:-right-4 max-sm:w-[40%]">
          <Image
            className="w-[390px] max-lg:w-[240px] max-sm:w-[90vw] "
            src={tulips}
            alt="тюльпани"
          />
        </div>
      </section>
    </header>
  );
};
