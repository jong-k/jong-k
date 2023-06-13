import s from "./HamBtn.module.scss";

export default function HamBtn() {
  return (
    <div className={s.wrapper}>
      <div className={s.bar}></div>
      <div className={s.bar}></div>
      <div className={s.bar}></div>
    </div>
  );
}
