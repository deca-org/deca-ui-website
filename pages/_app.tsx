import type { AppProps } from "next/app";
import { MDXProvider } from "@mdx-js/react";
import { DecaUIProvider } from "@deca-ui/react";
import { Text } from "@deca-ui/react";
import slugify from "slugify";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const MDXComponents = {
    h1: (props: any) => <Text as="h1" mono {...props} />,
    h2: (props: any) => {
      const id = slugify(props.children).toLowerCase();
      return <Text as="h2" size="h5" mono id={id} {...props} />;
    },
    p: (props: any) => (
      <Text
        as="p"
        css={{
          color: "$gray600",
        }}
        {...props}
      />
    ),
  };

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
      <MDXProvider components={MDXComponents}>
        <Component {...pageProps} />
      </MDXProvider>
    </DecaUIProvider>
  );
};

export default MyApp;
