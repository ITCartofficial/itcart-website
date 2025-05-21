import BodyText from "@/components/atoms/typography/BodyText"


const MultiParagraphs = ({ description, className }: { description: string; className?: string; }) => {
    const descriptions = description.split('<br>');
    return (
        <div className={`flex flex-col gap-4 ${className}`}>
            {
                descriptions && descriptions.map((text, i) => (
                    <BodyText key={i} text={text.trim()} className='lg:text-[18px] font-normal text-white' />
                )) || <BodyText text={description} className='lg:text-[18px] font-normal text-white' />
            }
        </div>
    )
}

export default MultiParagraphs