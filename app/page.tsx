// import OutlineBtn from "@/components/atoms/buttons/OutlineBtn";
// import GradientTitle from "@/components/atoms/typography/GradientTitle";
// import BodyText from "@/components/atoms/typography/BodyText";
// import LogoBadge from "@/components/atoms/common/LogoBadge";
// import ImageInfoCard from "@/components/molecules/cards/ImageInfoCard";
import { faqsData } from "@/components/data/faqsData";
import FaqSection from "@/components/organisms/sections/FaqSection";
// import HeadingText from "@/components/atoms/typography/HeadingText";
// import Accordion from "@/components/molecules/common/Accordion";
// import FaqWithImage from "@/components/molecules/faqs/FaqWithImage";

import HomeTemplate from "@/components/templates/HomeTemplate";

export default function Home() {
  return (
    <div>
      <HomeTemplate/>
      {/* <OutlineBtn text="Get Started" />
      <GradientTitle text="Your Gradient Title" fontSize="64px" fontWeight="bold" />
      <BodyText text="This is a simple paragraph." fontSize="16px" color="#ff0000" />
      <div className="flex gap-4">
        <LogoBadge src="/logos/logo-1.png" alt="Logo" />
        <LogoBadge src="/logos/logo-2.png" alt="Logo" />
      </div>
      <div className="grid grid-cols-2 gap-4 w-[1000px] mx-auto">
        <ImageInfoCard bgImage="/bg-image.jpg" title="Our Mission & Vision" description="iTCart is a global AI automation company offering secure AI tools and enterprise IT solutions to accelerate digital transformation." height="580px" width="auto" titleSize="36px" descriptionSize="18px" />
        <ImageInfoCard bgImage="/bg-image.jpg" title="Our Mission & Vision" description="iTCart is a global AI automation company offering secure AI tools and enterprise IT solutions to accelerate digital transformation." height="580px" width="auto" titleSize="36px" descriptionSize="18px" lineClamp={2} />
      </div> */}
      {/* <HeadingText text="Your Heading Text" fontSize="24px" hoverColor="#ff0000" /> */}
      {/* <Accordion /> */}
      {/* <FaqSection faqsData={faqsData}
        faqsCount={6}
        title="Frequently Asked Questions" /> */}
    </div>
  );
}
