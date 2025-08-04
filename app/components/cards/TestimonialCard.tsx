import RatingStars from "@/app/components/buttons/RatingStars";
import ImageContainer from "@/app/components/common/ImageContainer";
import BodyText from "@/app/components/typography/BodyText";
import HeadingText from "@/app/components/typography/HeadingText";
import { TestimonialCardProps } from "@/types/PropsTypes";

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  rating,
  userName,
  userDesignation,
  userImage,
  testimonialMessage,
}) => {
  return (
    <div
      className={`bg-[#F2F4F5] lg:min-w-[370px] lg:min-h-[250px] lg:shrink-0 p-6 rounded-[25px] flex flex-col gap-4 justify-start max-w-[370px] lg:max-w-max`}
    >
      <div className="flex flex-col gap-4">
        <RatingStars rating={rating} />

        <div className="flex items-center gap-4">
          <div className="flex relative">
            <ImageContainer
              src={userImage}
              alt={userName || "Testimonial Image"}
              height={64}
              width={64}
              className="rounded-full h-14 w-14 object-cover"
            />
          </div>
          <div className="flex flex-col">
            <HeadingText
              text={userName}
              color="#000"
              className="lg:text-[18px]"
            />
            <BodyText
              text={userDesignation}
              color="#2A2A2A"
              className="lg:text-[14px]"
            />
          </div>
        </div>
      </div>

      <div className="">
        <BodyText text={testimonialMessage} color="#2A2A2A" lineClamp={5} />
      </div>
    </div>
  );
};

export default TestimonialCard;
