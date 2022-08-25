import { Box, Grid, Text, Container, Button } from "@deca-ui/react";
import { GitHub, Heart, Twitter, Menu } from "react-feather";
import Image from "next/image";

const Navbar = () => {
  return (
    <Box
      css={{
        position: "fixed",
        top: 0,
        right: 0,
        bg: "$white",
        width: "100%",
        height: "$19",
        borderBottom: "solid $gray100 2px",
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
                ml: "calc($2 + $0)",
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
