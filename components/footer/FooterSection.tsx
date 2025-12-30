import BodyText from "@/components/typography/BodyText";
import HeadingText from "@/components/typography/HeadingText";
// import Link from "next/link";

interface FooterSectionProps {
  title: string;
  items: { label: string; href: string }[];
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, items }) => {
  return (
    <div className="space-y-2">
      <HeadingText
        text={title}
        fontSize="1.125rem"
        fontWeight="700"
        className="text-white"
      />
      <ul className="space-y-1">
        {items.map((item, index) => (
          <li key={index}>
            {title === "Services" ? (
              <a href={item.href}>
                <BodyText
                  text={item.label}
                  lineHeight="32px"
                  cursor="pointer"
                  className="text-sm text-white hover:text-cyan-300 cursor-default transition"
                />
              </a>

            ) : (
              <a href={item.href}>
                <BodyText
                  text={item.label}
                  lineHeight="32px"
                  className={`${item.label == "All Products" ? "text-md text-white font-bold" : "text-sm text-white"} hover:text-cyan-300 cursor-pointer transition`}
                />
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterSection;
