import React from "react";
import { Box, DecaUIProvider, baseTheme } from "@deca-ui/react";

interface ComponentWrapperProps {
  center?: boolean;
  children?: React.ReactNode;
}

const ComponentWrapper = ({
  center = true,
  children,
}: ComponentWrapperProps) => (
  <DecaUIProvider root={false} theme={baseTheme.theme}>
    <Box
      css={{
        display: "flex",
        justifyContent: center ? "center" : "flex-start",
        p: "$3",
        br: "$md",
        borderStyle: "solid",
        borderWidth: "$normal",
        borderColor: "$gray100",
        gap: "$3",
      }}
    >
      {children}
    </Box>
  </DecaUIProvider>
);

export default ComponentWrapper;