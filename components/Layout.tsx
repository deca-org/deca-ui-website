import { Box } from "@deca-ui/react";
import Navbar from "./Navbar";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box css={{ position: "relative" }}>
      <Navbar />
      <Box>{children}</Box>
    </Box>
  );
};

export default Layout;
