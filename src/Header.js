import React from "react";

const Header = ({ title }) => {
  return (
    <header>
      <h1 className="container title-area">{title}</h1>
    </header>
  );
};

export default Header;
