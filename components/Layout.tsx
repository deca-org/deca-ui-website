import { Box } from "@deca-ui/react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MDXLayout from "./MDXLayout";
import { DecaUIProvider } from "@deca-ui/react";
import { lightTheme, darkTheme } from "./theme";
import { ThemeContext } from "../pages/_app";
import { useContext } from "react";
import { NextSeo } from "next-seo";

interface LayoutProps {
  children?: React.ReactNode;
  blockPosition?: boolean;
  defaultBg?: boolean;
  mdx?: boolean;
  title: string;
}

const Layout = ({
  children,
  blockPosition = false,
  defaultBg = false,
  mdx = false,
  title,
}: LayoutProps) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <>
      <NextSeo
        titleTemplate="DecaUI - %s"
        title={title}
        description="DecaUI provides a set of accessible and customizable React components that make it make it easy to quickly prototype and develop stunning websites."
        canonical="https://www.deca-ui.com"
        defaultTitle="DecaUI - A component library that suits all your needs"
        twitter={{
          cardType: "summary_large_image",
          site: "@deca_ui",
          handle: "@deca_ui",
        }}
        openGraph={{
          url: "https://www.deca-ui.com",
          title: "DecaUI",
          description:
            "A set of accessible and customizable React components that make it make it easy to quickly prototype and develop stunning websites.",
          images: [
            {
              url: "OG/OG900x800-dark.jpg",
              width: 900,
              height: 800,
              alt: "DecaUI (Dark Mode)",
              type: "image/jpeg",
            },
            {
              url: "OG/OG900x800-light.jpg",
              width: 900,
              height: 800,
              alt: "DecaUI (Light Mode)",
              type: "image/jpeg",
            },
            {
              url: "OG/OG800x600-dark.jpg",
              width: 800,
              height: 600,
              alt: "DecaUI (Dark Mode)",
              type: "image/jpeg",
            },
            {
              url: "OG/OG800x600-light.jpg",
              width: 800,
              height: 600,
              alt: "DecaUI (Dark Mode)",
              type: "image/jpeg",
            },
            {
              url: "OG/OG250x250-dark.jpg",
              width: 250,
              height: 250,
              alt: "DecaUI (Dark Mode) Small Logo",
              type: "image/jpeg",
            },
            {
              url: "OG/OG250x250-light.jpg",
              width: 250,
              height: 250,
              alt: "DecaUI (Light Mode) Small Logo",
              type: "image/jpeg",
            },
          ],
          siteName: "DecaUI",
        }}
      />
      <DecaUIProvider
        root={true}
        theme={darkMode ? darkTheme : lightTheme}
        mode={darkMode ? "dark" : "light"}
      >
        <Box
          css={{
            position: "relative",
            bg: darkMode ? "$bgPrimary" : "$bgSecondary",
            minHeight: "100vh",
          }}
        >
          <Navbar
            blockPosition={mdx || blockPosition}
            defaultBg={mdx || defaultBg}
          />
          {mdx ? (
            <MDXLayout darkMode={darkMode}>{children}</MDXLayout>
          ) : (
            <Box>{children}</Box>
          )}
          {!mdx && <Footer />}
        </Box>
      </DecaUIProvider>
    </>
  );
};

export default Layout;
