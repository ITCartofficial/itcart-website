import BannerContainer from "@/components/common/BannerContainer"
import AddressCard from "@/components/cards/AddressCard"
import { AddressCardProps } from "@/types/PropsTypes"

const AddressSection = ({ addressList }: { addressList: AddressCardProps[] }) => {
    return (
        <BannerContainer bgImage="/images/contact/contact-bg.jpg">
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
        </BannerContainer>
    )
}

export default AddressSection