import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { OutlineBtnProps } from "@/types/PropsTypes";

const WhiteButton: React.FC<OutlineBtnProps> = ({
    text,
    // icon,
    // textColor = "#000000",
    className = "",
    url = "#",
    theme = "light",
    onClick,
}) => {
    const [changgeBtn, setChangeBtn] = useState(false)

    //             className={`decoration-0 py-3 anim-outline-btn
    //              px-7 group w-max flex items-center justify-center gap-2 cursor-pointer
    //    rounded transition-all duration-300 ease-in-out
    //   bg-[#01FFFF] hover:bg-cyan-300 
    //   border-1 border-white
    //   ${theme} ${className}`} 
    return (
        <>
            {
                changgeBtn ?
                    <a
                        onMouseLeave={() => setChangeBtn(false)}

                        href={url || ""}
                        // onClick={onClick}
                        className={` min-w-[160px] py-3 px-4 w-max  group w-max  ${theme} flex items-center justify-center gap-2 cursor-pointer ${className}`} onClick={onClick}


                        style={{
                            border: '.5px solid transparent',
                            backgroundImage: 'linear-gradient(#01FFFF, #01FFFF), linear-gradient(to right, #03536B, #FFFFFF)',
                            backgroundOrigin: 'border-box',
                            backgroundClip: 'padding-box, border-box',
                            borderRadius: '8px'
                        }}
                    >
                        <p
                            className="text-sm font-medium  transition-all duration-300 group-hover:translate-x-1"
                            style={{ color: "black", fontWeight: 600 }}
                        >
                            {text}
                        </p>

                        <div className="group-hover:translate-x-1 transition-all duration-300 ease-in-out ">
                            {<FaArrowRight style={{ color: 'black' }} className={`text-sm font-semibold`} />}
                        </div>
                    </a>
                    :

                    <a
                        href={url}
                        onClick={onClick}
                        onMouseEnter={() => setChangeBtn(true)}
                        onMouseLeave={() => setChangeBtn(false)}
                        className={`flex items-center decoration-0  anim-outline-btn justify-center gap-3 min-w-[160px] px-4 py-3 rounded-lg border transition-all duration-300 ease-in-out cursor-pointer ${className}`}
                        style={{
                            border: "1.5px solid transparent",
                            backgroundImage:
                                "linear-gradient(white, white), linear-gradient(to right, #000000, #45C2CC)",
                            backgroundOrigin: "border-box",
                            backgroundClip: "padding-box, border-box",
                            
                        }}
                    >
                        {/* Text */}
                        <span
                            className="font-semibold text-sm transition-colors duration-300 group-hover:translate-x-1"
                            style={{ color: "black" }}
                        >
                            {text}
                        </span>

                        {/* Icon (gradient arrow) */}
                        <div className="group-hover:translate-x-1 transition-all duration-300 ease-in-out ">
                            {<FaArrowRight style={{ color: '#45C2CC' }} className={`text-sm font-semibold`} />}
                        </div>
                    </a>
            }
        </>

    );
};

export default WhiteButton;
