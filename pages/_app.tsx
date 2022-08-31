import type { AppProps } from "next/app";
import { MDXProvider } from "@mdx-js/react";
import { DecaUIProvider } from "@deca-ui/react";
import { Text } from "@deca-ui/react";
import slugify from "slugify";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const MDXComponents = {
    h1: (props: any) => (
      <Text
        as="h1"
        css={{
          mb: "$3",
        }}
        mono
        {...props}
      />
    ),
    h2: (props: any) => {
      const id = slugify(props.children).toLowerCase();
      return (
        <Text
          as="h2"
          size="h4"
          mono
          id={id}
          css={{
            scrollMarginTop: "$sizes$22",
            mt: "$3",
            mb: "$1",
          }}
          {...props}
        />
      );
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
