import ImageContainer from "@/components/atoms/common/ImageContainer"
import { Ambassador, Theme } from "@/types/PropsTypes"
import StatCounter from "../common/StatCounter"
import HeadingText from "@/components/atoms/typography/HeadingText"
import BodyText from "@/components/atoms/typography/BodyText"
import LinkButton from "@/components/atoms/buttons/LinkButton"

const InformaticImageCard = ({ user, theme }: { user: Ambassador, theme: Theme }) => {
  const textColor = theme == "dark" ? "text-white" : "text-black";
  const designationColor = theme == "dark" ? "text-[#CDCDCD]" : "text-[#7F7F7F]";

  return (
    <div className="flex flex-col lg:flex-col gap-4 items-center lg:items-start">
      {/* Image Section */}
      <div className="relative w-full h-[408px] sm:h-[408px] sm:w-[339px] lg:w-[280px] lg:h-[372px]">
        <ImageContainer
          src={user.image}
          alt={user.title}
          className="z-10 rounded-2xl w-full h-auto lg:h-full object-cover"
        />

        {/* Stat Panel (only on large screen) */}
        <div className="hidden lg:flex flex-col gap-4 bg-[#242424] absolute lg:w-36 pl-8 pr-4 py-6 rounded-tr-2xl rounded-br-2xl bottom-0 -right-32">
          {user.matrics.map((matric, i) => (
            <StatCounter
              key={i}
              end={matric.numericValue}
              suffix="+"
              theme={theme}
              label={matric.title}
            />
          ))}
        </div>
      </div>

      {/* Text & Button Section */}
      <div className="w-full flex flex-col items-center text-center lg:items-start lg:text-left gap-1 p-2">
        <HeadingText
          text={user.title}
          className={`text-[20px] lg:text-2xl ${textColor}`}
        />
        <BodyText
          text={user.designation}
          className={`text-[14px] lg:text-[18px] ${designationColor}`}
        />
        <LinkButton
          text="Know More"
          theme={theme}
          className={`mt-3 ${textColor}`}
          url={user.profileRef}
        />
      </div>
    </div>
  );
};

export default InformaticImageCard;