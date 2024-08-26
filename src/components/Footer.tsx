"use client";

import Link from "next/link";
import instagramIcon from "../assets/images/instagram.svg";
import instagramIconHovered from "../assets/images/instagram-hovered.svg";
import facebookIcon from "../assets/images/facebook.svg";
import facebookIconHovered from "../assets/images/facebook-hovered.svg";
import phoneIcon from "../assets/images/phone.svg";
import phoneIconHovered from "../assets/images/phone-hovered.svg";
import locationIcon from "../assets/images/location.svg";
import locationIconHovered from "../assets/images/location-hovered.svg";
import Image from "next/image";
import { useState } from "react";

enum PlatformsVariant {
  INSTAGRAM = "Instagram",
  FACEBOOK = "Facebook",
  PHONE = "Phone",
  LOCATION = "Location",
}

export const Footer = () => {
  const [instagram, setInstagram] = useState<boolean>(false);
  const [facebook, setFacebook] = useState<boolean>(false);
  const [phone, setPhone] = useState<boolean>(false);
  const [location, setLocation] = useState<boolean>(false);

  const switchLogoColor = (platform: string) => {
    if (window.matchMedia("(max-width: 1024px)").matches) {
      return;
    }

    switch (platform) {
      case PlatformsVariant.INSTAGRAM:
        setInstagram(!instagram);
        break;
      case PlatformsVariant.FACEBOOK:
        setFacebook(!facebook);
        break;
      case PlatformsVariant.PHONE:
        setPhone(!phone);
        break;
      case PlatformsVariant.LOCATION:
        setLocation(!location);
        break;
      default:
        break;
    }
  };

  return (
    <footer id="contacts" className="bg-footer-bg py-[30px]">
      <section className="max-w-[85%] mx-[auto] max-lg:max-w-[90%] font-manrope">
        <h1 className="text-button-bg font-bold text-[28px] max-sm:text-center">
          Flora <span className="text-title-secondary">Komarno</span>
        </h1>
        <div className="flex gap-[45px]">
          <ul className="flex flex-col items-start gap-[10px] mt-[20px]">
            <li className="ml-[3px]">
              <Link
                className="flex gap-[12px] items-center text-button-txt lg:hover:text-button-bg"
                href="https://www.instagram.com/flora_komarno/"
                onMouseEnter={() => switchLogoColor(PlatformsVariant.INSTAGRAM)}
                onMouseLeave={() => switchLogoColor(PlatformsVariant.INSTAGRAM)}
              >
                <Image
                  src={instagram ? instagramIconHovered : instagramIcon}
                  alt="Instagram"
                  className="h-[20px] w-[20px] max-md:w-[18px] max-md:h-[18px]"
                />
                <p className="text-[18px] max-md:text-[16px]">Instagram</p>
              </Link>
            </li>
            <li>
              <Link
                className="flex gap-[8px] items-center text-button-txt lg:hover:text-button-bg"
                href="https://www.facebook.com/Flora.Komarn/"
                onMouseEnter={() => switchLogoColor(PlatformsVariant.FACEBOOK)}
                onMouseLeave={() => switchLogoColor(PlatformsVariant.FACEBOOK)}
              >
                <Image
                  src={facebook ? facebookIconHovered : facebookIcon}
                  alt="Facebook"
                  className="h-[25px] w-[25px]"
                />
                <p className="text-[18px] max-md:text-[16px]">Facebook</p>
              </Link>
            </li>
            <li className="ml-[3px] max-md:ml-[5px]">
              <a
                className="flex gap-[10px] items-center text-button-txt lg:hover:text-button-bg"
                href={`tel:+380679707448`}
                onMouseEnter={() => switchLogoColor(PlatformsVariant.PHONE)}
                onMouseLeave={() => switchLogoColor(PlatformsVariant.PHONE)}
              >
                <Image
                  className="h-[21px] w-[20px]"
                  src={phone ? phoneIconHovered : phoneIcon}
                  alt="Phone number"
                />
                <p className="text-[18px] max-md:text-[16px]">{`+38 (067) 9707448`}</p>
              </a>
            </li>
            <li>
              <Link
                className="flex gap-[12px] items-center text-button-txt lg:hover:text-button-bg"
                target="blank"
                href="https://maps.app.goo.gl/3gKScgitiTaMvr1e7"
                onMouseEnter={() => switchLogoColor(PlatformsVariant.LOCATION)}
                onMouseLeave={() => switchLogoColor(PlatformsVariant.LOCATION)}
              >
                <Image
                  src={location ? locationIconHovered : locationIcon}
                  alt="Location"
                  className="h-[23px] w-[23px]"
                />
                <p className="max-w-[300px] text-[18px] max-md:text-[16px]">
                  вул. Січових Стрільців 12, Комарно, Львівська область, Україна
                </p>
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col gap-[10px] mt-[15px] max-lg:mt-[20px]">
            <li>
              <Link
                href="#about"
                className="text-button-txt text-[18px] lg:hover:text-button-bg max-md:text-[16px]"
              >
                Про нас
              </Link>
            </li>
            <li>
              <Link
                href="#why-us"
                className="text-button-txt text-[18px] lg:hover:text-button-bg max-md:text-[16px]"
              >
                Чому саме ми?
              </Link>
            </li>
            <li>
              <Link
                href="#gallery"
                className="text-button-txt text-[18px] lg:hover:text-button-bg max-md:text-[16px]"
              >
                Галерея
              </Link>
            </li>
            <li>
              <Link
                href="#reviews"
                className="text-button-txt text-[18px] lg:hover:text-button-bg max-md:text-[16px]"
              >
                Відгуки
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <p className="text-button-txt mt-[40px] text-center max-md:text-[12px]">
        Flora Komarno © 2024 Всі права захищені
      </p>
    </footer>
  );
};
