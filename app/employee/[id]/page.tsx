"use client";

import OutlineBtn from "@/components/buttons/OutlineBtn";
import GradientTitle from "@/components/typography/GradientTitle";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

// ✅ Define the employee data structure
interface Employee {
    employeeId: string;
    name: string;
    image: string;
    department: string;
    phone: string;
    email: string;
    position?: string;
}

function EmployeePage() {

    const pathName = usePathname();
    const [employeeData, setEmployeeData] = useState<Employee | null>(null);

    const id = pathName.split("/")[2];

    console.log("id", id);


    // ✅ Fetch data from API once on load
    useEffect(() => {
        const fetchEmployeeData = async () => {
            // B0157
            try {
                const res = await fetch(
                    `https://employee365-aqese4eecvfbdxd8.westus2-01.azurewebsites.net/api/employee/${id}`
                );

                if (!res.ok) throw new Error("Failed to fetch employee data");

                const data: Employee = await res.json();
                setEmployeeData(data);
            } catch (err) {
                console.error("API Error:", err);
            }
        };

        fetchEmployeeData();
    }, []);









    // ✅ Call handler (open phone dialer)
    // const handleSave = () => {
    //     if (employeeData?.phone) {
    //         window.location.href = `tel:${employeeData.phone}`;
    //     } else {
    //         alert("Phone number not available");
    //     }
    // };


    const handleSave = async () => {
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

    // ✅ Safe return while loading
    if (!employeeData) {
        return <p className="text-center text-gray-400 mt-10">Loading...</p>;
    }

    return (
        <div className="bg-[#1a1a1a] text-white p-6 rounded-2xl mx-auto flex flex-col space-y-5 mt-10 max-w-md">
            {/* ✅ Image */}
            <div className="w-full aspect-square overflow-hidden rounded-xl mt-4">
                <Image
                    src={employeeData.image}
                    alt={employeeData.name || "Employee"}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                    priority
                />
            </div>

            {/* ✅ Heading */}
            <div>
                <GradientTitle
                    text={employeeData.name}
                    theme="dark"
                    className="text-[34px] sm:text-[32px] md:text-[38px] leading-[1.2]"
                />
                <h2 className="w-fit text-white font-semibold text-[18px] mt-2">
                    {employeeData.position || "Employee"}
                </h2>
            </div>

            {/* ✅ Details */}
            <div className="w-full shadow-md text-gray-800 mt-4 space-y-3">
                <p className="text-[16px] text-gray-100">
                    Employee ID:
                    <span className="font-semibold text-white ml-1 text-[18px]">
                        {employeeData.employeeId}
                    </span>
                </p>
                <p className="text-[16px] text-gray-100">
                    Department:
                    <span className="font-semibold text-white ml-1 text-[18px]">
                        {employeeData.department}
                    </span>
                </p>
                <p className="text-[16px] text-gray-100">
                    Contact:
                    <span className="font-semibold text-white ml-1 text-[18px]">
                        {employeeData.phone}
                    </span>
                </p>
                <p className="text-[16px] text-gray-100">
                    Email:
                    <span className="font-semibold text-white ml-1 text-[18px]">
                        {employeeData.email}
                    </span>
                </p>
            </div>

            {/* ✅ Button */}
            <OutlineBtn
                onClick={handleSave}
                text="Call Now"
                textColor="#ffffff"
                icon={<FaArrowRight className="text-[16px] font-semibold text-white" />}
            />
        </div>
    );
}

export default EmployeePage;
