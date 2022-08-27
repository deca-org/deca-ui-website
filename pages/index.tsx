import React from "react";
import type { NextPage } from "next";
import {
  theme,
  Box,
  Container,
  Text,
  Button,
  Grid,
  Input,
  Switch,
  Checkbox,
  Radio,
  Popover,
} from "@deca-ui/react";
import { darken } from "polished";
import Layout from "../components/Layout";
import { Prism as SyntaxHighligher } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import {
  Copy,
  Moon,
  Layout as LayoutIcon,
  Command,
  Edit,
  Watch,
} from "react-feather";

interface GeneralProps {
  icon: any;
  header: string;
  children: React.ReactNode;
}

const Card = ({ icon, header, children }: GeneralProps) => (
  <Box
    css={{
      width: "100%",
      boxShadow: "$default",
      br: "$sm",
      display: "flex",
      flexDirection: "column",
      gap: "$2",
      p: "$4",
    }}
  >
    <Box
      css={{
        color: "$secondary",
      }}
    >
      {React.cloneElement(icon, { size: theme.sizes[7].value })}
    </Box>
    <Text as="h5" css={{ fontFamily: "$mono" }}>
      {header}
    </Text>
    <Text
      css={{
        color: "$gray700",
      }}
    >
      {children}
    </Text>
  </Box>
);

