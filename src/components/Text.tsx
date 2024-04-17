type AllowedTags = "h1" | "h2" | "h3" | "span" | "p";

interface TextProps {
  tag?: AllowedTags;
  preset?: TextVariants;
  children: React.ReactNode;
  className?: string;
  isMedium?: boolean;
  isBold?: boolean;
}

export function Text({
  tag = "p",
  preset = "paragraph",
  className = "",
  isBold = false,
  isMedium = false,
  children,
}: TextProps) {
  const Tag = tag as keyof JSX.IntrinsicElements;

  const fontSize = $fontSizeStyles[preset];
  const fontWeight = getFontWeight(isMedium, isBold);

  return (
    <Tag className={` ${className}  font-poppins ${fontSize} ${fontWeight} `}>
      {children}
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

type TextVariants = "paragraph" | "heading";

export const $fontSizeStyles: Record<TextVariants, string> = {
  heading: "text-6xl",
  paragraph: "text-3xl",
};
