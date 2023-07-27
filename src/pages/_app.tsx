import { AppPropsWithLayout } from "next/app";
import { appWithTranslation } from "next-i18next";

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(<Component {...pageProps} />);
}

export default appWithTranslation(App);
