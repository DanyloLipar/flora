import Image from "next/image";
import fresh_flowers from "../assets/images/fresh-flowers.svg";
import client from "../assets/images/client.svg";
import delivery from "../assets/images/delivery.svg";
import bouquet from "../assets/images/bouquet.svg";

export const WhyUs = () => {
  return (
    <section
      id="why-us"
      className="my-[100px] max-w-[85%] mx-[auto] max-lg:max-w-[90%] max-md:my-[70px] max-sm:my-[50px]"
    >
      <h2 className="text-text-general text-[40px] font-semibold text-center max-sm:text-[30px] font-poppins">
        Чому саме ми?
      </h2>
      <ul className="flex justify-between gap-[20px] mt-[25px] max-sm:flex-col">
        <li className="flex-col flex-1 bg-header-bg px-[20px] py-[30px] rounded-[6px] max-lg:px-[18px] max-lg:py-[25px] max-sm:py-[35px]">
          <div className="flex flex-col items-center gap-[18px]">
            <Image
              src={fresh_flowers}
              alt="fresh flowers"
              width={70}
              height={70}
            />
            <p className="text-center font-manrope">
              Свіжі та якісні квіти з усього світу
            </p>
          </div>
        </li>
        <li className="flex-col flex-1 bg-header-bg px-[20px] py-[30px] rounded-[6px] max-lg:px-[18px] max-lg:py-[25px] max-sm:py-[35px]">
          <div className="flex flex-col items-center gap-[18px]">
            <Image src={bouquet} alt="bouquet" width={70} height={70} />
            <p className="text-center font-manrope">Кожен букет унікальний</p>
          </div>
        </li>
        <li className="flex-col flex-1 bg-header-bg px-[20px] py-[30px] rounded-[6px] max-lg:px-[18px] max-lg:py-[25px] max-sm:py-[35px]">
          <div className="flex flex-col items-center gap-[18px]">
            <Image src={delivery} alt="delivey" width={70} height={70} />
            <p className="text-center font-manrope">Доставка замовлень</p>
          </div>
        </li>
        <li className="flex-col flex-1 bg-header-bg px-[20px] py-[30px] rounded-[6px] max-lg:px-[18px] max-lg:py-[25px] max-sm:py-[35px]">
          <div className="flex flex-col items-center gap-[18px]">
            <Image src={client} alt="client" width={70} height={70} />
            <p className="text-center font-manrope">Турбота про клієнта</p>
          </div>
        </li>
      </ul>
    </section>
  );
};
