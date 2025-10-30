// 'use client'

// import BodyText from '@/components/typography/BodyText';
// import CountUp from 'react-countup';

// interface StatCounterProps {
//     end: number;
//     suffix?: string;
//     label: string;
//     duration?: number;
//     theme: 'light' | 'dark';
//     className?: string;
// }

// const StatCounter: React.FC<StatCounterProps> = ({ end, suffix = '+', label, duration = 2, theme, className }) => {

//     const textColor = theme == 'dark' ? 'text-white' : 'text-black';
//     return (
//         <div className="flex-1/3 lg:w-full">
//             <div className="text-3xl font-bold text-[#45C2CC]">
//                 <CountUp end={"7B+"} duration={duration} suffix={suffix} />
//             </div>
//             <BodyText text={label} theme={theme} className={`text-sm font-semibold ${textColor} ${className}`} />
//         </div>
//     );
// };

// export default StatCounter;


'use client';

import BodyText from '@/components/typography/BodyText';
import CountUp from 'react-countup';

interface StatCounterProps {
    end: number | string; // ✅ Accept both number and string
    suffix?: string;
    label: string;
    duration?: number;
    theme: 'light' | 'dark';
    className?: string;
}

const StatCounter: React.FC<StatCounterProps> = ({
    end,
    suffix = '+',
    label,
    duration = 2,
    theme,
    className,
}) => {
    const textColor = theme === 'dark' ? 'text-white' : 'text-black';
    const isNumeric = typeof end === 'number' || !isNaN(Number(end));

    return (
        <div className={`flex flex-col items-start ${className || ''}`}>
            <div className="text-3xl lg:text-4xl font-bold text-[#45C2CC]">
                {isNumeric ? (
                    <CountUp end={Number(end)} duration={duration} suffix={suffix} />
                ) : (
                    <span>
                        {end}
                        {suffix && !String(end).includes(suffix) ? suffix : ''}
                    </span>
                )}
            </div>
            <BodyText
                text={label}
                theme={theme}
                className={`text-sm font-semibold ${textColor}`}
            />
        </div>
    );
};

export default StatCounter;
