import { Box, SxProps } from "@mui/material";

import {
  memo,
  MouseEventHandler,
  ReactEventHandler,
  useEffect,
  useState,
} from "react";
import Image, { StaticImageData } from "next/image";
import { BASE_URL } from "@src/constants/api-base-url";

const DEFAULT_BLUR_DATA_URL = "/svgs/defaultBlur.svg";
const DEFAULT_IMAGE = "/svgs/default-image.svg";

interface PropsType {
  src?: string;
  defaultImage?: string | StaticImageData;
  loading?: "eager" | "lazy";
  className?: string;
  quality?: number;
  objectFit?: "cover" | "contain";
  priority?: boolean;
  alt?: string;
  prefix?: string;
  onError?: ReactEventHandler;
  onClick?: MouseEventHandler<HTMLImageElement>;
  sx?: SxProps;
  sxImage?: SxProps;
}

const Img = ({
  src,
  sx,
  loading = "lazy",
  className,
  quality,
  priority,
  alt = "mazzaneh.ir",
  prefix = `${BASE_URL}/images/`,
  sxImage,
  onError,
  onClick,
}: PropsType) => {
  const [image, setImage] = useState<string | StaticImageData>(
    src ? prefix + src : DEFAULT_IMAGE
  );

  const errorHandler: ReactEventHandler<HTMLImageElement> = (e) => {
    setImage(DEFAULT_IMAGE);
    onError && onError(e);
  };

  useEffect(() => {
    if (src) {
      setImage(prefix + src);
    } else {
      setImage(DEFAULT_IMAGE);
    }
  }, [src, prefix]);

  return (
    <>
      <Box
        className={`Img-img ${className}`}
        sx={{
          background: "#fff",
          overflow: "hidden",
          position: "relative",
          width: "100%",
          height: "100%",
          "& img": sxImage as any,
          ...sx,
        }}
      >
        <Image
          alt={alt}
          loading={loading}
          blurDataURL={DEFAULT_BLUR_DATA_URL}
          src={image as any}
          quality={quality}
          fill={true}
          placeholder="blur"
          priority={priority}
          onClick={onClick}
          onError={errorHandler}
        />
      </Box>
    </>
  );
};

export default memo(Img);
