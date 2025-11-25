import { AddressCardProps } from "@/types/PropsTypes"
import BodyText from "@/components/typography/BodyText"
import GradientTitle from "@/components/typography/GradientTitle"
import AddressSection from "@/components/contact/AddressSection"
import ContactFormSection from "@/components/contact/ContactFormSection"

const addressList: AddressCardProps[] = [
  {
    country: "India",
    phone: "+91 80888 49174",
    email: "sales@itcart.io",
    location: "WeWork Galaxy, Bengaluru, KA, India",
  },
  {
    country: "US",
    phone: "+1 (313) 790-2882",
    email: "ceo@itcart.io",
    location: "Toledo, Ohio, USA",
  },
  {
    country: "India",
    phone: "+91 70196 67214",
    email: "connect@itcart.io",
    location: "91Springboard, MG Road, Bengaluru",
  },
  {
    country: "India",
    phone: "+91 89518 06428",
    email: "neindiasales@itcart.io",
    location: "Prithvi Centre, Guwahati, India",
  },
  
]

const ContactUs = () => {
  return (
    <div className="flex flex-col  lg:h-full bg-black pt-16 lg:pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 lg:w-1/2 flex flex-col items-center justify-center py-8 lg:py-16">
        <GradientTitle text="Get In Touch" theme="dark" className="text-[36px] lg:text-[64px]" />
        <BodyText text="Stay ahead with AI-powered solutions tailored to your needs. Connect with iTCart experts through our contact form to explore what&apos;s possible." color="#ffffff" className="text-center text-[18px] lg:text-[20px] w-[80%]" />
      </div>
      <div className="container mx-auto lg:px-10 lg:py-10">
        <ContactFormSection image="/images/contact/contact-form-img.png"/>
      </div>
      <div className="mb-10 md:mb-0 lg:mb-0 my-8 ">
        <AddressSection addressList={addressList} />
      </div>
    </div>
  )
}

export default ContactUs

