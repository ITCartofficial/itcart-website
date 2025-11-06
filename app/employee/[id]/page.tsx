"use client"
import OutlineBtn from "@/components/buttons/OutlineBtn";
import GradientTitle from "@/components/typography/GradientTitle";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

interface Employee {
    name: string;
    email: string;
    phone: string;
    department: string;
    employeeId: string;
    image: string;
}

function EmployeePage() {

    const [employeeData, setEmployeeData] = useState<Employee | null>(null);

    const pathName = usePathname()

    const id = pathName.split("/")[2];

    useEffect(() => {
        const fetchEmployeeData = async () => {
            try {
                const res = await fetch(`https://employee365-aqese4eecvfbdxd8.westus2-01.azurewebsites.net/api/employee/${id}`);
                const data = await res.json();
                setEmployeeData(data);
            } catch (err) {
                console.error("API Error:", err);
            }
        };

        fetchEmployeeData();
    }, []); // runs once when page loads

    const hanfleSaveContact = () => {
        const contact = {
            name: "Abhinav",
            phone: "8129887972",
            email: "abc.b@gmail.com",
        };

        const vcfData = `
BEGIN:VCARD
VERSION:3.0
FN:${contact.name}
TEL;TYPE=CELL:${contact.phone}
EMAIL:${contact.email}
END:VCARD
  `.trim();

        // Encode the vCard as a data URI
        const encodedVcf = encodeURIComponent(vcfData);
        const dataUri = `data:text/vcard;charset=utf-8,${encodedVcf}`;

        // Open in a new tab/window
        window.open(dataUri, "_blank");
    };
    return (
        <>
            <div className="bg-[#1a1a1a] text-white p-6 rounded-2xl mx-auto flex flex-col space-y-5 mt-10">
                {/* Image */}
                <div className="w-full h-[250px] overflow-hidden rounded-xl mt-4">
                    {employeeData?.image && (
                        <Image
                            src={employeeData.image}
                            alt={employeeData.name || "Employee Image"}
                            width={400}
                            height={400}
                            className="w-full h-full object-cover"
                            priority
                        />
                    )}
                    {/* <Image
                        // image
                        src={employeeData?.image}
                        alt="Digital Workplace"
                        width={400}
                        height={400}
                        className="w-full h-full object-cover"
                        priority
                    /> */}
                </div>

                {/* Heading */}
                <div>
                    <GradientTitle
                        text={employeeData?.name ?? ""}
                        theme="dark"
                        className="text-[34px] sm:text-[32px] md:text-[38px] leading-[1.2]"
                    />

                    <h2 className=" w-fit text-white font-semibold text-[18px] mt-2">BRANCH MANAGER</h2>
                </div>


                <div className="w-full shadow-md text-gray-800 mt-4">
                    {/* Row 1 */}
                    <div className=" space-y-3">
                        <div>
                            <p className="text-[16px] text-gray-100">Employee ID : <span className="font-semibold text-white mt-1 text-[18px]">{employeeData?.employeeId}</span></p>
                        </div>
                        <div className="">
                            <p className="text-[16px] text-gray-100">Department : <span className="font-semibold text-white mt-1 text-[18px]">{employeeData?.name}</span></p>
                        </div>
                        <div>
                            <p className="text-[16px] text-gray-100">Contact : <span className="font-semibold text-white mt-1 text-[18px]">{employeeData?.name}</span></p>
                        </div>
                        <div className="">
                            <p className="text-[16px] text-gray-100">Email : <span className="font-semibold text-white mt-1 text-[18px]">{employeeData?.name}</span></p>
                        </div>
                    </div>

                </div>


                {/* Button */}
                <OutlineBtn
                    onClick={() => hanfleSaveContact()}
                    // url="/"
                    text={"Save Contact"}
                    textColor="#ffffff"
                    icon={<FaArrowRight className="text-[16px] font-semibold text-white" />}
                />
            </div>
        </>

    )
}
export default EmployeePage;