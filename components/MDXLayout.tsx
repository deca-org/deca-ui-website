import React from "react";
import slugify from "slugify";
import { Container, Text, Box, Grid } from "@deca-ui/react";
import { useRouter } from "next/router";
import Link from "next/link";
import { renderToString } from "react-dom/server";

interface MDXLayoutProps {
  children?: React.ReactNode;
}

interface Sidebar {
  currentPath?: string;
}

const AllRoutes = {
  guide: ["Installation", "SSR", "Design Principles"],
  components: [
    "Badge",
    "Box",
    "Button",
    "Checkbox",
    "Container",
    "Grid",
    "Input",
    "Modal",
    "Popover",
    "Radio",
    "Switch",
    "Text",
    "DecaUIProvider",
  ],
};

const Sidebar = ({ currentPath }: Sidebar) => (
  <Box css={{ mt: "$3", display: "flex", flexDirection: "column", gap: "$4" }}>
    {Object.entries(AllRoutes).map((category, idx) => {
      const categoryName = category[0];
      const categoryItems = category[1];
      return (
        <Box key={`category-${idx}`}>
          <Text
            mono
            weight="semibold"
            css={{
              textTransform: "uppercase",
              letterSpacing: "$widest",
              color: "$primary",
            }}
          >
            {categoryName}
          </Text>

          {categoryItems.map((item, idx) => {
            const slug = `/docs/${categoryName}/${slugify(item)}`.toLowerCase();
            const matchesSlug = currentPath === slug;

            return (
              <Box
                key={`item-${idx}`}
                css={{
                  mt: "$2",
                  display: "flex",
                  flexDirection: "column",
                  "& a": {
                    pl: "$2",
                    py: "$1",
                    mr: "$5",
                    br: "$xs",
                    fontWeight: matchesSlug ? "$medium" : "$normal",
                    transition: "$default",
                    color: matchesSlug ? "$secondary" : "$gray600",
                    bg: matchesSlug ? "$secondary-lighten-7" : "$transparent",
                    textDecoration: "none",
                    "&:hover": {
                      color: matchesSlug ? "$secondary" : "$gray900",
                      bg: matchesSlug ? "$secondary-lighten-7" : "$transparent",
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
  </Box>
);

const MDXLayout = ({ children }: MDXLayoutProps) => {
  const { asPath } = useRouter();
  const contentString = renderToString(children as React.ReactElement);

  const getHeadings = (source: string) => {
    const regex = /<h2>(.*?)<\/h2>/g;

    if (source.match(regex)) {
      return (source.match(regex) as Array<string>).map((heading: string) => {
        const headingText = heading.replace("<h2>", "").replace("</h2>", "");

        const link = "#" + slugify(headingText).toLowerCase();

        return {
          text: headingText,
          link,
        };
      });
    }

    return [];
  };

  const headings = getHeadings(contentString);

  return (
    <Container
      px="md"
      css={{
        mt: "$3",
      }}
    >
      <Grid.Container>
        <Grid n={3}>
          <Sidebar currentPath={asPath} />
        </Grid>
        <Grid n={9}>
          <Box css={{ mt: "$2" }}>{children}</Box>
        </Grid>
      </Grid.Container>
    </Container>
  );
};

export default MDXLayout;
