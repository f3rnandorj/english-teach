import React, { DetailedHTMLProps, HTMLAttributes } from "react";

type TextHTMLElement = DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
>;

type AllowedTags = "h1" | "h2" | "h3" | "span" | "p";
type HTMLAdaptedProps = Pick<TextHTMLElement, "dangerouslySetInnerHTML">;

interface TextProps extends HTMLAdaptedProps {
  tag?: AllowedTags;
  preset?: TextVariants;
  children?: React.ReactNode;
  className?: string;
  isMedium?: boolean;
  isBold?: boolean;
}

export function Text({
  tag = "span",
  preset = "paragraph",
  className = "",
  isBold = false,
  isMedium = false,
  children,
  ...textProps
}: TextProps) {
  const Tag = tag as keyof JSX.IntrinsicElements;

  const fontSize = $fontSizeStyles[preset];
  const fontWeight = getFontWeight(isMedium, isBold);

  return (
    <Tag
      className={` ${className}  font-poppins ${fontSize} ${fontWeight} `}
      {...textProps}
    >
      {children && children}
    </Tag>
  );
}

function getFontWeight(isMedium: boolean, isBold: boolean) {
  switch (true) {
    case isMedium:
      return "font-medium";

    case isBold:
      return "font-bold";

    default:
      return "font-normal";
  }
}

type TextVariants = "paragraph" | "heading" | "small";

export const $fontSizeStyles: Record<TextVariants, string> = {
  heading: " lg:text-6xl text-3xl",
  paragraph: "lg:text-[1.325rem]",
  small: "text-base",
};
