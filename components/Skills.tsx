import { technologies } from "@/constants";
import { styles } from "@/styles";
import React from "react";
import { MotionDiv, MotionP } from "@/motion";

import { fadeIn, textVariant } from "@/utils/motion";
import { BallCanvas } from "./canvas/BallCanvas";

const Skills = () => {
  return (
    <div className="px-2 md:px-5" id="skill">
      <MotionDiv variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My skills</p>
        <h2 className={`${styles.sectionHeadText}`}>Skills</h2>
      </MotionDiv>
      <MotionP
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] mb-10"
      >
        As a proficient full-stack developer, my expertise extends to working
        with cutting-edge technologies such as Next.js and Tailwind CSS and Python for backend development
        and SAP S/4HANA for data integration, adeptly
        crafting responsive and visually appealing web applications. My command
        over Git and GitHub underscores my collaborative spirit and effective
        version control, while my skills in Framer Motion enable dynamic
        animation integration. My foundational strength in HTML, CSS, and
        JavaScript, bolstered by an understanding of UX/UI principles, ensures
        creation of accessible and user-friendly designs.
      </MotionP>
      <div className={`${styles.padding} max-w-[82rem] mx-auto  `}>
        <div className="flex flex-row flex-wrap justify-center gap-10">
          {technologies.map((tech) => (
            <div className="w-28 h-28" key={tech.name}>
              <BallCanvas img={tech.icon} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
