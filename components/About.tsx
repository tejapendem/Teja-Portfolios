// "use client";
// import React from "react";

// import { services } from "@/constants";
// import { motion } from "framer-motion";
// import { fadeIn, textVariant } from "@/utils/motion";
// import { styles } from "@/styles";
// import Image from "next/image";

// const ServiceCard = ({ icon, title, index }: any) => {
//   return (
//     <div className="xs:w-[250px]   ">
//       <motion.div
//         variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
//         className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
//       >
//         <div className="bg-tertiary rounded-[20px] py-5  px-12 min-h-[280px] flex flex-col items-center justify-evenly">
//           <Image
//             src={icon}
//             alt={title}
//             width={64}
//             height={64}
//             className="object-contain"
//           />
//           <h3 className="text-white text-[20px] font-bold text-center">
//             {title}
//           </h3>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// const About = () => {
//   return (
//     <div className="Wrapper Div px-2 md:px-5">
//       <motion.div variants={textVariant()}>
//         <p className={`${styles.sectionSubText}`}>INTRODUCTION</p>
//         <h2 className={`${styles.sectionHeadText}`}>About Me</h2>
//       </motion.div>

//       <motion.p
//         variants={fadeIn("", "", 0.1, 1)}
//         className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
//       >
//         👋 Hi, I&apos;m Teja Pendem from Hyderabad, Telangana — currently working as a Backend Developer at VerosAI with 1 year of hands-on experience. With extensive hands-on experience in Python, SAP S/4HANA data integration, and REST API development,I have successfully contributed to projects that reduced integration errors by 30% and streamlined enterprise data migration.✨💻
//       </motion.p>
//       <div className="mt-20 flex flex-wrap gap-10">
//         {services.map((services, index) => (
//           <ServiceCard key={services.title} {...services} index={index} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default About;

"use client";
import React from "react";
import { services } from "@/constants";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "@/utils/motion";
import { styles } from "@/styles";
import Image from "next/image";

/* ---------------- SERVICE CARD ---------------- */
const ServiceCard = ({ icon, title }: any) => {
  return (
    <div className="w-[250px] flex-shrink-0 mx-4">
      <div className="green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col items-center justify-evenly">
          <Image
            src={icon}
            alt={title}
            width={64}
            height={64}
            className="object-contain"
          />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
};

/* ---------------- ABOUT SECTION ---------------- */
const About = () => {
  return (
    <div className="px-2 md:px-5 overflow-hidden">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>INTRODUCTION</p>
        <h2 className={styles.sectionHeadText}>About Me</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        👋 Hi, I’m Teja Pendem from Hyderabad, Telangana — currently working as a Backend Developer at VerosAI with 2 year of hands-on experience. Along with strong experience in Python, SAP S/4HANA data integration, and REST API development, I am also actively working on SAP BTP to build SAP UI5 and Fiori applications, leveraging CAPM (Cloud Application Programming Model) with CDS for scalable and cloud-native service development. I have successfully contributed to projects that reduced integration errors by 30% and streamlined enterprise data migration, delivering reliable and high-performance solutions. ✨💻
      </motion.p>

      {/* 🔥 CONTINUOUS AUTO SLIDE */}
      <div className="mt-10 overflow-hidden">
        <motion.div
          className="flex w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 20, // speed (lower = faster)
            ease: "linear",
          }}
        >
          {/* duplicate services for seamless loop */}
          {[...services, ...services].map((service, index) => (
            <ServiceCard
              key={`${service.title}-${index}`}
              icon={service.icon}
              title={service.title}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;
