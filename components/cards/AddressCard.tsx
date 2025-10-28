import ImageContainer from "@/components/common/ImageContainer"
import { AddressCardProps } from "@/types/PropsTypes";
import Link from "next/link";
import { FiPhoneCall, FiMail, FiMapPin } from "react-icons/fi";



const AddressCard: React.FC<AddressCardProps> = ({ country, phone, email, location, mapUrl }: AddressCardProps) => {

    let national_flag;
    switch (country) {
        case "India":
            national_flag = "/images/flags/India-flag.png"
            break;
        case "US":
            national_flag = "/images/flags/US-flag.png"
            break;
        default:
            national_flag = "/images/flags/India-flag.png"
    }

    return (
        <div className="relative w-full h-full mt-6 md:mt-6 lg:mt-0 sm:mt-6 mt-6 ">
            <div className="national_flag rounded-full w-10 h-10 absolute -top-4 -left-4 overflow-hidden">
                <ImageContainer
                    src={national_flag}
                    alt={country + " flag"}
                />
            </div>
            <div className="address_details border rounded-2xl border-[#45C2CC] flex flex-col gap-2 p-6  grow 
            bg-[#1d1d1dc6] 
            ">
                <Link href={`tel:${phone && phone.trim().split(' ').join('')}`} className="flex gap-2 items-stretch">
                    <FiPhoneCall className="text-white" />
                    <span className="text-sm text-white">{phone}</span>
                </Link>
                <Link href={`mailto:${email && email.trim()}`} className="flex gap-2 items-center">
                    <FiMail className="text-white" />
                    <span className="text-sm text-white">{email}</span>
                </Link>
                <Link href={mapUrl || ""} className="flex gap-2">
                    <FiMapPin className="text-white text-base shrink-0 mt-0.5" />
                    <span className="text-sm text-white">{location}</span>
                </Link>
            </div>
        </div>
    )
}

export default AddressCard