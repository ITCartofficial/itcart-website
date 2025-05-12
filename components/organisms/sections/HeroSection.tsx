// organisms/HeroSection.tsx
import OutlineBtn from '@/components/atoms/buttons/OutlineBtn';
import BodyText from '@/components/atoms/typography/BodyText';
import GradientTitle from '@/components/atoms/typography/GradientTitle';
import { FaArrowRight } from 'react-icons/fa6';


interface HeroSectionProps {
  title?: string;
  description?: string;
  subDescription?: string;
  buttonText?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title = "Ready to Transform Your Business?",
  description = "Experience Digital Transformation firsthand and accelerate growth with AI today.",
  subDescription = "Let iTCart guide your journey from outdated workflows to intelligent automation, hyper-efficient processes, and AI-driven scalability.",
  buttonText = "Learn More"
}) => {
  return (
    <section className="relative w-full bg-black pt-16 md:pt-20 mb-20 px-6 md:px-12 lg:px-24 overflow-hidden border-b-2 border-b-zinc-600">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left content */}
        <div className="flex flex-col gap-6 text-center md:text-left items-center md:items-start">
          <GradientTitle
            text={title}
            fontSize="2rem md:fontSize-[3rem]"
            lineHeight="1.2"
            className="max-w-lg"
          />
          <div className="flex flex-col gap-4">
            <BodyText
              text={description}
              color="#FFFFFF"
              fontSize="1rem md:text-[1.125rem]"
              lineHeight="1.6"
              className="max-w-lg opacity-90"
            />
            <BodyText
              text={subDescription}
              color="#FFFFFF"
              fontSize="1rem md:text-[1.125rem]"
              lineHeight="1.6"
              className="max-w-lg opacity-90"
            />
          </div>
          <div className="mt-4">
            <OutlineBtn
              text={buttonText}
              textColor="#FFFFFF"
              icon={<FaArrowRight size={16} color="#FFFFFF" />}
            />
          </div>
        </div>
        {/* Right background image */}
        <div className="hidden md:flex justify-center items-center h-full">
          <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] bg-[url('/images/home/blue-spiral-lines-2.png')] bg-cover bg-no-repeat bg-center" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;