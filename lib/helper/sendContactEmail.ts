export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

export interface SendEmailResult {
  success: boolean;
  message: string;
}

export async function sendContactEmail(
  formData: ContactFormData
): Promise<SendEmailResult> {
  try {
    const res = await fetch("/api/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        to: "itcart.io@gmail.com", // <-- Change this to your email!
        subject: `Contact Form Submission from ${formData.firstName} for iTCart`,
        text:
          `Name: ${formData.firstName} ${formData.lastName}\n` +
          `Email: ${formData.email}\n` +
          `Phone: ${formData.phone}\n` +
          `Message: ${formData.message}`,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      return { success: true, message: data.message };
    } else {
      return { success: false, message: data.message || "An error occurred." };
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { success: false, message: error.message };
    } else {
      return { success: false, message: "An unknown error occurred." };
    }
  }
}
