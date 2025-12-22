"use client";
import React, { useState } from "react";
import GradientTitle from "../typography/GradientTitle";
import OutlineBtn from "../buttons/OutlineBtn";
import { FaArrowRight } from "react-icons/fa6";
import InputField from "../form/InputField";
import FueldModal from "./FueldModal";

const AixHubVerticalBanner: React.FC = () => {

    const [openModal, setOpenModal] = useState(false);
    // const [formData, setFormData] = useState({
    //     name: "",
    //     email: "",
    // });

    // const [errors, setErrors] = useState<{ [key: string]: string }>({});

    // // field-level change handler
    // const handleChange = (
    //     field: string,
    //     value: string
    // ) => {
    //     setFormData(prev => ({
    //         ...prev,
    //         [field]: value,
    //     }));

    //     setErrors(prev => ({
    //         ...prev,
    //         [field]: "",
    //     }));
    // };

    // const validate = () => {
    //     let temp: any = {};

    //     if (!formData.name.trim()) temp.name = "Name is required";
    //     if (!formData.email.trim()) temp.email = "Email is required";
    //     else if (!/\S+@\S+\.\S+/.test(formData.email))
    //         temp.email = "Email is invalid";

    //     setErrors(temp);
    //     return Object.keys(temp).length === 0;
    // };

    // const handleSubmit = (e: React.FormEvent) => {
    //     e.preventDefault();
    //     if (!validate()) return;

    //     setOpenModal(false);

    //     const link = document.createElement("a");
    //     link.href = "/Fueld Keynote Presentation 1.pdf";
    //     link.download = "keynote.pdf";
    //     link.click();
    // };

    return (
        <>
            {openModal && (
                <FueldModal
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                />
            )}

            {/* banner */}
            <section className="relative w-full min-h-[80vh] flex items-center justify-center">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/images/fueld2025/fueldannerIMage.jpg')" }}
                ></div>

                <div className="relative w-full mx-auto px-4 text-center text-white">
                    <div className="w-full flex flex-col justify-center items-center text-center">
                        <GradientTitle
                            text="AI Alone Doesn’t Transform Enterprises."
                            as="h1"
                            theme="dark"
                            className="text-[26px] sm:text-[32px] md:text-[48px] w-[85%]"
                        />

                        <GradientTitle
                            text="The Operating System Behind It Does"
                            as="h1"
                            theme="dark"
                            className="text-[26px] sm:text-[32px] md:text-[48px] w-[85%]"
                        />
                    </div>

                    <h2 className="mt-4 text-[15px] md:text-[19px] font-bold">
                        AiXHub unveiled at FUELD Dubai 2025 by Mohammed Rohim Uddin
                    </h2>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-10">
                        <div onClick={() => setOpenModal(true)}>
                            <OutlineBtn
                                text=" Download the Keynote Slides "
                                textColor="#ffffff"
                                icon={<FaArrowRight className="text-sm font-semibold text-white" />}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AixHubVerticalBanner;
