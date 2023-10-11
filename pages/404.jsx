import dynamic from "next/dynamic";
import Seo from "../components/Seo";
import Preview from "../components/pages/404";

const index = () => {
  return (
    <>
      <Seo pageTitle="Page Not Found" />
      <Preview />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
