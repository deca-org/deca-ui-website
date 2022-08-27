import type { NextPage } from "next";
import {
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
import Layout from "../components/Layout";
import { Copy } from "react-feather";

const Home: NextPage = () => {
  return (
    <Layout>
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
            spacing="lg"
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
                css={{
                  mt: "$3",
                  color: "$gray700",
                  fontWeight: "$normal",
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
                    fontFamily: "$mono",
                    br: "$sm",
                    height: "$10",
                    whiteSpace: "nowrap",
                    fontSize: "$body",
                    display: "flex",
                    alignItems: "center",
                    fontWeight: "bold",
                    "@n": {
                      px: "$3",
                      overflow: "scroll",
                    },
                    "@sm": {
                      px: "$5",
                      overflow: "visible",
                    },
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
                        bg: "$black",
                        color: "$white",
                      }}
                    >
                      Copied
                    </Popover.Content>
                  </Popover>
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
                        as={`h${i}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6"}
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
                      focusColor="warning"
                      pill
                    />
                    <Button pill color="warning">
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
                    <Switch initialToggle label="Switch" color="warning" />
                    <Checkbox initialCheck label="Checkbox" color="warning" />
                    <Radio initialSelect label="Radio" color="warning" />
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid.Container>
        </Container>
      </Box>
    </Layout>
  );
};

export default Home;
