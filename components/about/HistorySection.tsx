import BodyText from "@/components/typography/BodyText";
import GradientTitle from "@/components/typography/GradientTitle";

const HistorySection = ({ title, description, bgImage }: { title: string; description: string; bgImage: string }) => {
  const descriptions = description.split('<br>');

  return (
    <div className="w-full overflow-hidden">
      <div className="lg:hidden w-full h-[260px] bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }} />

      <div className="hidden lg:block container rounded-3xl overflow-hidden lg:min-h-[440px] bg-cover relative p-8" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="bg-white lg:w-[560px] min-h-[370px] rounded-3xl p-6 ml-8 flex flex-col gap-4">
          <GradientTitle text={title} theme="light" className="lg:text-[36px]" />
          <div className="flex flex-col gap-4">
            {descriptions.map((text, i) => (
              <BodyText key={i} text={text.trim()} className="lg:text-[18px] font-normal text-black" />
            ))}
          </div>
        </div>
      </div>
      <div className="lg:hidden bg-white w-full p-6 flex flex-col gap-4">
        <GradientTitle text={title} theme="light" className="text-[30px] text-left" />
        <div className="flex flex-col gap-4">
          {descriptions.map((text, i) => (
            <BodyText key={i} text={text.trim()} className="text-[16px] font-normal text-black text-left" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HistorySection;
