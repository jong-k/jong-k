import { useState } from "react";
import { LuSigma } from "react-icons/lu";
import s from "./MobileHeader.module.scss";
import HamBtn from "@/buttons/HamBtn";

export default function MobileHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const handleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
    console.log(isMobileMenuOpen);
  };

  return (
    <header className={s.wrapper}>
      <div className={s.headerBox}>
        <span className={s.headerText}>
          김종한의 Tech <LuSigma />
        </span>
      </div>
      <button className={s.hamBtn} onClick={handleMobileMenu}>
        <HamBtn />
      </button>
    </header>
  );
}
