import type { AppProps } from "next/app";
import "normalize.css";
import "styles/index.scss";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
