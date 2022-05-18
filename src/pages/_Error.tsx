import React from "react";
import ErrorImage from "../assets/404.svg";

const ErrorPage = (): JSX.Element => {
  return (
    <div>
      <img src={ErrorImage} className="error" alt="404" />

      <p>Page Not Found</p>
    </div>
  );
};

export default ErrorPage;
