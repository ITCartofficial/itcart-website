export const cunsultNowSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "ContactPage",
            "name": "Consult Now – iTCart",
            "url": "https://itcart.ai/consult-now",
            "description": "Get in touch with iTCart to schedule a consultation for AI automation, cloud modernization, digital transformation, and enterprise IT solutions.",
            "mainEntity": {
                "@type": "Organization",
                "name": "iTCart",
                "url": "https://itcart.ai",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://itcart.ai/assets/logo.png"
                },
                "contactPoint": [
                    {
                        "@type": "ContactPoint",
                        "contactType": "sales",
                        "telephone": "+91 70196 67214",
                        "email": "sales@itcart.ai",
                        "areaServed": "Worldwide",
                        "availableLanguage": ["English"]
                    },
                    {
                        "@type": "ContactPoint",
                        "contactType": "customer support",
                        "telephone": "+91 70196 67214",
                        "email": "support@itcart.ai",
                        "areaServed": "Worldwide",
                        "availableLanguage": ["English"]
                    }
                ],
                "sameAs": [
                    "https://www.linkedin.com/company/itcart",
                    "https://twitter.com/itcart_ai"
                ]
            },
            "breadcrumb": {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://itcart.ai/"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Consult Now",
                        "item": "https://itcart.ai/consult-now"
                    }
                ]
            },
            "potentialAction": {
                "@type": "SubmitAction",
                "target": "https://itcart.ai/consult-now#contact-form",
                "name": "Request a Consultation",
                "description": "Submit your details to request a consultation with iTCart experts."
            }
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "How does AiXHub™ differ from traditional AI tools we're already using?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "AiXHub™ is the first AI-native Enterprise Operating System designed to replace fragmented software stacks with unified intelligent execution. Unlike point solutions, AiXHub™ consolidates multiple applications into a single platform with autonomous decision-making capabilities."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What ROI can we expect from AiXHub™ implementation?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Organizations have reported up to 300% ROI within 12–36 months, with operational cost reductions of 30–50% and efficiency gains up to 85%. Typical payback periods range from 6–12 months."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How long does AiXHub™ implementation take?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Full transformation follows our UNITE Framework across five phases spanning approximately 36 weeks. Pilot outcomes typically appear in 4–12 weeks; adoption and results vary by organization."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is AiXHub™ compliant with industry regulations?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "AiXHub™ includes embedded governance and real-time compliance controls for GDPR, HIPAA, SOC-2, and industry standards, and provides automated audit trails to support regulatory reporting."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can AiXHub™ integrate with our existing ERP, CRM, and other systems?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes — the Cross-System Orchestration Model supports integration across ERP, CRM, HRMS, ITSM, and GRC systems while minimizing custom development and preserving existing infrastructure."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What happens to our current software licenses after AiXHub™ implementation?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Organizations often reduce application count significantly, leading to substantial license savings and lower integration costs; results depend on the existing application landscape and consolidation strategy."
                    }
                }
            ]
        }
    ]
}
