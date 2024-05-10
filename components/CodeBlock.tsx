import React, { useEffect, useState } from "react";
import { Box, Button, Popover, theme, CSS } from "../deca-ui/main";
import { Prism as SyntaxHighligher } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Copy, ArrowDown } from "react-feather";

interface CodeBlockProps {
  children: string;
  css?: CSS;
  lang?: string;
  lg?: boolean;
  gutters?: boolean;
  control?: boolean;
  limit?: boolean;
}

const limiter = (text: string) => {
  const textArr = text.split("\n");
  const limitedText = [];
  for (let i = 0; i < 30; i++) {
    limitedText.push(textArr[i]);
  }
  return limitedText.join("\n");
};

const CodeBlock = ({
  children,
  css,
  lang = "jsx",
  lg = false,
  gutters = false,
  control = false,
  limit = false,
  ...props
}: CodeBlockProps) => {
  const [showMore, setShowMore] = useState(!limit);

  return (
    <Box
      css={{
        position: "relative",
        width: "100%",
        height: "100%",
        my: gutters ? "$3" : "$n",
        "& span": {
          textDecoration: "none!important",
        },
        ...css,
      }}
      {...props}
    >
      {!showMore && (
        <Box
          css={{
            position: "absolute",
            bottom: "$3",
            left: "calc($3 + $1)",
          }}
        >
          <Button
            variant="flat"
            color="secondary"
            size="sm"
            iconRight={<ArrowDown />}
            onClick={() => setShowMore(true)}
            css={{ width: "$25" }}
          >
            Show More
          </Button>
        </Box>
      )}
      {control && (
        <Box
          css={{
            position: "absolute",
            right: "$2",
            top: "$2",
          }}
        >
          <Popover placement="left" offset={4}>
            <Popover.Trigger>
              <Button
                variant={
                  {
                    "@n": "solid",
                    "@xs": "ghost",
                  } as any
                }
                color={
                  {
                    "@n": "primary",
                    "@xs": "secondary",
                  } as any
                }
                size="sm"
                icon={<Copy />}
                css={{ br: "$xs" }}
                onClick={() => {
                  navigator.clipboard.writeText(children);
                }}
              />
            </Popover.Trigger>
            <Popover.Content
              css={{
                m: "$n",
                p: "$1",
                px: "$3",
                bg: "$gray800",
                color: "$white",
                fontSize: "$bodySm",
              }}
            >
              Copied
            </Popover.Content>
          </Popover>
        </Box>
      )}
      <SyntaxHighligher
        language={lang}
        style={atomDark}
        customStyle={{
          borderRadius: "15px",
          padding: lg ? theme.space[4].value : theme.space[3].value,
          paddingBottom: showMore
            ? lg
              ? theme.space[4].value
              : theme.space[3].value
            : theme.space[5].value,
          fontSize: lg
            ? theme.fontSizes.body.value
            : theme.fontSizes.bodySm.value,
          width: "100%",
          height: "100%",
          margin: 0,
        }}
      >
        {showMore ? children : limiter(children)}
      </SyntaxHighligher>
    </Box>
  );
};

export default CodeBlock;
