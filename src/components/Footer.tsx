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

export const Footer = () => {
  const [instagram, setInstagram] = useState<boolean>(false);
  const [facebook, setFacebook] = useState<boolean>(false);
  const [phone, setPhone] = useState<boolean>(false);
  const [location, setLocation] = useState<boolean>(false);

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
                className="flex gap-[12px] items-center text-button-txt hover:text-button-bg"
                href="https://www.instagram.com/flora_komarno/"
                onMouseEnter={() => setInstagram(true)}
                onMouseLeave={() => setInstagram(false)}
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
                className="flex gap-[8px] items-center text-button-txt hover:text-button-bg"
                href="https://www.facebook.com/Flora.Komarn/"
                onMouseEnter={() => setFacebook(true)}
                onMouseLeave={() => setFacebook(false)}
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
                className="flex gap-[10px] items-center text-button-txt hover:text-button-bg"
                href={`tel:+380679707448`}
                onMouseEnter={() => setPhone(true)}
                onMouseLeave={() => setPhone(false)}
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
                className="flex gap-[12px] items-center text-button-txt hover:text-button-bg"
                target="blank"
                href="https://maps.app.goo.gl/3gKScgitiTaMvr1e7"
                onMouseEnter={() => setLocation(true)}
                onMouseLeave={() => setLocation(false)}
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
                className="text-button-txt text-[18px] hover:text-button-bg max-md:text-[16px]"
              >
                Про нас
              </Link>
            </li>
            <li>
              <Link
                href="#why-us"
                className="text-button-txt text-[18px] hover:text-button-bg max-md:text-[16px]"
              >
                Чому саме ми?
              </Link>
            </li>
            <li>
              <Link
                href="#gallery"
                className="text-button-txt text-[18px] hover:text-button-bg max-md:text-[16px]"
              >
                Галерея
              </Link>
            </li>
            <li>
              <Link
                href="#reviews"
                className="text-button-txt text-[18px] hover:text-button-bg max-md:text-[16px]"
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
