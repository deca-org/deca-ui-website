import { Box } from "@deca-ui/react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MDXLayout from "./MDXLayout";

interface LayoutProps {
  children?: React.ReactNode;
  blockPosition?: boolean;
  whiteBg?: boolean;
  mdx?: boolean;
}

const Layout = ({
  children,
  blockPosition = false,
  whiteBg = false,
  mdx = false,
}: LayoutProps) => {
  return (
    <Box css={{ position: "relative" }}>
      <Navbar blockPosition={mdx || blockPosition} whiteBg={mdx || whiteBg} />
      {mdx ? <MDXLayout>{children}</MDXLayout> : <Box>{children}</Box>}
      <Footer />
    </Box>
  );
};

export default Layout;
