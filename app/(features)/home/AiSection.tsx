'use-client'
import GradientTitle from "@/components/typography/GradientTitle"
import { ImageInfoCardProps } from "@/types/PropsTypes"
import OutlineBtn from "@/components/buttons/OutlineBtn"
import { FaArrowRight } from "react-icons/fa6"
import Image from "next/image"
import { AiSectionData } from "@/lib/data/aiSectionData"
import { useState } from "react"

type AiSectionProps = {
    title: string
    cardDetails: ImageInfoCardProps[]
}


const AiSection: React.FC<AiSectionProps> = ({ title }) => {

    const [clickedId, setClickedId] = useState(AiSectionData[0]?.id)


    return (

        <div className="w-full h-max flex flex-col justify-center items-center text-center ">
            <GradientTitle text={title} className="text-[30px] lg:text-[48px] lg:w-[70%] leading-tight  text- lg:text-center" theme="dark" />

            <div className="flex flex-col items-center w-full py-5">
                {AiSectionData.map((item, index) => (
                    <div key={index} onClick={() => setClickedId(item?.id)} className="w-full flex justify-between py-3 border-b border-[#333333] cursor-pointer">
                        <div key={item.id} className="flex flex-col items-center justify-center  sm:text-[#2BADB7] text-white">
                            <span className="lg:text-[20px] md:text-[20px] sm:text-[18px] text-[18px] text-[#2BADB7] font-bold sm:mb-auto mb-auto">{item.id}</span>
                        </div>

                        {
                            clickedId == item.id &&

                            <div className="hidden lg:block rounded-[40px] overflow-hidden w-[550px] h-[300px]  text-[#2BADB7] font-bold border border-[#2BADB7]">
                                <Image
                                    src={item?.image}
                                    alt={item?.image}
                                    width={550}
                                    height={300}
                                    className="object-cover w-full h-full"
                                />
                            </div>

                        }

                        <div className="flex flex-col items-start justify-center sm:justify-start text-right w-150 ml-5 cursor-pointer">
                            <h3 style={{ color: clickedId == item.id ? '#2BADB7' : 'white' }} className="font-semibold md:text-[30px] sm:text-[18px] text-[18px]">{item.title}</h3>

                            {

                                clickedId == item.id &&
                                <div className="lg:hidden block rounded-[40px] overflow-hidden w-full h-[250px] sm:h-[300px] text-[#2BADB7] font-bold my-3 border-[#2BADB7]">
                                    <Image
                                        src={item?.image}
                                        alt={item?.image}
                                        width={550}
                                        height={300}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            }

                            {
                                clickedId == item.id &&
                                <p className="text-white text-start md:text-[18px] sm:text-[16px] text-[15px]">
                                    {item.description}
                                </p>
                            }

                        </div>
                    </div>
                ))}

            </div>

            <div className="w-full flex justify-center md:my-3 sm:my-2 my-1">
                <OutlineBtn
                    url='/'
                    text="Show More"
                    textColor='#ffffff'
                    icon={<FaArrowRight className="text-sm font-semibold text-white" />}
                />
            </div>


        </div>


    )
}

export default AiSection


// < div className = "flex flex-col gap-12" >
// {
//     data.map((item, index) => (
//         <div key={item.id} className="flex flex-col gap-4">
//             {/* First item has image + description */}
//             {index === 0 && (
//                 <div className="grid lg:grid-cols-2 gap-6">
//                     <Image
//                         src={item.image}
//                         alt={item.title}
//                         width={600}
//                         height={400}
//                         className="rounded-lg object-cover"
//                     />
//                     <div>
//                         <h2 className="text-2xl lg:text-3xl font-bold text-teal-400">
//                             {item.title}
//                         </h2>
//                         <p className="text-gray-300 mt-2 text-base lg:text-lg">
//                             {item.description}
//                         </p>
//                     </div>
//                 </div>
//             )}

//             {/* Other items only text */}
//             {index !== 0 && (
//                 <h3 className="text-xl lg:text-2xl font-semibold">
//                     {item.title}
//                 </h3>
//             )}
//         </div>
//     ))
// }
//                 </div >

// < div className = "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:min-h-[500px] lg:px-24" >
// {
//     cardDetails.map((card, i) => (
//         i == 1 && (
//             <div key={i} className="lg:-translate-y-16 flex flex-col gap-6">
//                 <ImageInfoCard bgImage={card.bgImage} description={card.description} title={card.title} className="h-[360px]" showBtn={true} />
//                 {/* <div className="lg:pl-8 flex justify-center lg:justify-start">
//                             <OutlineBtn text="Read More" textColor="#ffffff" icon={<FaArrowRight className="text-sm font-semibold text-white" />} />
//                         </div> */}
//             </div>
//         ) || (

//             <ImageInfoCard bgImage={card.bgImage} description={card.description} title={card.title} className="" key={i} />

//         )
//     ))
// }
//         </div > 