import "@fortawesome/fontawesome-svg-core/styles.css";
import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";
import "../styles/globals.scss";
// import { config } from "@fortawesome/fontawesome-svg-core";
// config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default App;
