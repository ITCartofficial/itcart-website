// import IconCard from "@/components/molecules/cards/IconCard";
// import GradientTitle from "@/components/atoms/typography/GradientTitle";
import React from "react";
import WhoWeAreCard from "@/components/cards/WhoWeAreCard";

const whoWeAreCard= [
    {
        icon: '/icons/User.png',
        title:'Who we are',
        description:'AI automation and Digital Transformation Company Automate, accelerate, and simplify business processes with a multi-functional AI platform '
    },

    {
        icon: '/icons/Grade.png',
        title:'What we do ',
        description:'Integrating AI and automation technologies seamlessly across your organization We help you transition from traditional operational methods to advanced technological approaches '
    },

]
const WhoWeAre = () => {
    return (
        <div className='container pt-10 pb-20'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {
                    whoWeAreCard.map((card, i) => (
                        <WhoWeAreCard
                            key={i}
                            title={card.title}
                            icon={card.icon}
                            description={card.description}
                            theme={'dark'}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default WhoWeAre