import { ambassadorsList } from "@/lib/data/aboutPageData"
import AmbassadorSlider from "../slider/AmbassadorSlider"

function LeadersHorizondalCard() {
    return (
        <>
            <div className="mt-4">
                <AmbassadorSlider ambassadorList={ambassadorsList} />
            </div>
        </>
    )
}
export default LeadersHorizondalCard