const Home: NextPage = () => {
  const ThemeExampleJSX = `<DecaUIProvider
  mode="dark"
  theme={{
    fonts: { normal: "JetBrains Mono" },
    colors: {
      primary: '#228BE6',
      secondary: '#F06595',
      success: '#37B24D',
      warning: '#FFA000',
      error: '#F03E3E',
    },
  }}
>
  <App />
</DecaUIProvider>
`;

  const GetStartedJSX = `<Box
  css={{
    display: "flex",
    flexDirection: "column",
    gap: "$2",
  }}
>
  <Text as="h5" css={{ mb: "$2", fontFamily: "$mono" }}>
    Get Started
  </Text>
  <Input variant="outlined" placeholder="Email Address" />
  <Input variant="outlined" placeholder="Password" />
  <Button css={{ mt: "$2" }}>Create Account</Button>
</Box>
`;
  return (
    <Layout>
      <Box css={{ overflow: "hidden" }}>
        <Box
          css={{
            overflow: "hidden",
            position: "relative",
            height: "100vh",
            bg: "$bg",
          }}
        >
          <Container px="md">
            <Grid.Container
              xs={12}
              xl={6}
              alignItems="center"
              spacing="md"
              css={{
                minHeight: "100vh",
                overflow: "visible",
              }}
            >
              <Grid css={{ zIndex: 2 }}>
                <Text
                  as="h1"
                  css={{
                    fontFamily: "$mono",
                    "@n": { fontSize: "$h4", lineHeight: "$3" },
                    "@xs": { fontSize: "$h3", lineHeight: "$4" },
                    "@sm": { fontSize: "$h1", lineHeight: "$6" },
                  }}
                >
                  Make beautiful websites regardless of your design experience.
                </Text>
                <Text
                  as="h6"
                  weight="normal"
                  css={{
                    mt: "$3",
                    color: "$gray700",
                    pr: "$3",
                  }}
                >
                  DUI offers a comprehensive suite of UI tools to help you ship
                  new features faster. Start with deca-ui today.
                </Text>
                <Box
                  css={{
                    display: "flex",
                    mt: "$4",
                    gap: "$3",
                    "@n": {
                      flexDirection: "column",
                    },
                    "@sm": {
                      flexDirection: "row",
                    },
                  }}
                >
                  <Button size="lg">Get Started</Button>
                  <Box
                    css={{
                      borderStyle: "solid",
                      borderWidth: "$normal",
                      borderColor: "$gray700",
                      color: "$gray700",
                      br: "$sm",
                      height: "$10",
                      whiteSpace: "nowrap",
                      display: "flex",
                      alignItems: "center",
                      fontWeight: "bold",
                      justifyContent: "center",
                      "@sm": {
                        px: "$5",
                        overflow: "visible",
                      },
                      "@n": {
                        px: "$3",
                        overflow: "scroll",
                      },
                    }}
                  >
                    <Box
                      css={{
                        fontFamily: "$mono",
                        display: "flex",
                        alignItems: "center",
                        maxWidth: "100%",
                      }}
                    >
                      $ npm install @deca-ui/react
                      <Popover placement="top" offset={4}>
                        <Popover.Trigger>
                          <Button
                            size="sm"
                            icon={<Copy />}
                            onClick={() => {
                              navigator.clipboard.writeText(
                                "npm install @deca-ui/react"
                              );
                            }}
                            variant="ghost"
                            css={{
                              br: "$xs",
                              ml: "$2",
                            }}
                          />
                        </Popover.Trigger>
                        <Popover.Content
                          css={{
                            m: "$n",
                            p: "$1",
                            px: "$3",
                            bg: "$gray900",
                            color: "$white",
                          }}
                        >
                          Copied
                        </Popover.Content>
                      </Popover>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid
                css={{
                  "@n": {
                    display: "none",
                  },
                  "@lg": {
                    display: "initial",
                  },
                }}
              >
                <Box
                  css={{
                    bg: "$white",
                    zIndex: 1,
                    position: "relative",
                    boxShadow: "$default",
                    minWidth: "9999px",
                    br: "$xl",
                    ml: "$5",
                    py: "$7",
                    pl: "$5",
                  }}
                >
                  <Box
                    css={{
                      "-webkit-transform": "scale(1.8)",
                      "-moz-transform": "scale(1.8)",
                      "-o-transform": "scale(1.8)",
                      "-ms-transform": "scale(1.8)",
                      transform: "scale(1.8)",
                      transformOrigin: "left",
                      transformBox: "fill-box",
                      display: "flex",
                      flexDirection: "column",
                      gap: "$2",
                    }}
                  >
                    <Box
                      css={{
                        ml: "$5",
                        "-webkit-transform": "scale(0.9)",
                        "-moz-transform": "scale(0.9)",
                        "-o-transform": "scale(0.9)",
                        "-ms-transform": "scale(0.9)",
                        transform: "scale(0.9)",
                        transformOrigin: "left",
                        transformBox: "fill-box",
                      }}
                    >
                      {[1, 2, 3, 4, 5, 6].map((i) => (
                        <Text
                          as={
                            `h${i}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
                          }
                          css={{
                            m: "$n",
                            lineHeight: "$2",
                            display: "inline-block",
                            ml: i === 1 ? "$n" : "$3",
                            color:
                              i === 4
                                ? "$gray700"
                                : i === 5
                                ? "$gray600"
                                : i === 6
                                ? "$gray500"
                                : "$black",
                            fontWeight: i > 4 ? "normal" : "bold",
                          }}
                        >
                          H{i}
                        </Text>
                      ))}
                    </Box>
                    <Box
                      css={{
                        display: "flex",
                        gap: "$2",
                      }}
                    >
                      <Input
                        variant="outlined"
                        placeholder="Email Address"
                        focusColor="secondary"
                        pill
                      />
                      <Button pill color="secondary">
                        Submit Form
                      </Button>
                    </Box>
                    <Box
                      css={{
                        display: "flex",
                        mt: "$2",
                        gap: "$3",
                        ml: "$5",
                      }}
                    >
                      <Switch initialToggle label="Switch" color="secondary" />
                      <Checkbox
                        initialCheck
                        label="Checkbox"
                        color="secondary"
                      />
                      <Radio initialSelect label="Radio" color="secondary" />
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid.Container>
          </Container>
        </Box>
        <Box
          css={{
            position: "relative",
            bg: "$white",
          }}
        >
          <Container px="md">
            <Box css={{ py: "$5" }}>
              <Box css={{ pb: "$6" }}>
                <Grid.Container xs={12} md={3} spacing="md">
                  <Grid css={{ display: "flex", flex: "1 1 auto" }}>
                    <Card header="Themable" icon={<Edit />}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Lorem ipsum dolor sit amet.
                    </Card>
                  </Grid>
                  <Grid css={{ display: "flex", flex: "1 1 auto" }}>
                    <Card header="Accessible" icon={<Command />}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Lorem ipsum dolor sit amet.
                    </Card>
                  </Grid>
                  <Grid css={{ display: "flex", flex: "1 1 auto" }}>
                    <Card header="Stitches" icon={<LayoutIcon />}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Lorem ipsum dolor sit amet.
                    </Card>
                  </Grid>
                  <Grid css={{ display: "flex", flex: "1 1 auto" }}>
                    <Card header="Dark Mode" icon={<Moon />}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Lorem ipsum dolor sit amet.
                    </Card>
                  </Grid>
                </Grid.Container>
              </Box>
              <Grid.Container xs={12} md={6} spacing="lg" alignItems="center">
                <Grid>
                  <Text
                    as="h2"
                    css={{
                      fontFamily: "$mono",
                      "@n": { fontSize: "$h5", lineHeight: "$3" },
                      "@xs": { fontSize: "$h4", lineHeight: "$4" },
                      "@sm": { fontSize: "$h2", lineHeight: "$5" },
                    }}
                  >
                    Apply your own theming decisions.
                  </Text>
                  <Text
                    as="h6"
                    weight="normal"
                    css={{
                      color: "$gray700",
                      mt: "$3",
                    }}
                  >
                    DecaUI creates multiple shades of the colors you provide in
                    order to automatically create hover and focus states. In
                    addition to colours, you can customize fonts, spacing
                    values, shadows, and everything you need.
                  </Text>
                  <Button variant="flat" size="sm" css={{ mt: "$4" }}>
                    Learn more
                  </Button>
                </Grid>
                <Grid>
                  <Box
                    css={{
                      "& span": {
                        textDecoration: "none!important",
                      },
                    }}
                  >
                    <SyntaxHighligher
                      language="jsx"
                      style={atomDark}
                      customStyle={{
                        borderRadius: "15px",
                        padding: theme.space[4].value,
                        fontSize: theme.fontSizes.body.value,
                      }}
                    >
                      {ThemeExampleJSX}
                    </SyntaxHighligher>
                  </Box>
                </Grid>
              </Grid.Container>
            </Box>
          </Container>
        </Box>
        <Box
          css={{
            bg: "$bg",
            py: "$5",
          }}
        >
          <Container px="md">
            <Box
              css={{
                display: "flex",
                flexDirection: "column",
                gap: "$2",
              }}
            >
              <Text
                as="h2"
                css={{
                  fontFamily: "$mono",
                  "@n": { fontSize: "$h5", lineHeight: "$3" },
                  "@xs": { fontSize: "$h4", lineHeight: "$4" },
                  "@sm": { fontSize: "$h2", lineHeight: "$5" },
                }}
                center
              >
                Build your brand today.
              </Text>
              <Text
                css={{
                  color: "$gray700",
                }}
                center
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
            </Box>
            <Grid.Container
              xs={12}
              sm={6}
              spacing="md"
              css={{
                pt: "$4",
                "@n": {
                  flexDirection: "column-reverse",
                },
                "@xs": {
                  flexDirection: "row",
                },
              }}
              justifyContent="center"
            >
              <Grid css={{ display: "flex", flex: "1 1 auto" }}>
                <Box
                  css={{
                    width: "100%",
                    height: "100%",

                    "& span": {
                      textDecoration: "none!important",
                    },
                  }}
                >
                  <SyntaxHighligher
                    language="jsx"
                    style={atomDark}
                    customStyle={{
                      margin: 0,
                      height: "100%",
                      borderRadius: "15px",
                      padding: theme.space[4].value,
                      fontSize: theme.fontSizes.body.value,
                    }}
                  >
                    {GetStartedJSX}
                  </SyntaxHighligher>
                </Box>
              </Grid>
              <Grid css={{ display: "flex", flex: "1 1 auto" }}>
                <Box
                  css={{
                    width: "100%",
                    br: "$sm",
                    bg: "$white",
                    height: "100%",
                    dflex: "center",
                    flexDirection: "column",
                    borderStyle: "solid",
                    borderWidth: "$normal",
                    borderColor: "$gray200",
                  }}
                >
                  <Box
                    css={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "$2",
                      px: "$4",
                      py: "$5",
                      width: "100%",
                      maxWidth: "$36",
                    }}
                  >
                    <Text as="h5" css={{ mb: "$2", fontFamily: "$mono" }}>
                      Get Started
                    </Text>
                    <Input
                      variant="outlined"
                      placeholder="Email Address"
                      maxWidth
                    />
                    <Input variant="outlined" placeholder="Password" maxWidth />
                    <Button maxWidth css={{ mt: "$2" }}>
                      Create Account
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid.Container>
          </Container>
        </Box>
      </Box>
    </Layout>
  );
};

export default Home;
