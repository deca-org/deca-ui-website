import slugify from "slugify";
import Link from "next/link";
import { Box, Grid, Text, Container, Button, theme } from "@deca-ui/react";
import { GitHub, Heart, Twitter, Menu } from "react-feather";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { AllRoutes } from "./MDXLayout";
import Image from "next/image";

interface NavbarProps {
  blockPosition?: boolean;
  whiteBg?: boolean;
}

interface MobileMenuProps {
  currentPath?: string;
  whiteBg?: boolean;
  scrollPosition: number;
}

const MobileMenu = ({
  currentPath,
  whiteBg,
  scrollPosition,
}: MobileMenuProps) => (
  <Box
    css={{
      zIndex: "$max",
      width: "100%",
      position: "fixed",
      top: "$sizes$19",
      bg: whiteBg ? "$white" : scrollPosition > 0 ? "$white" : "$bg",
      overflow: "auto",
      height: "calc(100% - 64px)",
      pb: "$4",
    }}
  >
    <Container px="md">
      <Box
        css={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: "$4",
          py: "$3",
        }}
      >
        {Object.entries(AllRoutes).map((category, idx) => {
          const categoryName = category[0];
          const categoryItems = category[1];
          return (
            <Box key={`category-${idx}`}>
              <Text
                mono
                weight="semibold"
                css={{
                  pr: "$3",
                  pl: "$2",
                  textTransform: "uppercase",
                  letterSpacing: "$widest",
                  color: "$primary",
                }}
              >
                {categoryName}
              </Text>

              {categoryItems.map((item, idx) => {
                const slug = `/docs/${categoryName}/${slugify(
                  item
                )}`.toLowerCase();
                // remove header ids for root link match
                const noHeaderIdPath = (currentPath as string).split("#")[0];
                const matchesSlug = noHeaderIdPath === slug;

                return (
                  <Box
                    key={`item-${idx}`}
                    css={{
                      mt: "$1",
                      display: "flex",
                      flexDirection: "column",
                      "& a": {
                        pl: "$2",
                        py: "$1",
                        mr: "$5",
                        br: "$xs",
                        width: "calc(100% - $3)",
                        fontWeight: matchesSlug ? "$medium" : "$normal",
                        transition: "$default",
                        color: matchesSlug ? "$secondary" : "$gray600",
                        bg: matchesSlug
                          ? "$secondary-lighten-7"
                          : "$transparent",
                        textDecoration: "none",
                        "&:hover": {
                          color: matchesSlug ? "$secondary" : "$primary",
                          bg: matchesSlug
                            ? "$secondary-lighten-7"
                            : "$primary-lighten-7",
                        },
                      },
                    }}
                  >
                    <Link href={slug}>{item}</Link>
                  </Box>
                );
              })}
            </Box>
          );
        })}
        <Box
          css={{
            display: "flex",
            flexDirection: "column",
            gap: "$2",
          }}
        >
          <Button
            variant="flat"
            icon={<GitHub />}
            css={{
              width: "100%",
              "@xs": {
                width: "$35",
              },
            }}
          >
            Github
          </Button>
          <Button
            variant="flat"
            icon={<Twitter />}
            css={{
              width: "100%",
              "@xs": {
                width: "$35",
              },
            }}
          >
            Twitter
          </Button>
          <Button
            variant="flat"
            icon={<Heart />}
            color="secondary"
            css={{
              width: "100%",
              "@xs": {
                width: "$35",
              },
            }}
          >
            Sponsor
          </Button>
        </Box>
      </Box>
    </Container>
  </Box>
);

