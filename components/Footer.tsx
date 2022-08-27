import {
  theme,
  Box,
  Grid,
  Text,
  Container,
  Button,
  Popover,
} from "@deca-ui/react";
import { Copy, GitHub, Twitter } from "react-feather";

const Footer = () => {
  return (
    <Box>
      <Container
        px="md"
        css={{
          py: "calc($5 + $4)" as any,
        }}
      >
        <Grid.Container
          xs={12}
          spacing="md"
          css={{
            "@n": {
              flexDirection: "column-reverse",
            },
            "@lg": {
              flexDirection: "row",
            },
          }}
        >
          <Grid xl={6}>
            <Box
              css={{
                br: "$sm",
              }}
            >
              <Box>
                <Text
                  as="h3"
                  css={{
                    fontFamily: "$mono",
                    "@n": { fontSize: "$h5", lineHeight: "$3" },
                    "@xs": { fontSize: "$h4", lineHeight: "$4" },
                    "@sm": { fontSize: "$h3", lineHeight: "$4" },
                  }}
                >
                  Ship your next project faster
                </Text>
                <Text
                  as="h6"
                  weight="normal"
                  css={{
                    color: "$gray700",
                    mt: "$2",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                  ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur.
                </Text>
              </Box>
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
                <Button size="lg" color="secondary" variant="flat">
                  Get Started
                </Button>
                <Box
                  css={{
                    borderStyle: "solid",
                    borderWidth: "$normal",
                    borderColor: "$gray800",
                    color: "$gray800",
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
                          color="secondary"
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
                        }}
                      >
                        Copied
                      </Popover.Content>
                    </Popover>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid
            xl={6}
            css={{
              display: "flex",
              justifyContent: "flex-start",
              gap: "$3",
              flexDirection: "column",
              "@xs": {
                flexDirection: "row",
              },
              "@lg": {
                justifyContent: "flex-end",
              },
            }}
          >
            <Box
              css={{
                color: "$secondary",
                borderStyle: "solid",
                borderWidth: "$normal",
                borderColor: "$secondary",
                bg: "$white",
                br: "$sm",
                dflex: "center",
                p: "$4",
                transition: "$default",
                cursor: "pointer",
                "&:hover": {
                  bg: "$secondary-lighten-7",
                },
                "@lg": {
                  width: "$35",
                  height: "100%",
                },
              }}
            >
              <Box>
                <GitHub size={theme.sizes[7].value} />
                <Text>For issues, pull requests and contributution.</Text>
              </Box>
            </Box>
            <Box
              css={{
                color: "$primary",
                borderStyle: "solid",
                borderWidth: "$normal",
                borderColor: "$primary",
                bg: "$white",
                br: "$sm",
                dflex: "center",
                p: "$4",
                transition: "$default",
                cursor: "pointer",
                "&:hover": {
                  bg: "$primary-lighten-7",
                },
                "@lg": {
                  width: "$35",
                  height: "100%",
                },
              }}
            >
              <Box>
                <Twitter size={theme.sizes[7].value} />
                <Text>For announcements, tips and general information.</Text>
              </Box>
            </Box>
          </Grid>
        </Grid.Container>
      </Container>
      <Box
        css={{
          dflex: "center",
          flexDirection: "column",
          pb: "$3",
          "& img": {
            size: "$15",
            br: "$pill",
            mb: "$2",
          },
        }}
      >
        <img src="/headshot.png" alt="Headshot" />
        <Text
          css={{
            color: "$gray700",
            fontFamily: "$mono",
          }}
        >
          Made by Heril Saha
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
