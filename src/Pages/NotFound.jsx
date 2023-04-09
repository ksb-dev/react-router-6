import React, { useEffect } from "react";

import { Navigate, useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/"); // you can pass -1 means backwards 1, -2 means backwards 2 & sp on
    }, 1000);
  }, []);

  return <h1>404 Not Found!</h1>;
  //return <Navigate to="/" />;
};

export default NotFound;
