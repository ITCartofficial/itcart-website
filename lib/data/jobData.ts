// // import { iterateObserversSafely } from "@apollo/client/utilities";
// // import { title } from "process";

// export const jobs = [
//   {
//     jobId: "iTC0002",
//     title: "Growing Our Sales Presence in North America ",
//      Role: " Sales Executive",
//     location: "Toledo, Ohio, USA ",
//     employmentType: "Full Time",
//     jobCategory: "Sales",
//     jobDescriptionUrl: "/iTC0002",
//     Experience: "3–5 years in sales",
//     reportsTo: '',
//     positionOverview: "",
//     objectives: [
//       "Prospect, pitch, and win clients using proven sales strategies",
//       " Build and manage a strong sales pipeline ",
//       "Drive revenue growth across North America markets ",
//       "Collaborate with cross-functional teams to deliver client success "
//     ],
//   },
//   {
//     jobId: "iTC0003",
//     title: "Step in as the right hand to global leadership. Your next move starts here.",
//     Role: "Executive Assistant to CXO Leadership",
//     location: "Toledo, Ohio, USA ",
//     employmentType: "Full Time",
//     jobCategory: "Sales",
//     jobDescriptionUrl: "/iTC0003",
//     Experience: "3–7 years supporting C-Suite or senior global executive",
//     reportsTo: '',
//     positionOverview: "",
//     objectives: [
//       "Prospect, pitch, and win clients using proven sales strategies",
//       " Build and manage a strong sales pipeline ",
//       "Drive revenue growth across North America markets ",
//       "Collaborate with cross-functional teams to deliver client success "
//     ],
//   },
//   {
//     jobId: "iTC0005",
//     title: "Passionate about creating exceptional customer experiences in the USA?",
//     Role: "Customer Support Executive",
//     location: "Toledo, Ohio, USA",
//     employmentType: "Full-Time",
//     jobCategory: "Support",
//     jobDescriptionUrl: "/iTC0005",
//     Experience: "5–8 years",
//     reportsTo: "Customer Support Manager",
//     positionOverview: "",
//     objectives: [
//       "Engage with customers via calls, email, chat, and ticketing systems",
//       "Resolve customer issues with accuracy, clarity, and strong follow-through",
//       "Document cases, track issues, and escalate when necessary",
//       "Maintain up-to-date product knowledge",
//       "Support onboarding, FAQs, and service desk enhancements",
//       "Ensure high levels of customer satisfaction"
//     ],
//   },
//   {
//     jobId: "iTC0006",
//     title: "Want to drive tech innovation in the USA? ",
//     Role: "Technology Executive",
//     location: "Toledo, Ohio, USA",
//     employmentType: "Full-Time",
//     jobCategory: "Technology",
//     jobDescriptionUrl: "/iTC0006",
//     Experience: "4–5 years",
//     reportsTo: "Head of Technology",
//     positionOverview: "",
//     objectives: [
//       "Support daily operations across development, infrastructure, support, and security",
//       "Coordinate project timelines, deliverables, and cross-team alignment",
//       "Prepare dashboards, reports, and leadership updates",
//       "Assist in vendor coordination, procurement, and IT governance",
//       "Support documentation, audits, tools evaluation, and asset/license tracking",
//       "Ensure efficient communication between technical and operational teams"
//     ],
//   },
//   {
//     jobId: "iTC0007",
//     title: "Kickstart Your Career in Cybersecurity! ",
//     Role: "Cybersecurity Trainee ",
//     location: "Toledo, Ohio, USA ",
//     employmentType: "Full-Time",
//     jobCategory: "Technology",
//     jobDescriptionUrl: "/iTC0007",
//     Experience: "Fresher",
//     reportsTo: '',
//     positionOverview: "",
//     objectives: [
//       "Assist in daily security monitoring, access reviews, incident documentation, and ISO 27001 compliance activities. Gain hands-on experience working with Entra ID, Microsoft 365, and enterprise security operations.",
//     ],
//   },
//   {
//     jobId: "iTC0008",
//     title: "Want to run bold marketing in the USA?",
//     Role: "Marketing Executive ",
//     location: "Toledo, Ohio, US",
//     employmentType: "Full-Time",
//     jobCategory: "Sales",
//     jobDescriptionUrl: "/iTC0008",
//     Experience: "3–5 years marketing experience required.",
//     reportsTo: '',
//     positionOverview: "",
//     objectives: [
//       "3–5 years marketing experience required.",
//       "Champion creative campaigns, drive brand growth, and lead digital strategies."
//     ],
//   },
//   {
//     jobId: "iTC0009",
//     title: "Growing Our Sales Presence in North America",
//     Role: "Sales Executive",
//     location: "Toledo, Ohio, USA ",
//     employmentType: "Part-Time",
//     jobCategory: "Sales",
//     jobDescriptionUrl: "/iTC0009",
//     Experience: "3–5 years in sales ",
//     reportsTo: '',
//     positionOverview: "",
//     objectives: [
//       "Prospect, pitch, and win clients using proven sales strategies ",
//       "Build and manage a strong sales pipeline ",
//       "Drive revenue growth across North America markets ",
//       "Collaborate with cross-functional teams to deliver client success "
//     ],
//   },
//   {
//     jobId: "iTC00010",
//     title: "Step in as the right hand to global leadership. Your next move starts here.",
//     Role: "Executive Assistant to CXO Leadership",
//     location: "Toledo, Ohio, USA",
//     employmentType: "Part-Time",
//     jobCategory: "Support",
//     jobDescriptionUrl: "/iTC00010",
//     Experience: "3–7 years",
//     reportsTo: '',
//     positionOverview: "",
//     objectives: [
//       "Provide high-level administrative and strategic support to CXO and global leadership teams",
//       "Manage executive calendars, priorities, and cross-timezone coordination",
//       "Handle confidential communication and executive-level documentation",
//       "Prepare briefing notes, presentations, reports, and follow-up trackers",
//       "Coordinate strategic meetings and drive cross-functional alignment",
//       "Support leadership with key projects, research, and data-driven decision-making",
//       "Manage travel, events, stakeholder engagements, and critical operational requirements"
//     ],
//   },
//   {
//     jobId: "iTC00011",
//     title: "Passionate about creating exceptional customer experiences in the USA?",
//     Role: "Customer Support Executive",
//     location: "Toledo, Ohio, USA",
//     employmentType: "Part-Time",
//     jobCategory: "Support",
//     jobDescriptionUrl: "/iTC00011",
//     Experience: "5–8 years",
//     reportsTo: "Customer Support Manager",
//     positionOverview:
//       "We are seeking a dedicated Customer Support Executive to deliver exceptional customer experiences across multiple channels. The role involves resolving customer queries, documenting cases, and contributing to service-desk and onboarding improvements.",
//     objectives: [
//       "Engage with customers via calls, email, chat, and ticketing systems",
//       "Resolve queries with accuracy, clarity, and strong follow-through",
//       "Document cases, track issues, and escalate when required",
//       "Maintain up-to-date product knowledge",
//       "Support onboarding, FAQs, and service desk enhancements",
//       "Ensure high levels of customer satisfaction"
//     ],
//   },
//   {
//     jobId: "iTC00012",
//     title: "Want to drive tech innovation in the USA?",
//     Role: "Technology Executive",
//     location: "Toledo, Ohio, USA",
//     employmentType: "Part-Time",
//     jobCategory: "Technology",
//     jobDescriptionUrl: "/iTC00012",
//     Experience: "4–5 years",
//     reportsTo: "Head of Technology",
//     positionOverview:
//       "We are looking for a Technology Executive to support day-to-day operations across development, infrastructure, support, and security. The role includes coordinating project delivery, preparing reports and dashboards, supporting vendor management, and ensuring efficient IT governance.",
//     objectives: [
//       "Support daily operations across development, infrastructure, support, and security",
//       "Coordinate project timelines, deliverables, and cross-team alignment",
//       "Prepare dashboards, reports, and leadership updates",
//       "Assist with vendor coordination, procurement, and IT governance",
//       "Support documentation, audits, tools evaluation, and asset/license tracking",
//       "Drive efficient communication between teams and support strategic tech initiatives"
//     ],
//   },
//   {
//     jobId: "iTC00013",
//     title: "Want to run bold marketing in the USA? ",
//     Role: "Marketing Executive",
//     location: "Toledo, Ohio, USA ",
//     employmentType: "Part-Time",
//     jobCategory: "Sales",
//     jobDescriptionUrl: "/iTC00013",
//     Experience: "3–5 years",
//     reportsTo: '',
//     positionOverview: "",
//     objectives: [
//       "Champion creative campaigns, drive brand growth, and lead digital strategies. ",
//       " 3–5 years marketing experience required. "
//     ],
//   },



