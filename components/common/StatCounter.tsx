'use client'

import BodyText from '@/components/typography/BodyText';
import CountUp from 'react-countup';

interface StatCounterProps {
    end: number;
    suffix?: string;
    label: string;
    duration?: number;
    theme: 'light' | 'dark';
    className?: string;
}

const StatCounter: React.FC<StatCounterProps> = ({ end, suffix = '+', label, duration = 2, theme, className }) => {

    const textColor = theme == 'dark' ? 'text-white' : 'text-black';
    return (
        <div className="flex-1/3 lg:w-full">
            <div className="text-3xl font-bold text-[#45C2CC]">
                <CountUp end={end} duration={duration} suffix={suffix} />
            </div>
            <BodyText text={label} theme={theme} className={`text-sm font-semibold ${textColor} ${className}`} />
        </div>
    );
};

export default StatCounter;
