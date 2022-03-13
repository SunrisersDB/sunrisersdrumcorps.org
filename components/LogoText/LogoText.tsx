import { Fragment } from "react";
import LogoTextSvg from "../../resources/svg/logo-text.svg";
import LogoTextSvgNoSubs from "../../resources/svg/logo-text-no-sub.svg";

export default function LogoText({ noSubs = false }: { noSubs?: boolean }) {
  return (
    <Fragment>{noSubs ? <LogoTextSvgNoSubs /> : <LogoTextSvg />}</Fragment>
  );
}
