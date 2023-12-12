import "@/styles/globals.css";
import localFont from "next/font/local";
import type { AppProps } from "next/app";

const tickerbit = localFont({
  src: [
    {
      path: "../../public/fonts/tickerbit-italic.woff2",
      style: "italic",
    },
    {
      path: "../../public/fonts/tickerbit-mono.woff2",
      style: "mono",
    },
    {
      path: "../../public/fonts/tickerbit-regular.woff2",
      style: "normal",
    },
  ],
  variable: "--font-tickerbit",
});

const tiempos = localFont({
  src: [
    {
      path: "../../public/fonts/tiempos-headline-light.woff2",
      style: "normal",
      weight: "300",
    },
    {
      path: "../../public/fonts/tiempos-headline-black.woff2",
      style: "normal",
      weight: "900",
    },
    {
      path: "../../public/fonts/tiempos-headline-black-italic.woff2",
      style: "italic",
      weight: "900",
    },
    {
      path: "../../public/fonts/tiempos-headline-bold.woff2",
      style: "normal",
      weight: "700",
    },
    {
      path: "../../public/fonts/tiempos-headline-bold-italic.woff2",
      style: "italic",
      weight: "700",
    },
    {
      path: "../../public/fonts/tiempos-headline-light-italic.woff2",
      style: "italic",
      weight: "300",
    },
    {
      path: "../../public/fonts/tiempos-headline-medium-italic.woff2",
      style: "italic",
      weight: "500",
    },
    {
      path: "../../public/fonts/tiempos-headline-regular.woff2",
      style: "normal",
      weight: "400",
    },
    {
      path: "../../public/fonts/tiempos-headline-regular-italic.woff2",
      style: "italic",
      weight: "400",
    },
    {
      path: "../../public/fonts/tiempos-headline-semibold.woff2",
      style: "regular",
      weight: "600",
    },
    {
      path: "../../public/fonts/tiempos-headline-semibold-italic.woff2",
      style: "italic",
      weight: "600",
    },
  ],
  variable: "--font-tiempos",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${tickerbit.variable} ${tiempos.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
