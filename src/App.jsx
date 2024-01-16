import React from "react";
import "./App.css";

import {
  CloudArrowUpIcon,
  CodeBracketIcon,
  LockClosedIcon,
  ChatBubbleBottomCenterIcon,
  BriefcaseIcon,
} from "@heroicons/react/20/solid";



function App() {
  const education = [
    {
      degree: "Bachelor in Economics & Business Studies",
      school: "University of Delhi, MLNC",
      year: "2020 - 2023",
      description:
        "Studied computer science with a focus on software development and algorithms.",
    },
    {
      degree: "Certified as Practitioner, pursuing Associate",
      school: "Amazon Web Services",
      year: "2021 - 2023",
      description:
        "Completed an advanced program in computer science with a specialization in artificial intelligence.",
    },
    {
      degree: "Diploma in Cloud Computing | Linux",
      school: "N.I.I.T Technology",
      year: "2022 - 2023",
      description:
        "Studied computer science with a focus on software development and algorithms.",
    },
    {
      degree: "Degree in MCA (pursuing Remotely)",
      school: "Amity University",
      year: "2023 - 2025",
      description:
        "Completed an advanced program in computer science with a specialization in artificial intelligence.",
    },

    // Add more education entries as needed
  ];

  const projects = [
    {
      title: "Live Broadcasting Optimization",
      role: "Web Architect, Developer, Deployment Specialist",

      description:
        "Redesigned, developed, and deployed a cost-efficient live broadcasting web architecture on YouTube, replacing Microsoft servers with AntMedia server. Achieved an 85-95% cost reduction, optimized resource utilization, and introduced a centralized dashboard for streamlined broadcast management.",
      link: "https://iefan.medium.com/how-to-use-ant-media-server-for-24-7-youtube-live-streaming-0c71af5863b7",
    },
    {
      title: "Lightning Paywall Content Monetization",
      role: "Full-stack Developer, System Architect",

      description:
        "Developed a versatile content monetization platform with Lightning paywall on Amazon S3. Implemented Lightning Network transactions, integrated VPCs, and encryption for security. Established auto-scaling and disaster management for resource optimization.",
      link: "https://iefan.medium.com/unveiling-the-future-of-content-monetization-decentralized-lightning-paywall-2e97bed5a8aa",
    },
    {
      title: "Cloud Migration: Data center  to cloud (AWS)",
      objective:
        "Migrated a legacy application to AWS for scalability and cost-efficiency.",
      accomplishments:
        "Identified bottlenecks, reduced costs by 30%, boosted performance by 50%, and ensured seamless data transfer.",
      responsibilities:
        "Designed secure AWS VPC, collaborated cross-functionally, and provided ongoing support.",
      link: "https://iefan.medium.com/cloud-infrastructure-automation-project-delta-77c670a57566",
    },
    {
      title: "Cloud Infrastructure Automation: Project Delta",
      objective:
        "Automated infrastructure to enhance scalability and operational efficiency.",
      accomplishments:
        "Implemented IaC, orchestrated CI/CD pipelines, reduced deployment time by 40%, and improved reliability.",
      responsibilities:
        "Collaborated with development teams, integrated monitoring, and conducted regular script reviews.",
      link: "https://iefan.medium.com/cloud-infrastructure-automation-project-delta-77c670a57566",
    },
  ];

  // Note: Add more projects as needed

  const experience = [
    {
      title: "Cloud Architect",
      company: "Clients/Corps",
      year: "2021 - Present ",
      description:
        "Designed and implemented scalable cloud architectures for various clients. Developed and deployed robust applications on cloud platforms, focusing on high availability and performance.",
      icon: BriefcaseIcon,
    },

    {
      title: "Developer",
      company: "Nostr Protocol",
      year: "2022 - Present",
      description:
        "Key member of the Nostr Protocol core development team, contributing to the design and implementation of permissionless solutions. Played a crucial role in building and optimizing core functionalities, including the development of backup and broadcast service.",
      icon: BriefcaseIcon,
    },

    {
      title: "Security & System Developer",
      company: "Clients/Corps",
      year: "2021 - Present",
      description:
        "Contributed to the development of scalable and efficient web applications. Worked on ensuring the security and stability of systems. Collaborated with cross-functional teams to implement security measures and optimize overall system performance.",
      icon: BriefcaseIcon,
    },
    // Add more experience items as needed
  ];

  const features = [
    {
      name: "Cloud Architect:",
      description: "AWS, Python, Security, Database Migration, Scaling & more",

      icon: CloudArrowUpIcon,
    },
    {
      name: "Development:",
      description: "Python, JavaScript, Django, Flask, React, Nextjs & more",
      icon: CodeBracketIcon,
    },
    {
      name: "Security & System:",
      description: "Ubuntu, CentOS, RedHat, Server Management & more",
      icon: LockClosedIcon,
    },
    {
      name: "Machine Learning Modals:",
      description:
        "Model Development, Model Deployment, Model Training, Resource Management & more",
      icon: ChatBubbleBottomCenterIcon,
    },
  ];

  return (
    <div className="bg-[#111113] text-white flex justify-center items-center ">
      <div className="max-w-6xl mx-4">
        <header className="py-0">
          <div className="container m-4 flex  items-center">
            <div className="w-20 h-20 rounded-full overflow-hidden ring-2 ring-primary ring-offset-base-100 ring-offset-2">
              <img
                src="https://imgproxy.snort.social/o06-hA_kdgGpgkWHYlsWu6_gSLVG-rLMLPW5FhOaDPY//aHR0cHM6Ly9ub3N0ci5idWlsZC9pL2E3YmI1MzNlYzI5NzljYjgwODMxM2I4MGI3ZGU3OGU1MWRkZTk0ZTcxODJlNzIyMzhkMWVkYzFhNjNlZWNhYjQud2VicA"
                alt="Profile Picture"
              />
            </div>
            <div className="ml-4">
              <h1 className="text-4xl font-bold">iefan</h1>
              <p className="text-[#b0b4ba] text-lg font-semibold">
                Cloud, Code & Security
              </p>
            </div>
          </div>
        </header>
        <div className="divider"></div>

        <div className="overflow-hidden py-2 sm:py-2">
          <div className="mx-auto max-w-7xl px-4 lg:px-4">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 sm:gap-y-6 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pr-8 lg:pt-2">
                <div className="lg:max-w-lg">
                  <h2 className="font-semibold text-2xl leading-7 text-indigo-600">
                    About Me
                  </h2>

                  <p className="my-2 text-lg leading-8 text-gray-400">
                    I am a cloud solution architect, Linux administrator, and
                    developer with years of experience in creating innovative
                    cloud architectures, managing Linux servers, and developing
                    real-world applications. <br></br>
                    <button
                      className="btn bg-[#4f46e5] rounded-md"
                      onClick={() =>
                        document.getElementById("my_modal_3").showModal()
                      }
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12 2.25c-2.429 0-4.817.178-7.152.521C2.87 3.061 1.5 4.795 1.5 6.741v6.018c0 1.946 1.37 3.68 3.348 3.97.877.129 1.761.234 2.652.316V21a.75.75 0 0 0 1.28.53l4.184-4.183a.39.39 0 0 1 .266-.112c2.006-.05 3.982-.22 5.922-.506 1.978-.29 3.348-2.023 3.348-3.97V6.741c0-1.947-1.37-3.68-3.348-3.97A49.145 49.145 0 0 0 12 2.25ZM8.25 8.625a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Zm2.625 1.125a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875-1.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      Contact
                    </button>
                  </p>
                  <div className="divider"></div>
                  <dl className="mt-4 max-w-xl space-y-2 text-base leading-7 text-gray-500 lg:max-w-none">
                    {features.map((feature) => (
                      <div key={feature.name} className="relative pl-9">
                        <dt className="inline font-semibold text-gray-300">
                          <feature.icon
                            className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                            aria-hidden="true"
                          />
                          {feature.name}
                        </dt>{" "}
                        <dd className="inline">{feature.description}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
              <section className="py-2">
                <div className="mx-auto max-w-7xl px-2 lg:px-2">
                  <h2 className="font-semibold text-2xl leading-7 text-indigo-600">
                    Experience
                  </h2>
                  <div className="mt-4 grid gap-6 lg:grid-cols-1">
                    {experience.map((item, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <item.icon className="h-5 w-5 text-indigo-600" />
                          <span className="font-semibold">{item.title}</span>
                        </div>
                        <p className="text-gray-400">
                          {item.company} | {item.year}
                        </p>
                        <p className="text-gray-500 text-sm">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

        <div className="divider"></div>

        <section className="py-2">
          <div className="mx-auto max-w-7xl px-2 lg:px-2">
            <h2 className="font-semibold text-2xl leading-7 text-indigo-600">
              Education
            </h2>
            <div className="mt-4 grid gap-6 lg:grid-cols-2">
              {education.map((edu, index) => (
                <div key={index}>
                  <h3 className="text-md font-bold">{edu.school}</h3>
                  <p className="text-gray-400">
                    {edu.degree} | {edu.year}
                  </p>
                  <p className="text-gray-500   mt-2">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="divider"></div>

        <section className="py-2">
          <div className="mx-auto max-w-7xl px-2 lg:px-2">
            <h2 className="font-semibold text-2xl leading-7 text-indigo-600">
              Projects
            </h2>
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              {projects.map((project, index) => (
                <div key={index}>
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  {project.role && (
                    <p className="text-gray-500 mt-1">
                      <span className="font-semibold">Role:</span>{" "}
                      {project.role}
                    </p>
                  )}
                  {project.duration && (
                    <p className="text-gray-500 mt-1">
                      <span className="font-semibold">Duration:</span>{" "}
                      {project.duration}
                    </p>
                  )}
                  {project.description && (
                    <p className="text-gray-400 mt-2">{project.description}</p>
                  )}
                  {project.objective && (
                    <p className="text-gray-500 mt-2">
                      <span className="font-semibold">Objective:</span>{" "}
                      {project.objective}
                    </p>
                  )}
                  {project.accomplishments && (
                    <p className="text-gray-500 mt-2">
                      <span className="font-semibold">Accomplishments:</span>{" "}
                      {project.accomplishments}
                    </p>
                  )}
                  {project.responsibilities && (
                    <p className="text-gray-500 mt-2">
                      <span className="font-semibold">Responsibilities:</span>{" "}
                      {project.responsibilities}
                    </p>
                  )}
                  {project.link && (
                    <p className="text-blue-500 mt-2">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Project
                      </a>
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <dialog id="my_modal_3" className="modal">
          <div className="modal-box p-8 bg-[#111113] rounded-lg shadow-md">
            <form method="dialog">
              {/* Close button */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4 text-gray-500 hover:text-gray-700">
                ✕
              </button>
            </form>
            {/* Contact information */}
            <h3 className="font-bold text-2xl mb-4 text-gray-300">Contact</h3>
            {/* Replace the following placeholders with your actual contact details */}
            <p className="text-gray-400 mb-2">Email: realiefan@outlook.com</p>
            <p className="text-gray-400 mb-2">Phone: 8660700104</p>
            <p className="text-gray-400 mb-4">
              LinkedIn: linkedin.com/in/realiefan
            </p>
            <p className="text-gray-400 mb-4">Medium: iefan.medium.com</p>
            {/* Email button */}
            <a
              href="mailto:realiefan@outlook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-gradient-to-r from-[#667eea] to-[#764ba2] hover:from-[#764ba2] hover:to-[#667eea] text-white rounded-md py-2 px-4 transition duration-300 ease-in-out"
            >
              Email me
            </a>
          </div>
        </dialog>

        <div>
     
        </div>

        {/* Add more sections as needed, e.g., Education, Contact, etc. */}

        <div className="divider"></div>
        <footer className="m-2 py-2 ">
          <div className="container mx-auto text-center">
            <p>&copy; 2024 iefan. All Rights Reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
