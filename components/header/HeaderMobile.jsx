import Link from "next/link";
import Image from "next/image";
import logo from "../../public/img/logo/dark.png";
import logo2 from "../../public/img/logo/light.png";

const HeaderMobile = () => {
  return (
    <>
      <div className="logo">
        <Link href="/">
          <Image className="logo_light" src={logo} alt="brand" />
          <Image className="logo_dark" src={logo2} alt="brand" />
        </Link>
      </div>
      {/* End .logo */}
    </>
  );
};

export default HeaderMobile;
