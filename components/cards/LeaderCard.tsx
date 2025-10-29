import ImageContainer from "@/components/common/ImageContainer"
import BodyText from "@/components/typography/BodyText";
import HeadingText from "@/components/typography/HeadingText"

interface LeaderCardProps {
  image: string,
  title: string,
  designation: string,
  description?: string,
  direction: "row" | "col",
  theme: "dark" | "light",
}

const LeaderCard = ({ image, title, designation, description, direction, theme }: LeaderCardProps) => {
  const textColor = theme === "dark" ? "text-white" : "text-black";
  const designationColor = theme === "dark" ? "text-[#CDCDCD]" : "text-[#7F7F7F]";
  const isColumn = direction === "col";

  return (
    <div
      className={`w-full h-full bg-[#F2F2F2] md:bg-white pt-10 md:pt-0 rounded-3xl  grid relative items-center justify-baseline ${isColumn ? "grid-cols-1 max-w-[304px] h-auto gap-4" : "grid-cols-1 lg:grid-cols-3"
        }`}
    >
      <div
        className={`relative bg-[#F2F2F2] lg:flex hidden  rounded-3xl overflow-hidden h-[50vh] min-h-[240px] lg:h-[340px] w-full shrink-0' ${isColumn ? "w-full h-auto" : "lg:w-full lg:h-full shrink-0"
          }`}
      >
        <ImageContainer
          src={image}
          alt={title}
          className="object-cover w-full h-auto"
        />
      </div>

      {isColumn && (
        <div className="w-full flex flex-col items-center text-center gap-2 p-2">
          <HeadingText
            text={title}
            className={`text-[20px] ${textColor}`}
          />
          <BodyText
            text={designation}
            className={`text-[14px] ${designationColor}`}
          />
        </div>
      )}

      {!isColumn && (
        <div className="col-span-2 px-6 flex flex-col gap-2">
          <HeadingText
            text={title}
            className={`text-[24px] lg:text-[26px] lg:text-left text-center ${textColor}`}
          />
          <BodyText
            text={designation}
            className={`text-[16px] lg:text-[20px] lg:text-left text-center md:mt-[-10px] ${designationColor}`}
          />
          <BodyText
            text={description || ""}
            className={`text-[17px] lg:text-[16px] lg:text-left text-center md:mt-3 ${textColor}`}
            lineClamp={4}
          />
        </div>
      )}

      <div
        className={`relative flex lg:hidden mt-6 rounded-3xl overflow-hidden h-[50vh] min-h-[240px] lg:h-[340px] w-full shrink-0' ${isColumn ? "w-full h-auto" : "lg:w-full lg:h-full shrink-0"
          }`}
      >
        <ImageContainer
          src={image}
          alt={title}
          className="object-cover w-full h-auto"
        />
      </div>
    </div>
  );
};

export default LeaderCard;