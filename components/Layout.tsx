import { Box } from "@deca-ui/react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MDXLayout from "./MDXLayout";
import { DecaUIProvider } from "@deca-ui/react";
import { lightTheme, darkTheme } from "./theme";
import { ThemeContext } from "../pages/_app";
import { useContext } from "react";

interface LayoutProps {
  children?: React.ReactNode;
  blockPosition?: boolean;
  defaultBg?: boolean;
  mdx?: boolean;
}

const Layout = ({
  children,
  blockPosition = false,
  defaultBg = false,
  mdx = false,
}: LayoutProps) => {
  const { darkMode } = useContext(ThemeContext);

  return (
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
  );
};

export default Layout;
