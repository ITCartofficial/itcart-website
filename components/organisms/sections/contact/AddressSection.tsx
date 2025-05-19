import AddressCard from "@/components/molecules/cards/AddressCard"
import { AddressCardProps } from "@/types/PropsTypes"

const AddressSection = ({ addressList }: { addressList: AddressCardProps[] }) => {
    return (
        <div className='lg:min-h-[560px] w-full'
            style={{
                backgroundImage: `url('/images/contact/contact-bg.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="container mx-auto lg:px-10 lg:py-16 h-full grid lg:grid-cols-4 gap-8">
                {
                    addressList.map((address, i) => (
                        <AddressCard
                            key={i}
                            country={address.country}
                            email={address.email}
                            location={address.location}
                            phone={address.phone}
                            mapUrl={address.mapUrl || ""}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default AddressSection