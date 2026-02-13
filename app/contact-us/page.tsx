"use client"
import { AddressCardProps } from "@/types/PropsTypes"
import BodyText from "@/components/typography/BodyText"
import GradientTitle from "@/components/typography/GradientTitle"
import AddressSection from "@/components/contact/AddressSection"
import ContactFormSection from "@/components/contact/ContactFormSection"
import { useState, useEffect } from "react"

const addressList: AddressCardProps[] = [
  {
    country: "India",
    phone: "+91 80888 49174",
    email: "globalcto@itcart.ai",
    location: "WeWork Galaxy, Bengaluru, KA, India",
  },
  {
    country: "US",
    phone: "+1 (800) 407 2588",
    email: " globalceo@itcart.ai",
    location: "Toledo, Ohio, USA",
  },
  {
    country: "India",
    phone: "+91 70196 67214",
    email: "connect@itcart.ai",
    location: "91Springboard, MG Road, Bengaluru",
  },
  {
    country: "India",
    phone: "+91 89518 06428",
    email: "neindiasales@itcart.ai",
    location: "Prithvi Centre, Guwahati, India",
  },

]



const ContactUs = () => {

  const [isClient, setIsClient] = useState(false);
  
      useEffect(() => {
          setIsClient(true);
      }, []);
  
      if (!isClient) {
          return null;
      }
  return (
    <html lang="en">
      <head>
        <title>Contact us | Start a conversation</title>
        <meta name="description" content="Contact us if you have any questions about ITCart business outcomes, technical specs, pricing, or anything else. Take the first step toward growth today!" />
        <meta property="og:url" content={`https://itcart.ai/app/contact-us`} />
        <link rel="canonical" href="https://itcart.ai/app/contact-us"></link>
      </head>
      <div className="flex flex-col  lg:h-full bg-black pt-16 lg:pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 lg:w-1/2 flex flex-col items-center justify-center py-8 lg:py-16">
          <GradientTitle text="Get In Touch" theme="dark" className="text-[36px] lg:text-[64px]" />
          <BodyText text="Stay ahead with AI-native solutions tailored to your needs. Connect with iTCart experts through our contact form to explore what&apos;s possible." color="#ffffff" className="text-center text-[18px] lg:text-[20px] w-[80%]" />
        </div>
        <div className="container mx-auto lg:px-10 lg:py-10">
          <ContactFormSection image="/images/contact/contact-form-img.png" />
        </div>
        <div className="mb-10 md:mb-0 lg:mb-0 my-8 ">
          <AddressSection addressList={addressList} />
        </div>
      </div>
    </html>

  )
}

export default ContactUs