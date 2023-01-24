export const defaultTheme = {
  fonts: { normal: "Roboto", mono: "JetBrains Mono" },
  radii: {
    sm: "15px",
  },
};

export const lightTheme = {
  ...defaultTheme,
  colors: {
    text: "#000000",
    bgPrimary: "#FBE8DE",
    bgSecondary: "#FFFFFF",
    header: "#000000",
    body: "$gray700",
  },
};

export const darkTheme = {
  ...defaultTheme,
  colors: {
    bgPrimary: "#131A2C",
    bgSecondary: "#252C46",
    bg: "#FBE8DE",
    text: "#FFFFFF",
    header: "#FFFFFF",
    body: "$gray100",
  },
};
