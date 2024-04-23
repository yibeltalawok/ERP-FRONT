import React from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import Footer from "../navigation/footer";
import Header from "../navigation/header";
const title = "Transport Logistic";
const Layout = ({ children, description, keywords, author }) => {
  const location = useLocation();
  const protectedFooter = () => {
    switch (location.pathname) {
      case "/sign-in":
      default:
        return <Footer />;
    }
  };

  const protectedHeader = () => {
    switch (location.pathname) {
      case "/sign-in":
        return null;
      case "/create-account":
        return null;
      case "/coming-soon":
        return null;
      default:
        return <Header />;
    }
  };
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      {protectedHeader()}
      {/* < Header/> */}
      <main>{children}</main>
      {protectedFooter()}
    </div>
  );
};

// Layout.defaultProps = {
//   title: "EplusApp Commercial S.c",
//   description: "Eplusapp Promotion Website",
//   keywords:
//     "EplusApp,Eplus,Software Company,Company,Stock,Website,EplusApp commercial,Bahirdar,Ethiopia",
//   author: "EplusApp Commercial S.c",
// };

export default Layout;
