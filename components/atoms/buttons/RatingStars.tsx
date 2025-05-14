import { IoStarSharp } from "react-icons/io5";

type RatingStarsProps = {
    rating: number
}

const RatingStars: React.FC<RatingStarsProps> = ({ rating }) => {


    return (
        <div className="flex gap-0.5 items-center">
            {Array.from({ length: 5 }, (_, i) => (
                i < rating && <IoStarSharp key={i} className="text-[#FFD638] text-xl" /> || <IoStarSharp key={i} className="text-[#D3D3D3] text-xl" />
            ))}
        </div>
    )
}

export default RatingStars