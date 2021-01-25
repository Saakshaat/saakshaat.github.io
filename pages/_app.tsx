import '../styles/globals.scss'

import {GlobalLayout} from '../components/layout';

export default function App({ Component, pageProps }) {
  return(
    <GlobalLayout>
      <Component {...pageProps} />
    </GlobalLayout>
  );
}
