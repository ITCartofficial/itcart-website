// // import LinkButton from "@/components/atoms/buttons/LinkButton";
// import FillLogoBadge from "@/components/common/FillLogoBadge";
// import BodyText from "@/components/typography/BodyText";
// import GradientTitle from "@/components/typography/GradientTitle";
// import { IconInfoCardProps } from "@/types/PropsTypes";

// const IconInfoCard: React.FC<IconInfoCardProps> = ({
//   bgImage,
//   title,
//   description,
//   logo,
//   logoBg,
// }) => {
//   return (
//     <div
//       className="w-[300px] lg:w-[350px] h-[400px] lg:h-[460px] rounded-[40px] overflow-hidden bg-center bg-no-repeat bg-cover"
//       style={{ backgroundImage: `url(${bgImage})` }}
//     >
//       <div
//         className="wrapper flex flex-col gap-4 justify-end p-6 w-full h-full relative"
//         style={{
//           background:
//             "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 85%)",
//         }}
//       >
//         <FillLogoBadge
//           bgColor={logoBg}
//           logo={logo}
//           className="absolute top-6 left-6"
//         />
//         <GradientTitle
//           text={title}
//           className="text-[24px] lg:text-[30px]"
//           theme="dark"
//         />
//         <BodyText
//           text={description}
//           lineClamp={4}
//           className="text-base"
//           color="#ffffff"
//         />
//         {/* <LinkButton text="Learn More" url={buttonUrl} className="lg:text-[20px]" textColor="#ffffff" /> */}
//       </div>
//     </div>
//   );
// };

// export default IconInfoCard;



import FillLogoBadge from "@/components/common/FillLogoBadge";
import BodyText from "@/components/typography/BodyText";
import GradientTitle from "@/components/typography/GradientTitle";
import { IconInfoCardProps } from "@/types/PropsTypes";
import LinkButton from "../buttons/LinkButton";

const IconInfoCard: React.FC<IconInfoCardProps> = ({
  bgImage,
  title,
  description,
  logo,
  logoBg,
  // buttonUrl
}) => {


  return (
    <a href={`our-verticals/${title}`}>
      <div
        className="w-full h-[400px] lg:w-[350px] lg:h-[460px] rounded-[25px] overflow-hidden bg-center cursor-pointer bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div
          className="wrapper flex flex-col gap-2 sm:gap-3 lg:gap-4 justify-end p-4 sm:p-5 lg:p-6 w-full h-full relative"
          style={{ background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000000df 85%)' }}
        >
          <FillLogoBadge
            bgColor={logoBg}
            logo={logo}
            className="absolute top-3 left-3 sm:top-4 sm:left-4 lg:top-6 lg:left-6 scale-75 sm:scale-90 lg:scale-100"
          />
          <GradientTitle
            text={title}
            className="text-[20px] sm:text-[25px] lg:text-[30px] leading-tight"
            theme="dark"
          />
          <BodyText
            text={description}
            lineClamp={6}
            className="text-[12px] md:text-[14px]  hidden sm:block"
            color="#ffffff"
          />
          <LinkButton url={`our-verticals/${title}`} text="Read Case Study" textColor='#ffffff' />
        </div>
      </div>
    </a >
  );
};

export default IconInfoCard;