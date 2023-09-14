import React from "react";
import favicon from '../../img/logo3.png'

const Header = () => {
  return (
    <div>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" type="image/x-icon" href={favicon} />
      <title>Güidaí</title>
    </div>
  );
};

export default Header;