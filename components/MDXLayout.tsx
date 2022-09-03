import React from "react";
import slugify from "slugify";
import { Container, Text, Box, Grid } from "@deca-ui/react";
import { useRouter } from "next/router";
import Link from "next/link";
import { renderToString } from "react-dom/server";

interface MDXLayoutProps {
  children?: React.ReactNode;
}

interface SidebarProps {
  currentPath?: string;
}

interface SubHeader {
  text: string;
  link: string;
}

interface TOCProps {
  currentPath?: string;
  subHeaders: Array<SubHeader>;
}

export const AllRoutes = {
  guide: ["Installation", "SSR"],
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

const Sidebar = ({ currentPath }: SidebarProps) => (
  <Box
    css={{
      display: "flex",
      flexDirection: "column",
      gap: "$4",
      position: "fixed",
      mt: "$4",
      pb: "$5",
      height: "calc(100% - $sizes$19 - $space$4)",
      overflow: "auto",
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
            const slug = `/docs/${categoryName}/${slugify(item)}`.toLowerCase();
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
                    bg: matchesSlug ? "$secondary-lighten-7" : "$transparent",
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
  </Box>
);

const TableOfContents = ({ subHeaders, currentPath }: TOCProps) => {
  const headerIdPath = `#${(currentPath as string).split("#")[1]}`;
  return (
    <Box
      css={{
        position: "sticky",
        pl: "$5",
        display: "flex",
        justifyContent: "flex-end",
        top: "$6",
      }}
    >
      <Box>
        <Text
          mono
          weight="semibold"
          css={{
            textTransform: "uppercase",
            letterSpacing: "$widest",
            color: "$primary",
          }}
        >
          Contents
        </Text>
        {subHeaders.map((subHeader: SubHeader) => {
          const matchesId = headerIdPath === subHeader.link;
          return (
            <Box
              key={`subheader-${subHeader.link}`}
              css={{
                mt: "$2",
                "& a": {
                  color: matchesId ? "$gray900" : "$gray600",
                  textDecoration: "none",
                  fontWeight: matchesId ? "$medium" : "$normal",
                },
              }}
            >
              <Link href={subHeader.link}>{subHeader.text}</Link>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

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

  const subHeaders = getHeadings(contentString);

  return (
    <Container
      px="md"
      css={{
        mt: "$3",
      }}
    >
      <Grid.Container css={{ overflow: "visible" }}>
        <Grid
          md={3}
          css={{
            "@n": {
              display: "none",
            },
            "@md": {
              display: "block",
            },
          }}
        >
          <Sidebar currentPath={asPath} />
        </Grid>
        <Grid n={12} sm={10} md={7}>
          <Box
            css={{
              mt: "$3",
            }}
          >
            {children}
          </Box>
        </Grid>
        <Grid
          sm={2}
          css={{
            "@n": {
              display: "none",
            },
            "@sm": {
              display: "block",
            },
          }}
        >
          <TableOfContents subHeaders={subHeaders} currentPath={asPath} />
        </Grid>
      </Grid.Container>
    </Container>
  );
};

export default MDXLayout;
