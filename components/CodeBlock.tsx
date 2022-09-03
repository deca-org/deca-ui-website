import React, { useEffect, useState } from "react";
import { Box, Button, Popover, theme, CSS } from "@deca-ui/react";
import { Prism as SyntaxHighligher } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Copy } from "react-feather";

interface CodeBlockProps {
  children: string;
  css?: CSS;
  lang?: string;
  lg?: boolean;
  gutters?: boolean;
  control?: boolean;
}

const CodeBlock = ({
  children,
  css,
  lang = "jsx",
  lg = false,
  gutters = false,
  control = false,
  ...props
}: CodeBlockProps) => {
  const [sm, setSm] = useState(false);

  useEffect(() => {
    const resizer = () => {
      if (window.innerWidth < 650) {
        setSm(true);
      } else {
        setSm(false);
      }
    };
    window.addEventListener("resize", resizer);
    return () => {
      window.removeEventListener("resize", resizer);
    };
  }, []);

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
      {control && (
        <Box
          css={{
            position: "absolute",
            right: "$2",
            top: "$2",
          }}
        >
          <Popover placement="top" offset={4}>
            <Popover.Trigger>
              <Button
                variant={sm ? "solid" : "ghost"}
                color={sm ? "primary" : "secondary"}
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
                bg: "$gray900",
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
          fontSize: lg
            ? theme.fontSizes.body.value
            : theme.fontSizes.bodySm.value,
          width: "100%",
          height: "100%",
          margin: 0,
        }}
      >
        {children}
      </SyntaxHighligher>
    </Box>
  );
};

export default CodeBlock;
