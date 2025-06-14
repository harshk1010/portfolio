import React from "react";
import HighlightText from "./HighlightText";
import linkedIn from "../assets/LinkedIn.png";
import github from "../assets/Github.png";
import leetcode from "../assets/Leetcode.png";
import email from "../assets/Email.png";

const ContactSection = () => {
  return (
    <div className="w-full h-full pt-10 bg-primary" id="contact-me">
      <div className="w-full h-full bgGrid rotate-180 flex justify-center items-center p-6">
        <div className="rotate-180 flex flex-col gap-5 justify-center items-center">
          <h1 className="font-robo text-3xl sm:text-4xl md:text-5xl font-semibold max-w-[520px] text-center text-secondary-50">
            Let’s Build a Brand that makes an <HighlightText text={"Impact"} />{" "}
            !
          </h1>
          <a
            href="mailto:harshk1023@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-3 bg-richblue text-center text-secondary-50 font-semibold uppercase rounded-full max-w-[280px] w-full hover:bg-transparent hover:text-richblue transition-all duration-200 border-[3px] border-richblue"
          >
            Contact Me
          </a>
          <div className="flex justify-evenly md:justify-between items-center w-full">
            <a
              href="https://www.linkedin.com/in/harshk1010/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedIn} alt="LinkedIn" className="w-8 md:w-fit" />
            </a>
            <a
              href="https://github.com/harshk1010"
              target="_blank"
              rel="noreferrer"
            >
              <img src={github} alt="Github" className="w-8 md:w-fit" />
            </a>
            <a
              href="https://leetcode.com/u/HarshK10/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={leetcode} alt="Leetcode" className="w-8 md:w-fit" />
            </a>
            <a
              href="mailto:harshk1023@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src={email} alt="Email" className="w-8 md:w-fit" />
            </a>
          </div>
        </div>
      </div>
      <div className="w-full h-[10px] bg-richblue"></div>
    </div>
  );
};

export default ContactSection;