const Navbar = ({ blockPosition, whiteBg }: NavbarProps) => {
  const [scrollPosition, setScrollPositon] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPositon(position);
  };

  const handleResize = () => {
    const intBreakpoint = parseInt(theme.breakpoints.md.value, 10);
    if (window.innerWidth >= intBreakpoint) {
      setMobileOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [mobileOpen]);

  const { asPath } = useRouter();

  return (
    <Box
      css={{
        height: blockPosition ? "$sizes$19" : "$n",
        overflow: "hidden",
        zIndex: "$10",
      }}
    >
      <Box
        css={{
          position: "fixed",
          overflow: "hidden",
          top: 0,
          right: 0,
          bg: whiteBg ? "$white" : scrollPosition > 0 ? "$white" : "$bg",
          width: "100%",
          height: "$19",
          zIndex: "$10",
          boxShadow: scrollPosition > 0 ? "$default" : "none",
          transition: "$default",
        }}
      >
        <Container px="md">
          <Grid.Container
            css={{ height: "$19" }}
            alignItems="center"
            justifyContent="center"
          >
            <Grid n={6} md={3} lg={2}>
              <Link href="/">
                <Box
                  css={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    width: "$25",
                    cursor: "pointer",
                  }}
                >
                  <Image
                    src="/icon.svg"
                    alt="Deca UI"
                    layout="fixed"
                    width="35px"
                    height="35px"
                  />
                  <Text
                    as="h6"
                    weight="bold"
                    mono
                    css={{
                      ml: "$2",
                    }}
                  >
                    DecaUI
                  </Text>
                </Box>
              </Link>
            </Grid>
            <Grid
              css={{
                "@n": {
                  display: "none",
                },
                "@md": {
                  display: "flex",
                  justifyContent: "center",
                  gap: "$5",
                },
              }}
              md={6}
              lg={8}
            >
              <Text
                as="p"
                weight="medium"
                mono
                css={{
                  "& a": {
                    transition: "$default",
                    color: "$text",
                    textDecoration: "none",
                    "&:hover": {
                      color: "$primary",
                    },
                  },
                }}
              >
                <Link href="/docs/guide/installation">Documentation</Link>
              </Text>
              <Text
                as="p"
                weight="medium"
                mono
                css={{
                  "& a": {
                    transition: "$default",
                    color: "$text",
                    textDecoration: "none",
                    "&:hover": {
                      color: "$primary",
                    },
                  },
                }}
              >
                <Link href="/docs/components/badge">Components</Link>
              </Text>
              <Text
                as="p"
                weight="medium"
                mono
                css={{
                  "& a": {
                    transition: "$default",
                    color: "$text",
                    textDecoration: "none",
                    "&:hover": {
                      color: "$primary",
                    },
                  },
                }}
              >
                <Link href="https://github.com/deca-org/deca-ui/discussions/new">
                  Feedback
                </Link>
              </Text>
            </Grid>
            <Grid
              n={6}
              md={3}
              lg={2}
              css={{
                "@n": {
                  display: "none",
                },
                "@md": {
                  display: "flex",
                  gap: "$2",
                  justifyContent: "flex-end",
                },
              }}
            >
              <Button
                variant="ghost"
                icon={<GitHub />}
                onClick={() =>
                  window.open("https://github.com/deca-org/deca-ui", "_blank")
                }
              />
              <Button
                variant="ghost"
                icon={<Twitter />}
                onClick={() =>
                  window.open("https://twitter.com/deca_ui", "_blank")
                }
              />

              <Button
                color="secondary"
                variant="flat"
                icon={<Heart />}
                onClick={() =>
                  window.open("https://opencollective.com/deca-ui", "_blank")
                }
              >
                Sponsor
              </Button>
            </Grid>
            {/* For Mobile */}
            <Grid
              n={6}
              css={{
                "@n": {
                  display: "flex",
                  justifyContent: "flex-end",
                },
                "@md": {
                  display: "none",
                },
              }}
            >
              <Button
                variant="flat"
                icon={<Menu />}
                onClick={() => setMobileOpen((prev) => !prev)}
              />
            </Grid>
          </Grid.Container>
        </Container>
      </Box>
      {mobileOpen && (
        <MobileMenu
          currentPath={asPath}
          whiteBg={whiteBg}
          scrollPosition={scrollPosition}
        />
      )}
    </Box>
  );
};

export default Navbar;
