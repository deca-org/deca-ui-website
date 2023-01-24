import React from "react";
import { Box, DecaUIProvider, baseTheme } from "@deca-ui/react";
import { defaultTheme } from "../components/theme";
import { ThemeContext } from "../pages/_app";

interface ComponentWrapperProps {
  children?: React.ReactNode;
  noFlex?: boolean;
  column?: boolean;
}

const ComponentWrapper = ({
  children,
  noFlex = false,
  column = false,
}: ComponentWrapperProps) => {
  const theme = React.useContext(ThemeContext);
  return (
    <DecaUIProvider
      root={true}
      theme={{ ...baseTheme.theme, fonts: defaultTheme.fonts }}
      mode={theme?.darkMode ? "dark" : "light"}
    >
      {noFlex ? (
        <Box
          css={{
            p: "$3",
            br: "$md",
            borderStyle: "solid",
            borderWidth: "$normal",
            borderColor: theme?.darkMode ? "$bgSecondary" : "$gray100",
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
            borderColor: theme?.darkMode ? "$bgSecondary" : "$gray100",
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
};

export default ComponentWrapper;
