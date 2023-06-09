import { useEffect, useState } from "react";

import { ethers } from "ethers";
import { useAuth } from "@/auth/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import GoogleTranslate from "./GoogleTranslate";

import { ArcanaAuth } from "./Layout";
import Logo from "./Logo";
import NavbarLink from "./NavbarLink";
import { faHouse, faIdCard, faTractor } from "@fortawesome/free-solid-svg-icons";
import { contractCall } from "@/utils";


export default function Navbar() {
  const { auth, loaded } = useAuth();


  const [isRegistered, setIsRegistered] = useState(false);

  const checkUser = async () => {
    try {
      const res = await contractCall(auth, "fetchUserType");
      if (res.data === "farmer" || res.data === "verifier") {
        setIsRegistered(true);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    loaded && checkUser();
  }, [loaded])

  return (
    <div className="px-0 md:px-[10%] fixed sm:flex sm:static justify-center w-full z-50">
      <nav className="mt-0 md:mt-6 bg-white border-gray-200 px-6 md:px-20 py-3 rounded-none md:rounded-full drop-shadow-2xl w-full max-w-[1400px] flex flex-row items-center justify-between mb-10">
        <div className="flex flex-row gap-12 items-center">
          <Logo />
          <section className="hidden sm:flex flex-row gap-4">
            <NavbarLink link="/dashboard" icon={faHouse} tooltip="Home" />
            <NavbarLink link="/farms" icon={faTractor} tooltip="Farms" />
            {(loaded && !isRegistered) && <NavbarLink link="/profile/role-choice" icon={faIdCard} tooltip="Register" />}
          </section>
        </div>
        <div className="flex flex-row gap-6 items-center">
          <GoogleTranslate />
          <div className="hidden sm:flex">
            <ArcanaAuth />
          </div>
        </div>
      </nav>
      <nav>
        <section className="fixed bottom-0 flex flex-row sm:hidden justify-around w-full bg-white py-3 px-12 shadow-inner rounded-t-xl">
          <ArcanaAuth />
          <NavbarLink link="/dashboard" icon={faHouse} tooltip="Home" />
          <NavbarLink link="/farms" icon={faTractor} tooltip="Farms" />
          {(loaded && !isRegistered) && <NavbarLink link="/profile/role-choice" icon={faIdCard} tooltip="Register" />}
        </section>
      </nav>
    </div>
  );
}