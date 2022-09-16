/**
 * @description      :
 * @author           : Michael
 * @group            :
 * @created          : 16/09/2022 - 17:55:33
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 16/09/2022
 * - Author          : Michael
 * - Modification    :
 **/
import React from "react";

const Header = ({ title, description }) => {
  return (
    <div>
      <h1 data-testid="title" className="text-3xl text-center mb-3">
        {title}
      </h1>
      <p data-testid="description" className="text-center">
        {" "}
        {description}
      </p>
    </div>
  );
};

export default Header;
