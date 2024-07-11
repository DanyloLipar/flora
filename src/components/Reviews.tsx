import Image from "next/image";
import review_1 from "../assets/images/reviews/review1.png";
import review_2 from "../assets/images/reviews/review2.png";
import review_3 from "../assets/images/reviews/review3.png";
import review_4 from "../assets/images/reviews/review4.png";
import review_5 from "../assets/images/reviews/review5.png";
import review_6 from "../assets/images/reviews/review6.png";

export const Reviews = () => {
  return (
    <section
      id="reviews"
      className="w-[85%] mx-[auto] mt-[100px] mb-[120px] max-lg:w-[90%] max-md:my-[70px] max-sm:mt-[50px]"
    >
      <h1 className="text-text-general text-[40px] font-semibold text-center max-sm:text-[30px] font-poppins">
        Відгуки
      </h1>
      <div className="flex flex-col gap-[30px] mt-[30px] max-w-[90%] mx-[auto]">
        <div className="flex justify-around max-sm:justify-between">
          <Image
            className="h-[27%] w-[27%] max-sm:h-[35%] max-sm:w-[35%]"
            src={review_2}
            alt="review_2"
            priority
          />
          <Image
            className="mt-[60px] h-[20%] w-[40%] max-sm:h-[30%] max-sm:w-[50%] max-sm:mt-[40px]"
            src={review_1}
            alt="review_1"
          />
        </div>
        <div className="flex justify-around max-sm:justify-between">
          <Image
            className="mt-[50px] h-[40%] w-[30%] max-sm:h-[50%] max-sm:w-[40%] max-sm:mt-[10px]"
            src={review_3}
            alt="review_3"
          />
          <Image
            className="w-[40%] h-[25%] max-sm:w-[50%]"
            src={review_6}
            alt="review_6"
          />
        </div>
        <div className="flex justify-around max-sm:justify-between">
          <Image
            className="mt-[60px] w-[30%] h-[40%] max-sm:mt-[0px] max-sm:w-[40%]"
            src={review_5}
            alt="review_5"
          />
          <Image
            className="mt-[70px] w-[40%] h-[40%] max-sm:mt-[0px] max-sm:w-[50%]"
            src={review_4}
            alt="review_4"
          />
        </div>
      </div>
    </section>
  );
};
