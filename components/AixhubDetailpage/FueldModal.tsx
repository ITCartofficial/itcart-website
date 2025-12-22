// "use client";
// import React, { useState } from "react";
// import InputField from "../form/InputField";

// export interface FueldModalProps {
//     openModal: boolean;
//     setOpenModal: (value: boolean) => void;
// }

// const FueldModal: React.FC<FueldModalProps> = ({
//     openModal,
//     setOpenModal,
// }) => {

//     const scriptURL = "https://script.google.com/macros/s/AKfycbxPt8KRX-4teiyFNIzo0TjOwTzgOg2QwIus7HLEqY-_DwRq3P7orFx67IFGybMny5jv/exec";


//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//     });

//     const [errors, setErrors] = useState<{ [key: string]: string }>({});

//     const handleChange = (field: string, value: string) => {
//         setFormData(prev => ({
//             ...prev,
//             [field]: value,
//         }));
//         setErrors(prev => ({
//             ...prev,
//             [field]: "",
//         }));
//     };

//     const validate = () => {
//         let temp: any = {};

//         if (!formData.name.trim()) temp.name = "Name is required";
//         if (!formData.email.trim()) temp.email = "Email is required";
//         else if (!/\S+@\S+\.\S+/.test(formData.email))
//             temp.email = "Email is invalid";

//         setErrors(temp);
//         return Object.keys(temp).length === 0;
//     };

//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();
//         if (!validate()) return;

//         console.log("formData", formData);

//         await fetch(scriptURL, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/x-www-form-urlencoded",
//             },
//             body: { name: formData?.name, email: formData.email },
//         });


//         setOpenModal(false);

//         // const link = document.createElement("a");
//         // link.href = "/Fueld Keynote Presentation 1.pdf";
//         // link.download = "keynote.pdf";
//         // link.click();
//     };

//     if (!openModal) return null; // render only when open

//     return (
//         <div
//             className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
//             onClick={() => setOpenModal(false)}
//         >
//             <div
//                 className="bg-black text-white rounded-xl p-6 w-[90%] max-w-md shadow-xl"
//                 onClick={(e) => e.stopPropagation()}
//             >
//                 <h3 className="text-xl font-bold mb-4 text-center">
//                     Enter your details
//                 </h3>

//                 <form onSubmit={handleSubmit} className="space-y-4 rounded-xl w-full">

//                     <div>
//                         <InputField
//                             type="text"
//                             placeholder="Name"
//                             theme="dark"
//                             value={formData.name}
//                             onChange={(e) => handleChange("name", e.target.value)}
//                         />
//                         {errors.name && (
//                             <p className="text-red-500 text-xs">{errors.name}</p>
//                         )}
//                     </div>

//                     <div>
//                         <InputField
//                             type="email"
//                             placeholder="Email"
//                             theme="dark"
//                             value={formData.email}
//                             onChange={(e) => handleChange("email", e.target.value)}
//                         />
//                         {errors.email && (
//                             <p className="text-red-500 text-xs">{errors.email}</p>
//                         )}
//                     </div>

//                     <button
//                         type="submit"
//                         className="w-full bg-gradient-to-r from-white to-cyan-400 text-black font-semibold py-3 rounded-lg flex items-center justify-center hover:opacity-90 transition cursor-pointer"
//                     >
//                         Send Now
//                     </button>

//                 </form>
//             </div>
//         </div>
//     );
// };

// export default FueldModal;











"use client";
import React, { useState } from "react";
import InputField from "../form/InputField";

export interface FueldModalProps {
    openModal: boolean;
    setOpenModal: (value: boolean) => void;
}

const FueldModal: React.FC<FueldModalProps> = ({ openModal, setOpenModal }) => {

    const scriptURL =
        "https://script.google.com/macros/s/AKfycbxy5QNnW0qbIZW2_q-BJm84kHkDiAvR8ViLFS9cSrGm5PUgyVl1K5FMglJpqcybKYz_Aw/exec";

    const [formData, setFormData] = useState({
        name: "",
        email: "",
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleChange = (field: string, value: string) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));
        setErrors((prev) => ({
            ...prev,
            [field]: "",
        }));
    };

    const validate = () => {
        let temp: any = {};

        if (!formData.name.trim()) temp.name = "Name is required";
        if (!formData.email.trim()) temp.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) temp.email = "Email is invalid";

        setErrors(temp);
        return Object.keys(temp).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        try {
            await fetch(scriptURL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: new URLSearchParams({
                    name: formData.name,
                    email: formData.email,
                }).toString(),
            });

            setOpenModal(false);

            // optional - download file after submit
            // const link = document.createElement("a");
            // link.href = "/Fueld Keynote Presentation 1.pdf";
            // link.download = "keynote.pdf";
            // link.click();
        } catch (error) {
            console.log("Form submit failed", error);
        }
    };

    if (!openModal) return null;

    return (
        <div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
            onClick={() => setOpenModal(false)}
        >
            <div
                className="bg-black text-white rounded-xl p-6 w-[90%] max-w-md shadow-xl"
                onClick={(e) => e.stopPropagation()}
            >
                <h3 className="text-xl font-bold mb-4 text-center">Enter your details</h3>

                <form onSubmit={handleSubmit} className="space-y-4 rounded-xl w-full">
                    <div>
                        <InputField
                            type="text"
                            placeholder="Name"
                            theme="dark"
                            value={formData.name}
                            onChange={(e) => handleChange("name", e.target.value)}
                        />
                        {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
                    </div>

                    <div>
                        <InputField
                            type="email"
                            placeholder="Email"
                            theme="dark"
                            value={formData.email}
                            onChange={(e) => handleChange("email", e.target.value)}
                        />
                        {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-white to-cyan-400 text-black font-semibold py-3 rounded-lg flex items-center justify-center hover:opacity-90 transition cursor-pointer"
                    >
                        Send Now
                    </button>
                </form>
            </div>
        </div>
    );
};

export default FueldModal;
