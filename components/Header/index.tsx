import Link from "next/link";
import { LuSigma } from "react-icons/lu";
import s from "./Header.module.scss";
import { MENU_LIST } from "enum";

export default function Header() {
  return (
    <header className={s.wrapper}>
      <h2 className={s.headerTitle}>김종한의</h2>
      <h2 className={s.headerTitle}>
        Tech
        <LuSigma />
      </h2>
      <nav className={s.navContainer}>
        {MENU_LIST.map((menu) => (
          <div key={menu.id} className={s.menu}>
            <Link className={s.tab} href={menu.url}>
              {menu.title}
            </Link>
          </div>
        ))}
      </nav>
    </header>
  );
}
