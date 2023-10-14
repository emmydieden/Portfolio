import React from "react";

import { AiFillGithub } from "react-icons/ai";
import { BsGlobe2 } from "react-icons/bs";
import { IoReaderOutline } from "react-icons/io5";

import "./button.css";
export const Button = ({ text, hoverColor, link }) => {
  const renderIcon = () => {
    if (text === "Live demo") {
      return <BsGlobe2 className="globe-icon icon" />;
    } else if (text === "View the code") {
      return <AiFillGithub className="github-icon icon" />;
    } else if (text === "Read article") {
      return <IoReaderOutline className="article-icon icon" />;
    }
    return null; // Return null for any other cases
  };
  return (
    <div>
      <a href={link} className={`button ${hoverColor}`}>
        {renderIcon()}
        {text}
      </a>
    </div>
  );
};
