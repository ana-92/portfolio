import EdinaHomeSidebar from "../components/pages/home-sidebar";
import Seo from "../components/Seo";
import dynamic from "next/dynamic";

const index = () => {
  return (
    <>
      <Seo pageTitle="Ana's" />
      <EdinaHomeSidebar />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
