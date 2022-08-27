import { Box, Grid, Text, Container, Button } from "@deca-ui/react";
import { GitHub, Heart, Twitter, Menu } from "react-feather";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrollPosition, setScrollPositon] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPositon(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      css={{
        position: "fixed",
        top: 0,
        right: 0,
        bg: scrollPosition > 0 ? "$white" : "$bg",
        width: "100%",
        height: "$19",
        zIndex: "$max",
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
          <Grid
            xs={6}
            lg={3}
            xl={2}
            css={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <img src="/icon.svg" alt="Deca UI" width="35px" height="35px" />
            <Text
              as="h6"
              css={{
                fontFamily: "$mono",
                fontWeight: "$bold",
                ml: "$2",
              }}
            >
              DecaUI
            </Text>
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
            lg={6}
            xl={8}
          >
            <Text
              as="p"
              css={{
                fontFamily: "$mono",
                fontWeight: "$medium",
              }}
            >
              Documentation
            </Text>
            <Text
              as="p"
              css={{
                fontFamily: "$mono",
                fontWeight: "$medium",
              }}
            >
              Products
            </Text>
            <Text
              as="p"
              css={{
                fontFamily: "$mono",
                fontWeight: "$medium",
              }}
            >
              About Us
            </Text>
          </Grid>
          <Grid
            xs={6}
            lg={3}
            xl={2}
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
            <Button variant="ghost" icon={<GitHub />} />
            <Button variant="ghost" icon={<Twitter />} />
            <Button color="secondary" variant="flat" icon={<Heart />}>
              Sponsor
            </Button>
          </Grid>
          {/* For Mobile */}
          <Grid
            xs={6}
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
            <Button variant="flat" icon={<Menu />} />
          </Grid>
        </Grid.Container>
      </Container>
    </Box>
  );
};

export default Navbar;
