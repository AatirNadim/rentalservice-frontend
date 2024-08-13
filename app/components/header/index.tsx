import React from "react";
import SubHeader from "./sub-header";
import Section2 from "./section2/section2";

const Header = () => {
  return (
    <section className="flex flex-col justify-center">
      <SubHeader />
      <Section2 />
    </section>
  );
};

export default Header;
