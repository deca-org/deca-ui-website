import type { AppProps } from "next/app";
import { DecaUIProvider } from "@deca-ui/react";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <DecaUIProvider
      theme={{
        fonts: { normal: "Roboto", mono: "JetBrains Mono" },
        colors: {
          bg: "#FBE8DE",
        },
        radii: {
          sm: "15px",
        },
      }}
    >
      <Component {...pageProps} />
    </DecaUIProvider>
  );
};

export default MyApp;
