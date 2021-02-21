import Footer from "./Footer";
import Navbar from "./Navbar";

import Head from "next/head";
const Layout = (props) => {
  return (
    <>
      <Head>
        <title>Masha's site</title>
        <meta name="keywords" content="cactus" />
        <link rel="icon" href="/cactus.ico" />
      </Head>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
