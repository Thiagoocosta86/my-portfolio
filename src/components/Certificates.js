import React, { useState } from "react";

import { Navigation, Pagination} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

/*AWS Certificates*/
import awsFoundations from "../assets/img/aws-academy-cloud-foundations.png";
import awsGetStarted from "../assets/img/aws-getting-started-with-cloud-ops.png";
import awsGetStartedDatabases from "../assets/img/aws-getting-started-with-databases.png";
import awsGetStartedCompute from "../assets/img/aws-getting-started-with-compute.png";
import awsGetStartedNetworking from "../assets/img/aws-getting-started-with-networking.png";
import awsGetStartedSecurity from "../assets/img/aws-getting-started-with-security.png";
import awsGetStartedServerless from "../assets/img/aws-getting-started-with-serverless.png";
import awsGetStartedStorage from "../assets/img/aws-getting-started-with-storage.png";
import awsIntroCloud101 from "../assets/img/aws-introduction-to-cloud-101.png";
import awsCertifiedCloudPractitioner from "../assets/img/aws-certified-cloud-practitioner.png";

/*Azure Certificates*/
import azureDescCloudCompu from "../assets/img/azure-DescribeCloudComputing.png";
import azureDescCloudServices from "../assets/img/azure-DescribeCloudServiceTypes.png";
import azureDescBenef from "../assets/img/azure-DescribeBenefitsOfCloudServices.png";

/*CCT Certificates*/
import cctCyberSecurity from "../assets/img/cyberSecurityEssentials.png";

const awsCertificates = [
  { src: awsCertifiedCloudPractitioner, url: "https://www.credly.com/badges/438bea28-accb-4aec-9005-2d187d58b1fa/public_url", alt: "AWS Cloud Practitioner", title: "AWS Cloud Practitioner" },
  { src: awsFoundations, url: "https://www.credly.com/badges/5c975e2a-5829-4b5f-9fd0-81e33e00a7d5/public_url", alt: "AWS Foundations", title: "AWS Foundations" },
  { src: awsGetStarted, url: "https://www.credly.com/badges/ea5a1b5c-d9d6-400e-8e9a-d5ccbc792683/public_url", alt: "AWS Getting Started Cloud Ops", title: "AWS Cloud Ops" },
  { src: awsGetStartedDatabases, url: "https://www.credly.com/badges/5f403a28-bb2d-446f-b4dd-9ffafaaf54d6/public_url", alt: "AWS Getting Started Databases", title: "AWS Databases" },
  { src: awsGetStartedCompute, url: "https://www.credly.com/badges/18bde2d6-8ec9-4129-8f07-055e143c25f3/public_url", alt: "AWS Compute", title: "AWS Compute" },
  { src: awsGetStartedNetworking, url: "https://www.credly.com/badges/81de56b8-be2e-4f18-8105-c65296abe6ed/public_url", alt: "AWS Networking", title: "AWS Networking" },
  { src: awsGetStartedSecurity, url: "https://www.credly.com/badges/c23da6a1-9d7f-40d4-8d06-f6b922ef92a6/public_url", alt: "AWS Security", title: "AWS Security" },
  { src: awsGetStartedServerless, url: "https://www.credly.com/badges/64b4c12f-8146-405f-9e28-8303c78f5240/public_url", alt: "AWS Serverless", title: "AWS Serverless" },
  { src: awsGetStartedStorage, url: "https://www.credly.com/badges/1221e47b-ae36-4275-8a42-3962a528afb1/public_url", alt: "AWS Storage", title: "AWS Storage" },
  { src: awsIntroCloud101, url: "https://www.credly.com/badges/51091672-5109-43af-9e85-efdcf9ac4274/public_url", alt: "AWS Cloud 101", title: "AWS Cloud 101" }
  
];


const azureCertificates = [
  { src: azureDescCloudCompu, url: "https://learn.microsoft.com/api/achievements/share/en-us/ThiagoCosta-9234/HAV63VE8?sharingId=459220D993E9D11A", alt: "Azure Cloud Computing", title: "Azure Cloud Computing" },
  { src: azureDescCloudServices, url: "https://learn.microsoft.com/en-us/users/thiagocosta-9234/achievements/aptvkha7", alt: "Azure Cloud Services", title: "Azure Cloud Services" },
  { src: azureDescBenef, url: "https://learn.microsoft.com/api/achievements/share/en-us/ThiagoCosta-9234/ZK5QK6E2?sharingId=459220D993E9D11A", alt: "Azure Cloud Benefits", title: "Azure Cloud Benefits" }

];

const cctCertificates = [
  
  { src: cctCyberSecurity, url: "https://moodle.cct.ie/badges/badge.php?hash=54e623dc4925784a6f6aeaa7c7ae6249c4eca139", alt: "Cyber Security Essentials", title: "Cyber Security Essentials" }

];


const Certificates = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const renderSwiperSlides = (certificates) =>
    certificates.map((cert, index) => (
      <SwiperSlide key={index}>
        <a
          className="card-link"
          href={cert.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={cert.src} alt={cert.alt} title={cert.title} width="300" height="200" />
        </a>
      </SwiperSlide>
    ));

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
        <button
          className={`tab-button ${currentTab === 2 ? "active" : ""}`}
          onClick={() => setCurrentTab(2)}
        >
          CCT
        </button>
      </div>
      <div className="tab-content">
        <div className={`certificates-panel ${currentTab === 0 ? "active" : ""}`}>
          <Swiper
            className="aws certificates"
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true, dynamicBullets: true }}
            breakpoints={{
              768: {
                slidesPerView: 1, // Show 1 slide for screen widths <= 768px
              },
              992: {
                slidesPerView: 2, // Show 2 slide for screen widths <= 992px
              },
              1081: {
                slidesPerView: 3, // Show 2 slides for screen widths > 1081px
              },
            }}
          >
            {renderSwiperSlides(awsCertificates)}
          </Swiper>

        </div>

        <div className={`certificates-panel ${currentTab === 1 ? "active" : ""}`}>
          <Swiper className="azure certificates"
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true, dynamicBullets: true }}
            breakpoints={{
              768: {
                slidesPerView: 1, // Show 1 slide for screen widths <= 768px
              },
              992: {
                slidesPerView: 2, // Show 2 slide for screen widths <= 992px
              },
              1081: {
                slidesPerView: 3, // Show 2 slides for screen widths > 1081px
              },
            }}
          >
            {renderSwiperSlides(azureCertificates)}
          </Swiper>
          
        </div>
        <div className={`certificates-panel ${currentTab === 2 ? "active" : ""}`}>
          <Swiper className="cct certificates"
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true, dynamicBullets: true }}
            breakpoints={{
              768: {
                slidesPerView: 1, // Show 1 slide for screen widths <= 768px
              },
              992: {
                slidesPerView: 2, // Show 2 slide for screen widths <= 992px
              },
              1081: {
                slidesPerView: 3, // Show 2 slides for screen widths > 1081px
              },
            }}
          >
            {renderSwiperSlides(cctCertificates)}
          </Swiper>

        </div>
      </div>
    </section>
  );
};

export default Certificates;
