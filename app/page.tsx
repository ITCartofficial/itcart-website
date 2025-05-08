import OutlineBtn from "@/components/atoms/buttons/OutlineBtn";
import GradientTitle from "@/components/atoms/typography/GradientTitle";
import SimplePara from "@/components/atoms/typography/SimplePara";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-screen justify-center gap-1">
      <OutlineBtn text="Get Started" />
      <GradientTitle text="Your Gradient Title" fontSize="64px" fontWeight="bold" />
      <SimplePara text="This is a simple paragraph." fontSize="16px" color="#ff0000" />
    </div>
  );
}
