import React, { useState } from "react";
import awsFoundations from "../assets/img/aws-academy-cloud-foundations.png";
import awsGetStarted from "../assets/img/aws-getting-started-with-cloud-ops.png";
import awsGetStartedCompute from "../assets/img/aws-getting-started-with-compute.png";
import awsGetStartedNetworking from "../assets/img/aws-getting-started-with-networking.png";
import awsGetStartedSecurity from "../assets/img/aws-getting-started-with-security.png";
import awsGetStartedServerless from "../assets/img/aws-getting-started-with-serverless.png";
import awsGetStartedStorage from "../assets/img/aws-getting-started-with-storage.png";
import awsIntroCloud101 from "../assets/img/aws-introduction-to-cloud-101.png";
import awsFoundationsCertificate from "../assets/img/AWS-graduate-Academy-Cloud-Foundations.png";

const awsCertificates = [
  { src: awsFoundations, url: "https://www.credly.com/badges/5c975e2a-5829-4b5f-9fd0-81e33e00a7d5/public_url", alt: "AWS Foundations", title: "AWS Foundations" },
  { src: awsGetStarted, url: "https://www.credly.com/badges/ea5a1b5c-d9d6-400e-8e9a-d5ccbc792683/public_url", alt: "AWS Getting Started Cloud Ops", title: "AWS Cloud Ops" },
  { src: awsGetStartedCompute, url: "https://www.credly.com/badges/18bde2d6-8ec9-4129-8f07-055e143c25f3/public_url", alt: "AWS Compute", title: "AWS Compute" },
  { src: awsGetStartedNetworking, url: "https://www.credly.com/badges/81de56b8-be2e-4f18-8105-c65296abe6ed/public_url", alt: "AWS Networking", title: "AWS Networking" },
  { src: awsGetStartedSecurity, url: "https://www.credly.com/badges/c23da6a1-9d7f-40d4-8d06-f6b922ef92a6/public_url", alt: "AWS Security", title: "AWS Security" },
  { src: awsGetStartedServerless, url: "https://www.credly.com/badges/64b4c12f-8146-405f-9e28-8303c78f5240/public_url", alt: "AWS Serverless", title: "AWS Serverless" },
  { src: awsGetStartedStorage, url: "https://www.credly.com/badges/1221e47b-ae36-4275-8a42-3962a528afb1/public_url", alt: "AWS Storage", title: "AWS Storage" },
  { src: awsIntroCloud101, url: "https://www.credly.com/badges/51091672-5109-43af-9e85-efdcf9ac4274/public_url", alt: "AWS Cloud 101", title: "AWS Cloud 101" },
  { src: awsFoundationsCertificate, url: "https://www.credly.com/badges/5c975e2a-5829-4b5f-9fd0-81e33e00a7d5/public_url", alt: "AWS Foundations Certificate", title: "AWS Foundations Certificate" }
];

const Certificates = () => {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <section id="certificates" className="certificates-container">
      <h3>Certificates</h3>
      <div className="tab-header">
        <button
          className={`tab-button ${currentTab === 0 ? "active" : ""}`}
          onClick={() => setCurrentTab(0)}
        >
          AWS
        </button>
        <button
          className={`tab-button ${currentTab === 1 ? "active" : ""}`}
          onClick={() => setCurrentTab(1)}
        >
          Azure
        </button>
      </div>
      <div className="tab-content">
        <div className={`certificates-panel ${currentTab === 0 ? "active" : ""}`}>
          <ul className="certificates">
            {awsCertificates.map((cert, index) => (
              <li key={index}>
                <a href={cert.url} target="_blank" rel="noopener noreferrer">
                  <img src={cert.src} alt={cert.alt} title={cert.title} width="128" height="128" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className={`certificates-panel ${currentTab === 1 ? "active" : ""}`}>
          <p>Azure certificates coming soon!</p>
        </div>
      </div>
    </section>
  );
};

export default Certificates;