import "../styles/globals.css";
import "../styles/lib.css"
import type { AppProps } from "next/app";
import { store, Provider } from "@app/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
