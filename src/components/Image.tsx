import NextImage, { ImageProps as NextImageProps } from "next/image";

interface ImageProps extends NextImageProps {}

export function Image({ src, width, height, ...nextImageProps }: ImageProps) {
  return (
    <NextImage src={src} width={width} height={height} {...nextImageProps} />
  );
}
