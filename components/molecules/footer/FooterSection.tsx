import BodyText from "@/components/atoms/typography/BodyText";
import HeadingText from "@/components/atoms/typography/HeadingText";
import Link from "next/link";

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
            <Link href={item.href}>
              <BodyText
                text={item.label}
                lineHeight="32px"
                className="text-sm text-white hover:text-cyan-300 cursor-pointer transition"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterSection;
