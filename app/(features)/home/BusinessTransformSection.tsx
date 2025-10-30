// import OutlineBtn from '@/components/buttons/OutlineBtn';
// // import BodyText from '@/components/typography/BodyText';
// // import GradientTitle from '@/components/typography/GradientTitle';
// import { FaArrowRight } from 'react-icons/fa6';


// interface BusinessTransformSectionProps {
//   title?: string;
//   description?: string;
//   subDescription?: string;
//   buttonText?: string;
// }

// const BusinessTransformSection: React.FC<BusinessTransformSectionProps> = ({
//   title = "Ready to Transform Your Business?",
//   description = "Experience artificially intelligent transformation first-hand and accelerate growth with AI today.",
//   subDescription = "Let iTCart guide your journey from outdated workflows to intelligent automation, hyper-efficient processes, and AI-driven scalability.",
//   buttonText = "Get Started"
// }) => {
//   return (
//     <section
//       className="relative w-full h-[400px] md:h-[550px] 
//   bg-[url('/images/home/blue-spiral-lines-2.png')]
//   bg-contain bg-no-repeat md:bg-right bg-bottom "
//     >
//       {/* ✅ Overlay to reduce background opacity */}
//       <div className="absolute inset-0 md:bg-black/40 bg-black/60"></div>

//       {/* ✅ Actual content goes here */}
//       <div className="relative z-10 pl-6 md:pl-12 lg:pl-24 container ">
//         <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 items-center md:py-8">
//           <div className="flex flex-col gap-6 items-center md:items-start md:ml-20">
//             <h2 className="text-white text-[30px] lg:text-[50px] font-bold text-center md:text-left">
//               {title}
//             </h2>
//             <p className="text-white opacity-90 max-w-lg text-center md:text-left">
//               {description}
//             </p>
//             <p className="text-white opacity-90 max-w-lg text-center md:text-left">
//               {subDescription}
//             </p>
//             <div className="">
//               <OutlineBtn
//                 text={buttonText}
//                 textColor="#FFFFFF"
//                 icon={<FaArrowRight size={16} color="#FFFFFF" />}
//                 url='/contact-us'
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>

//   );
// };

// export default BusinessTransformSection;



import OutlineBtn from '@/components/buttons/OutlineBtn';
import { FaArrowRight } from 'react-icons/fa6';

interface BusinessTransformSectionProps {
  title?: string;
  description?: string;
  subDescription?: string;
  buttonText?: string;
}

const BusinessTransformSection: React.FC<BusinessTransformSectionProps> = ({
  title = "Ready to Transform Your Business?",
  description = "Experience artificially intelligent transformation first-hand and accelerate growth with AI today.",
  subDescription = "Let iTCart guide your journey from outdated workflows to intelligent automation, hyper-efficient processes, and AI-driven scalability.",
  buttonText = "Get Started"
}) => {
  return (
    <section
      className="
        relative w-full 
        h-auto min-h-[400px] md:min-h-[550px] 
        bg-[url('/images/home/blue-spiral-lines-2.png')]
        bg-no-repeat bg-bottom md:bg-right bg-contain
        flex items-center px-4 sm:px-6 md:px-8 lg:px-10
      "
    >
      {/* ✅ Dark overlay */}
      <div className="absolute inset-0 bg-black/60 md:bg-black/40"></div>

      {/* ✅ Content container */}
      <div className="relative z-10 w-full px-5 sm:px-8 md:px-12  py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Left content */}
          <div className="flex flex-col gap-5 md:gap-6 items-center md:items-start text-center md:text-left">
            <h2 className="text-white font-bold text-[26px] sm:text-[32px] md:text-[48px] lg:text-[48px] leading-tight hover:cursor-default">
              {title}
            </h2>

            <p className="text-white opacity-90 text-[15px] sm:text-[16px] md:text-[17px] max-w-lg hover:cursor-default">
              {description}
            </p>

            <p className="text-white opacity-90 text-[15px] sm:text-[16px] md:text-[17px] max-w-lg hover:cursor-default" >
              {subDescription}
            </p>

            <div className="mt-3 md:mt-5">
              <OutlineBtn
                text={buttonText}
                textColor="#FFFFFF"
                icon={<FaArrowRight size={16} color="#FFFFFF" />}
                url="/contact-us"
              />
            </div>
          </div>

          {/* ✅ Optional right empty space (for layout balance on large screens) */}
          <div className="hidden md:block"></div>
        </div>
      </div>
    </section>
  );
};

export default BusinessTransformSection;


