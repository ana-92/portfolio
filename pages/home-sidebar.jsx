import dynamic from "next/dynamic";
import Seo from "../components/Seo";
import HomeSidebar from "../components/pages/home-sidebar";

const index = () => {
  return (
    <>
      <Seo pageTitle="Home Sidebar" />
      <HomeSidebar />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
