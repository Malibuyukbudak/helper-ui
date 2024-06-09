import NextImage, { ImageProps as NextImageProps } from "next/image";

export function Image({
  src,
  width,
  height,
  loading = "lazy",
  alt = "",
  style,
}: NextImageProps) {
  return (
    <NextImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      quality={100}
      style={style}
    />
  );
}
