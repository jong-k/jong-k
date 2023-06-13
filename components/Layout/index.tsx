import s from "./Layout.module.scss";
import Header from "components/Header";
import MobileHeader from "../MobileHeader";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={s.container}>
      <Header />
      <MobileHeader />
      <main>{children}</main>
    </div>
  );
}
