import "../styles/globals.scss";

import { GlobalLayout } from "../components/layouts";

function MyApp({ Component, pageProps }) {
  return (
    <GlobalLayout>
      <Component {...pageProps} />
    </GlobalLayout>
  );
}

export default MyApp;
