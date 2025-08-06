import OutlineBtn from '@/components/buttons/OutlineBtn';
import BodyText from '@/components/typography/BodyText';
import GradientTitle from '@/components/typography/GradientTitle';
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
    <section className=" w-full m-h-[300px] md:min-h-[400px] lg:min-h-[500px] bg-[url('/images/home/blue-spiral-lines-2.png')] bg-contain bg-no-repeat bg-right" >
      <div className="relative w-full h-full pl-6 md:pl-12 lg:pl-24 overflow-hidden container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-8">
          {/* Left content */}
          <div className="flex flex-col gap-6 text-30px text-left md:text-left items-center md:items-start pb-8">
            <GradientTitle
              text={title}
              lineHeight="1.2"
              className="text-[30px] lg:text-[50px]"
              theme='dark'
            />
            <div className="flex flex-col gap-4">
              <BodyText
                text={description}
                color="#FFFFFF"
                lineHeight="1.6"
                className="max-w-lg opacity-90 text-base"
              />
              <BodyText
                text={subDescription}
                color="#FFFFFF"
                lineHeight="1.6"
                className="max-w-lg opacity-90 text-base"
              />
            </div>
            <div className="mt-4">
              <OutlineBtn
                text={buttonText}
                textColor="#FFFFFF"
                icon={<FaArrowRight size={16} color="#FFFFFF" />}
                url='/contact-us'
              />
            </div>
          </div>
          {/* Right background image */}
          {/* <div className="hidden md:flex justify-center items-center h-full">
          <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] " />
        </div> */}
        </div>
      </div>
    </section >
  );
};

export default BusinessTransformSection;