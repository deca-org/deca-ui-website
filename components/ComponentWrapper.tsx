import React from "react";
import { Box, DecaUIProvider, baseTheme } from "@deca-ui/react";
import theme from "../components/theme";

interface ComponentWrapperProps {
  children?: React.ReactNode;
}

const ComponentWrapper = ({ children }: ComponentWrapperProps) => (
  <DecaUIProvider
    root={false}
    theme={{ ...baseTheme.theme, fonts: theme.fonts }}
  >
    <Box
      css={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-end",
        gap: "$3",
        p: "$3",
        br: "$md",
        borderStyle: "solid",
        borderWidth: "$normal",
        borderColor: "$gray100",
        flexWrap: "wrap",
      }}
    >
      {children}
    </Box>
  </DecaUIProvider>
);

export default ComponentWrapper;
