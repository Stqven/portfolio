// client-side component
"use client";

// Import necessary dependencies and components.
import { motion } from "framer-motion";

import { useSectionInView } from "@/lib/hooks";

import SectionHeading from "./section-heading";

// Define the About component.
const About = () => {
  // Use the useSectionInView custom hook to track when the "About" section is in view.
  const { ref } = useSectionInView("About");

  // Return the About section, which uses framer-motion for animations.
  return (
    <motion.section
      ref={ref}
      id="about"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    >
      {/* Display the section heading for "About me." */}
      <SectionHeading>About me</SectionHeading>

      {/* Display a paragraph with information about the user's background and interests. */}
      <p className="mb-3">
        I got my start in a <b className="font-medium">High School</b> programming
        class and have been building my fundamentals ever since, learning technologies like React, Next.js, Node.js, MySQL, TypeScript, Python, and Prisma.{" "}
        <b className="font-medium">Currently</b>{" "}
        I’m diving into AWS and cloud infrastructure to broaden my backend skills.
      </p>

      {/* Display another paragraph about the user's interests and hobbies. */}
      <p>
        <i className="italic">When I'm not coding</i>, I enjoy ,
        lifting weights, watching movies, and trying new cafe spots. I'm always curious, {" "}
        <b className="font-medium">learning new things</b>, and
        seeking my next opportunities.
      </p>
    </motion.section>
  );
};

// Export the About component.
export default About;