//   // {
//   //   jobId: "iTC0004",
//   //   title: "",
//   //   Role: "",
//   //   location: "",
//   //   employmentType: "",
//   //   jobCategory: "",
//   //   jobDescriptionUrl: "/iTC0004",
//   //   Experience: "",
//   //   reportsTo: '',
//   //   positionOverview: "",
//   //   objectives: [
//   //     "",
//   //   ],
//   // },
// ];


// import { iterateObserversSafely } from "@apollo/client/utilities";
// import { title } from "process";

export const jobs = [
  {
    jobId: "iTC0001",
    title: "SharePoint - Technical Lead",
    location: "Bengaluru, India",
    employmentType: "Full Time",
    jobCategory: "Insurance",
    jobDescriptionUrl: "/iTC0001",
    reportsTo: 'Enterprise Solutions Architect – AI Solutions',
    positionOverview: "The SharePoint Tech Lead will be responsible for the end-to-end design, development, and deployment of SharePoint solutions, ensuring seamless collaboration and business process automation. The role will involve architecting SharePoint Online and on-premises environments, integrating AI-native workflows, and ensuring adherence to governance, security, and compliance standards.",
    objectives: [
      "Architect and optimize SharePoint environments, ensuring seamless integration across cloud and hybrid ecosystems.",
      "Lead SharePoint migration, customization, workflow automation, and AI-native business process improvements.",
      "Implement SharePoint governance, compliance, and security best practices for enterprise-wide collaboration.",
      "Enhance SharePoint performance, scalability, and usability through modernized development and automation practices."
    ],
    responsibilities: [
      {
        title: 'SharePoint Architecture & Solution Design',
        items: [
          "Lead the design, architecture, and implementation of SharePoint Online and on-premises solutions.",
          "Architect enterprise-wide collaboration portals, content management systems, and workflow automation tools.",
          "Design hybrid SharePoint environments, ensuring seamless integration with Microsoft 365, Power Platform, and third-party solutions.",
          "Define SharePoint security models, role-based access controls (RBAC), and compliance frameworks."
        ]
      },
      {
        title: "Development, Customization & Integration",
        items: [
          "Develop custom SharePoint applications, workflows, and web parts using SharePoint Framework (SPFx), Power Automate, and Power Apps.",
          "Implement document management, metadata taxonomy, and search-driven solutions for enterprise knowledge management.",
          "Integrate SharePoint with Microsoft Teams, Azure AI, Microsoft Graph, and business intelligence platforms.",
          "Optimize SharePoint-based AI automation, chatbots, and collaboration intelligence for business productivity."
        ]
      },
      {
        title: "Governance, Security & Compliance",
        items: [
          "Establish and enforce SharePoint governance policies, ensuring compliance with GDPR, HIPAA, BFSI security regulations.",
          "Implement SharePoint backup, disaster recovery, data retention, and eDiscovery policies.",
          "Define security policies, access controls, encryption, and multi-factor authentication (MFA) for SharePoint environments."
        ]
      },
      {
        title: "Migration & Performance Optimization",
        items: [
          "Lead SharePoint migrations from on-premises to SharePoint Online, legacy systems to modern collaboration platforms.",
          "Optimize SharePoint performance, search indexing, and site scalability through modern best practices.",
          "Automate site provisioning, document approvals, workflow orchestration, and AI-driven content recommendations."
        ]
      },
      {
        title: "Collaboration, Training & Adoption",
        items: [
          "Provide technical leadership, mentorship, and training to SharePoint developers and administrators.",
          "Work closely with business teams, project managers, and stakeholders to drive SharePoint adoption.",
          "Enable self-service automation and no-code/low-code solutions for end-users using Power Platform. "
        ]
      }
    ],
    performanceIndicators: [
      {
        title: 'Technology & SharePoint Performance',
        items: [
          "SharePoint Uptime & Availability: Maintain 99.99% availability of SharePoint services.",
          "Migration Success Rate: Ensure 100% error-free migration from legacy systems to SharePoint Online.",
          "Workflow Automation Efficiency: Reduce manual approval processes by 50%+ using Power Automate."
        ]
      },
      {
        title: 'Governance, Security & Compliance',
        items: [
          "Security Incident Prevention: Ensure zero major security breaches within SharePoint environments.",
          "Compliance Adherence: Maintain 100% compliance with BFSI, healthcare, and industry security standards.",
          "Data Governance Implementation: Ensure 100% alignment with enterprise data retention policies."
        ]
      },
      {
        title: "Business & Collaboration Impact",
        items: [
          "SharePoint Adoption Growth: Increase SharePoint and Microsoft 365 adoption by 40%+ year-over-year.",
          "Knowledge Management & Search Optimization: Improve content discoverability by 50% using AI-driven search.",
          "AI Automation & Efficiency Gains: Reduce document approval times by 30%+ through AI-native workflow automation."
        ]
      }
    ],
    qualifications: [
      "10+ years of experience in SharePoint architecture, development, governance, and enterprise collaboration solutions.",
      "Strong expertise in SharePoint Online, SharePoint Server (2016/2019), Microsoft 365, and Power Platform.",
      "Hands-on experience in SharePoint Framework (SPFx), Power Automate, Power Apps, and Microsoft Graph API.",
      "Deep knowledge of SharePoint security, governance, compliance, and data retention policies.",
      "Proven expertise in SharePoint migration, content management, and AI-driven automation workflows.",
      "Experience with Azure AI, Microsoft Teams, OneDrive, and business intelligence integrations."
    ],
    optionalSkills: [
      "Experience with AI-native document management, chatbots, and automated knowledge retrieval.",
      "Certifications: Microsoft Certified: SharePoint Administrator Associate, Microsoft 365 Certified: Developer Associate.",
      "Familiarity with hybrid SharePoint deployments, federated search, and cognitive services.",
      "Experience in collaboration platform transformation for BFSI, healthcare, and manufacturing industries.",
    ]


  },
  // {
  //   jobId: "iTC0002",
  //   title: "Assistant to the Co-Founder & Global CTO",
  //   location: "Bengaluru, India",
  //   employmentType: "Full Time",
  //   jobCategory: "Executive Assistant",
  //   jobDescriptionUrl: "/iTC0002",
  // },
  // {
  //   jobId: "iTC0003",
  //   title: "Software Architect",
  //   location: "Bengaluru, India",
  //   employmentType: "Full Time",
  //   jobCategory: "Product Development",
  //   jobDescriptionUrl: "/career/iTC0003",
  // },
  // {
  //   jobId: "iTC0004",
  //   title: "Senior Executive - Placement (Employee Benefit)",
  //   location: "Bengaluru, India",
  //   employmentType: "Full Time",
  //   jobCategory: "Insurance",
  //   jobDescriptionUrl: "/career/iTC0004",
  // },
  // {
  //   jobId: "iTC0005",
  //   title: "Executive Manager - Marketing",
  //   location: "Bengaluru, India",
  //   employmentType: "Full Time",
  //   jobCategory: "Marketing & Sales",
  //   jobDescriptionUrl: "/career/iTC0005",
  // },
  // {
  //   jobId: "iTC0006",
  //   title: "UI/UX Designer",
  //   location: "Bengaluru, India",
  //   employmentType: "Full Time",
  //   jobCategory: "Product Development",
  //   jobDescriptionUrl: "/career/iTC0006",
  // },
  // {
  //   jobId: "iTC0007",
  //   title: "IT Sales Manager",
  //   location: "Bengaluru, India",
  //   employmentType: "Full Time",
  //   jobCategory: "Sales",
  //   jobDescriptionUrl: "/career/iTC0007",
  // },
];