import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Links = () => {
  return (
    <section className="grid grid-cols-3 gap-2 items-start justify-center">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook className="text-primary" />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="text-primary" />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FaXTwitter className="text-primary" />
      </a>
    </section>
  );
};

export default Links;
