import OutlineBtn from '@/components/buttons/OutlineBtn';
// import BodyText from '@/components/typography/BodyText';
// import GradientTitle from '@/components/typography/GradientTitle';
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
      className="relative w-full h-[400px] md:h-[550px] 
  bg-[url('/images/home/blue-spiral-lines-2.png')]
  bg-contain bg-no-repeat md:bg-right bg-bottom "
    >
      {/* ✅ Overlay to reduce background opacity */}
      <div className="absolute inset-0 md:bg-black/40 bg-black/60"></div>

      {/* ✅ Actual content goes here */}
      <div className="relative z-10 pl-6 md:pl-12 lg:pl-24 container ">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 items-center md:py-8">
          <div className="flex flex-col gap-6 items-center md:items-start md:ml-20">
            <h2 className="text-white text-[30px] lg:text-[50px] font-bold text-center md:text-left">
              {title}
            </h2>
            <p className="text-white opacity-90 max-w-lg text-center md:text-left">
              {description}
            </p>
            <p className="text-white opacity-90 max-w-lg text-center md:text-left">
              {subDescription}
            </p>
            <div className="">
              <OutlineBtn
                text={buttonText}
                textColor="#FFFFFF"
                icon={<FaArrowRight size={16} color="#FFFFFF" />}
                url='/contact-us'
              />
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default BusinessTransformSection;




