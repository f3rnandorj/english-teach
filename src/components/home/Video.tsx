interface VideoProps {
  width?: number;
  height?: number;
  src: string;
}

export function Video({ height = 197, width = 351, src }: VideoProps) {
  return (
    <iframe
      width={width}
      height={height}
      src={src}
      title="INSCRIÇÕES ABERTAS"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    />
  );
}
