import React from "react";
import { Box, DecaUIProvider, baseTheme } from "@deca-ui/react";
import theme from "../components/theme";

interface ComponentWrapperProps {
  children?: React.ReactNode;
  noFlex?: boolean;
  column?: boolean;
}

const ComponentWrapper = ({
  children,
  noFlex = false,
  column = false,
}: ComponentWrapperProps) => (
  <DecaUIProvider
    root={false}
    theme={{ ...baseTheme.theme, fonts: theme.fonts }}
  >
    {noFlex ? (
      <Box
        css={{
          p: "$3",
          br: "$md",
          borderStyle: "solid",
          borderWidth: "$normal",
          borderColor: "$gray100",
        }}
      >
        {children}
      </Box>
    ) : (
      <Box
        css={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: column ? "flex-start" : "flex-end",
          gap: "$3",
          p: "$3",
          br: "$md",
          borderStyle: "solid",
          borderWidth: "$normal",
          borderColor: "$gray100",
          flexWrap: "wrap",
          overflow: "auto",
          flexDirection: column ? "column" : "row",
        }}
      >
        {children}
      </Box>
    )}
  </DecaUIProvider>
);

export default ComponentWrapper;
