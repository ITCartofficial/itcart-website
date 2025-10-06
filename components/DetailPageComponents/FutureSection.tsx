import BodyText from "../typography/BodyText";
import GradientTitle from "../typography/GradientTitle";

function FutureSection() {
    return (
        <div className="max-w-5xl mx-auto text-center mb-0">
            <GradientTitle
                text={"Secure Your Future - Act Now!"}
                theme="dark"
                className="text-[28px] sm:text-[36px] md:text-[48px] font-bold leading-tight"
            />

            <BodyText
                text={"Guard your business from cyber threats with IT Cart's trusted cybersecurity services. Take action today to protect what matters most."}
                color="#ffffff"
                className="text-[16px] mt-3"
            />
        </div>

        // <div className="w-full  items-center justify-center text-center px-6 md:px-0">
        //     <GradientTitle text={"Secure Your Future - Act Now!"} lineHeight="1.2" className="w-full text-[50px]" theme='dark' />
        //     <BodyText text={"Guard your business from cyber threats with IT Cart's trusted cybersecurity services. Take action today to protect what matters most."} className='text-2xl my-4 ' color='#ffffff' />

        // </div>
    );
}

export default FutureSection;

