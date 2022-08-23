import { Box, Grid, Text, Container, Button } from "@deca-ui/react";
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
        <Grid.Container css={{ height: "$19" }} alignItems="center">
          <Grid
            xs={2}
            css={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Image src="/icon.svg" alt="Deca UI" width="35px" height="35px" />
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
            css={{ display: "flex", justifyContent: "center", gap: "$5" }}
            xs={8}
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
          <Grid xs={2} css={{ display: "flex", justifyContent: "flex-end" }}>
            <Button color="secondary" variant="flat">
              Sponsor
            </Button>
          </Grid>
        </Grid.Container>
      </Container>
    </Box>
  );
};

export default Navbar;
