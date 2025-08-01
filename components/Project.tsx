import React from "react";
import Link from "./Links";
import { MotionDiv } from "@/motion";
import { textVariant } from "@/utils/motion";
import { styles } from "@/styles";

const Project = () => {
  return (
    <div className=" max-w-7xl mx-auto px-2 md:px-5  ">
      <MotionDiv variants={textVariant()} id="project" className="pt-10">
        <p className={`${styles.sectionSubText}`}>PROJECT</p>
        <h2 className={`${styles.sectionHeadText}`}>My Project</h2>
      </MotionDiv>
      <div>
      <Link
          heading="Team Dashboard Website"
          imgSrc="/images/team-dashboard.png"
          href="https://tejapendem.github.io/dashboard-frontend/#/auth"
          subheading="Click here for Live Demo"
        />
        <Link
          heading="AI Resume Screening System"
          imgSrc="/images/resume-screening.png"
          href="https://resume-scoring-frontend.vercel.app/"
          subheading="Click here for Live Demo"
        />
       
        <Link
          heading="Brain Tumor Detection"
          imgSrc="/images/brain-tumor.png"
          href="https://brain-tumor.netlify.app/"
          subheading="Click here for Live Demo"
        />
        <Link
          heading="ATS Resume Checker"
          imgSrc="/images/ats.png"
          href="https://ats-resume-checker-one.vercel.app/"
          subheading="Click here for Live Demo"
        />

        <Link
          heading="Portfolio Generator"
          imgSrc="/images/portfolio.png"
          href="https://portfolio-generator-orcin.vercel.app/"
          subheading="Click here for Live Demo" 
        />
      </div>
    </div>
  );
};

export default Project;
