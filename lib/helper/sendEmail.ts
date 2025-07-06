export default async function sendEmail() {
  const response = await fetch("/api/sendEmail", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      to: "recipient@example.com",
      subject: "Test from Next.js",
      text: "Hello! This is a test email.",
    }),
  });

  const data = await response.json();
  if (response.ok) {
    alert("Email sent: " + data.message);
  } else {
    alert("Error: " + data.message);
  }
}
