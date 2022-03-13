import { Fragment } from "react";
import LogoSunSvg from "../../resources/svg/logo-sun.svg";
import styles from "./LogoSun.module.scss";

export default function LogoText({ noSpin = false }: { noSpin?: boolean }) {
  return (
    <Fragment>
      <LogoSunSvg className={noSpin ? "" : styles.spinning} />
    </Fragment>
  );
}
