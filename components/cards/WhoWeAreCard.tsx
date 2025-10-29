import BodyText from "@/components/typography/BodyText";
import GradientTitle from "@/components/typography/GradientTitle";
import Image from "next/image";

interface IconCardProps {
  title: string;
  description: string;
  theme: "dark" | "light";
  icon: string;
  className?: string;
}

const IconCard = ({ icon, title, description, className, theme }: IconCardProps) => {
  return (
    <div className={`w-full p-6 border border-[#303030] rounded-md bg-[#191919] flex flex-col gap-2 ${className}`}>
      <div className="flex items-center gap-3">
        <Image
          src={icon || ""}
          alt={title}
          height={24}
          width={24}
          className="md:h-6 md:w-6 h-10 w-10 object-contain"
          loading="lazy"
        />
        <GradientTitle
          text={title}
          theme={theme}
          className="text-[24px] text-base text-white text-start"
        />
      </div>
      <BodyText
        text={description}
        theme={theme}
        className="text-white text-[18px] text-left leading-relaxed mt-1"
      />
    </div>
  );
};

export default IconCard;