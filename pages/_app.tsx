import "@fortawesome/fontawesome-svg-core/styles.css";
import { AppProps } from "next/app";
import "../styles/globals.scss";
// import { config } from "@fortawesome/fontawesome-svg-core";
// config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
