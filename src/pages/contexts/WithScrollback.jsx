import React from "react";
import { useLocation } from "react-router-dom";

function WithScrollback({ children }) {
 const location = useLocation();
 React.useEffect(() => {
  window.scrollTo({
   top: 0,
   left: 0,
   behavior: "instant",
  });
 }, [location]);

 React.useEffect(() => {
 }, []);
 return <>{children}</>;
}

export default WithScrollback;
