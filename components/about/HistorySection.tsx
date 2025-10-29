// import BodyText from "@/components/typography/BodyText";
// import GradientTitle from "@/components/typography/GradientTitle";

// const HistorySection = ({ title, description, bgImage, className }: { title: string; description: string; bgImage: string, className: string }) => {
//   const descriptions = description.split('<br>');

//   return (
//     <div className=" w-full md:px-40 px-10">

//       <div className={`lg:hidden w-full h-[260px] bg-cover bg-center ${className}`} style={{ backgroundImage: `url(${bgImage})` }} />

//       <div className="hidden lg:block container rounded-3xl overflow-hidden lg:min-h-[440px] bg-cover relative p-8" style={{ backgroundImage: `url(${bgImage})` }}>
//         <div className="bg-white lg:w-[560px] min-h-[370px] rounded-3xl p-6 ml-8 flex flex-col gap-4">
//           <GradientTitle text={title} theme="light" className="lg:text-[36px]" />
//           <div className="flex flex-col gap-4">
//             {descriptions.map((text, i) => (
//               <BodyText key={i} text={text.trim()} className="lg:text-[18px ] font-normal text-black" />
//             ))}
//           </div>
//         </div>
//       </div>

//       <div className="lg:hidden bg-white w-full p-6 flex flex-col gap-4 rounded-3xl mt-2">
//         <GradientTitle text={title} theme="light" className="text-[30px] text-left" />
//         <div className="flex flex-col gap-4">
//           {descriptions.map((text, i) => (
//             <BodyText key={i} text={text.trim()} className="text-[16px] font-normal text-black text-left" />
//           ))}
//         </div>
//       </div>

//     </div>
//   );
// };

// export default HistorySection;



import BodyText from "@/components/typography/BodyText";
import GradientTitle from "@/components/typography/GradientTitle";
import Image from "next/image";

const HistorySection = ({
  title,
  description,
  bgImage,
  className,
}: {
  title: string;
  description: string;
  bgImage: string;
  className?: string;
}) => {
  const descriptions = description.split("<br>");

  return (
    <div className="w-full md:px-40 px-6">
      {/* ===== Desktop View ===== */}
      <div
        className={`hidden lg:block rounded-3xl overflow-hidden lg:min-h-[440px] bg-cover relative p-8 ${className}`}
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="bg-white lg:w-[560px] min-h-[370px] rounded-3xl p-6 ml-8 flex flex-col gap-4">
          <GradientTitle text={title} theme="light" className="lg:text-[36px]" />
          <div className="flex flex-col gap-4">
            {descriptions.map((text, i) => (
              <BodyText
                key={i}
                text={text.trim()}
                className="lg:text-[18px] font-normal text-black"
              />
            ))}
          </div>
        </div>
      </div>

      {/* ===== Mobile View ===== */}
      <div className="lg:hidden bg-white w-full flex flex-col gap-4 rounded-3xl mt-2 overflow-hidden">
        {/* Image inside white box */}
        <div className="relative w-full h-[220px]  overflow-hidden mb-4">
          <Image
            src={bgImage}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw"
          />
        </div>

        <div className="px-6 pb-6">
          <GradientTitle
            text={title}
            theme="light"
            className="text-[30px] text-left"
          />

          <div className="flex flex-col gap-4 mt-4">
            {descriptions.map((text, i) => (
              <BodyText
                key={i}
                text={text.trim()}
                className="text-[16px] font-normal text-black text-left"
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default HistorySection;
