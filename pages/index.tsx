import type { NextPage } from "next";
import { Box, Container, Text, Button, Grid } from "@deca-ui/react";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <Box>
        <Container px="md">
          <Grid.Container
            xs={12}
            md={6}
            alignItems="center"
            css={{ minHeight: "100vh" }}
          >
            <Grid>
              <Text as="h1" css={{ fontFamily: "$mono" }}>
                Make beautiful websites regardless of your design experience.
              </Text>
              <Text
                as="h6"
                css={{
                  mt: "$3",
                  color: "$gray600",
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
                  alignItems: "stretch",
                  mt: "$4",
                  gap: "$3",
                }}
              >
                <Button size="lg">Get Started</Button>
                <Box
                  css={{
                    bg: "$white",
                    borderStyle: "solid",
                    borderWidth: "$normal",
                    borderColor: "$gray300",
                    color: "$gray700",
                    dflex: "center",
                    px: "$5",
                    fontFamily: "$mono",
                    br: "$sm",
                  }}
                >
                  $ npm install @deca-ui/react
                </Box>
              </Box>
            </Grid>
            <Grid></Grid>
          </Grid.Container>
        </Container>
      </Box>
    </Layout>
  );
};

export default Home;
