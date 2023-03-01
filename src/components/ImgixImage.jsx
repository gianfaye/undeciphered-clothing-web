import Image from "next/image";
import { useImgixContext } from "./ImgixProvider";

export const ImgixImage = ({
                             width,
                             height,
                             src,
                             priority = false,
                             alt = "",
                             className = ''
                           }) => {
  const loader = useImgixContext();

  return (
    <Image
      className={className}
      loader={loader}
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
    />
  );
};
