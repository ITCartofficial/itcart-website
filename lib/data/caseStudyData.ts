import { CaseStudyItem } from "@/types/PropsTypes";




export const caseStudyData: CaseStudyItem[] = [
  {
    id: "1",
    title: "E-Commerce Platform Transformation",
    description: "How we transformed a traditional retail business into a modern e-commerce platform, increasing their online sales by 300% within 6 months.",
    author: "John Smith",
    date: "December 15, 2024",
    imageUrl: "/images/case-studies/ecommerce-card.jpg",
    bannerImage: "/images/case-studies/ecommerce-banner.jpg",
    slug: "ecommerce-platform-transformation",
    content: [
      {
        title: "Project Overview",
        content: "Our client, a traditional retail business with 20 years of offline presence, approached us to develop a comprehensive e-commerce solution. They were struggling with declining foot traffic and needed to establish a strong online presence to compete in the digital marketplace.",
        isHTML: false
      },
      {
        title: "Challenges Faced",
        content: [
          "<strong>Legacy System Integration:</strong> The client had an outdated inventory management system that needed to be integrated with the new e-commerce platform.",
          "<strong>User Experience:</strong> Creating an intuitive shopping experience that would appeal to both tech-savvy and traditional customers.",
          "<strong>Performance:</strong> Ensuring fast loading times and smooth functionality across all devices.",
          "<strong>Security:</strong> Implementing robust security measures for payment processing and customer data protection."
        ],
        isHTML: true
      },
      {
        title: "Our Solution",
        content: [
          "We developed a custom e-commerce platform using React and Node.js, with the following key features:",
          "<ul class='list-disc pl-6 space-y-2 mt-2'><li>Responsive design optimized for mobile and desktop</li><li>Real-time inventory management system</li><li>Secure payment gateway integration</li><li>Advanced search and filtering capabilities</li><li>Customer review and rating system</li><li>Admin dashboard for order and inventory management</li></ul>"
        ],
        isHTML: true
      },
      {
        title: "Results Achieved",
        content: [
          "The transformation yielded remarkable results:",
          "<ul class='list-disc pl-6 space-y-2 mt-2'><li><strong>300% increase</strong> in online sales within 6 months</li><li><strong>45% improvement</strong> in customer satisfaction scores</li><li><strong>60% reduction</strong> in order processing time</li><li><strong>25% increase</strong> in average order value</li><li><strong>40% growth</strong> in customer retention rate</li></ul>"
        ],
        isHTML: true
      },
      {
        title: "Technologies Used",
        content: "React.js, Node.js, Express.js, MongoDB, Stripe API, AWS S3, Cloudflare CDN, Docker, Redis for caching",
        isHTML: false
      }
    ]
  },
  {
    id: "2",
    title: "Healthcare Management System",
    description: "A comprehensive healthcare management system that streamlined patient care and reduced administrative overhead by 50%.",
    author: "Sarah Johnson",
    date: "November 28, 2024",
    imageUrl: "/images/case-studies/healthcare-card.jpg",
    bannerImage: "/images/case-studies/healthcare-banner.jpg",
    slug: "healthcare-management-system",
    content: [
      {
        title: "Project Overview",
        content: "We developed a comprehensive healthcare management system for a multi-specialty clinic with 15 doctors and 200+ daily patients. The system aimed to digitize patient records, streamline appointment scheduling, and improve overall operational efficiency.",
        isHTML: false
      },
      {
        title: "Key Features Implemented",
        content: [
          "<strong>Patient Management:</strong> Complete patient history, medical records, and treatment tracking.",
          "<strong>Appointment Scheduling:</strong> Automated scheduling system with SMS and email reminders.",
          "<strong>Billing & Insurance:</strong> Integrated billing system with insurance claim processing.",
          "<strong>Prescription Management:</strong> Digital prescription system with drug interaction alerts.",
          "<strong>Reporting & Analytics:</strong> Comprehensive reporting dashboard for clinic management."
        ],
        isHTML: true
      },
      {
        title: "Impact & Results",
        content: [
          "The implementation resulted in significant improvements:",
          "<ul class='list-disc pl-6 space-y-2 mt-2'><li><strong>50% reduction</strong> in administrative overhead</li><li><strong>30% increase</strong> in patient satisfaction</li><li><strong>40% faster</strong> appointment booking process</li><li><strong>25% reduction</strong> in patient wait times</li><li><strong>60% improvement</strong> in billing accuracy</li></ul>"
        ],
        isHTML: true
      },
      {
        title: "Technologies Used",
        content: "Vue.js, Laravel, MySQL, PHP, HIPAA-compliant hosting, Twilio SMS API, SendGrid Email API",
        isHTML: false
      }
    ]
  },
  {
    id: "3",
    title: "Fintech Mobile Application",
    description: "A secure mobile banking application with advanced features that acquired 100K+ users in the first year.",
    author: "Michael Brown",
    date: "October 10, 2024",
    imageUrl: "/images/case-studies/fintech-card.jpg",
    bannerImage: "/images/case-studies/fintech-banner.jpg",
    slug: "fintech-mobile-application",
    content: [
      {
        title: "Project Overview",
        content: "We partnered with a fintech startup to develop a comprehensive mobile banking application that would compete with traditional banking apps while offering innovative features for the modern user.",
        isHTML: false
      },
      {
        title: "Security Implementation",
        content: [
          "Security was our top priority given the sensitive nature of financial data:",
          "<ul class='list-disc pl-6 space-y-2 mt-2'><li>Multi-factor authentication (MFA)</li><li>Biometric login (fingerprint & face recognition)</li><li>End-to-end encryption for all transactions</li><li>Real-time fraud detection system</li><li>Secure API communication with banking partners</li></ul>"
        ],
        isHTML: true
      },
      {
        title: "User Acquisition Results",
        content: [
          "The app's success exceeded all expectations:",
          "<ul class='list-disc pl-6 space-y-2 mt-2'><li><strong>100,000+ downloads</strong> in the first year</li><li><strong>4.8-star rating</strong> on app stores</li><li><strong>85% user retention</strong> rate after 6 months</li><li><strong>$50M+ transaction volume</strong> processed</li><li><strong>Zero security breaches</strong> since launch</li></ul>"
        ],
        isHTML: true
      },
      {
        title: "Technologies Used",
        content: "React Native, Node.js, PostgreSQL, AWS Lambda, AWS KMS, Plaid API, Stripe Connect, Firebase",
        isHTML: false
      }
    ]
  }
];