import { Stack } from "@mui/material";
import ImageUploader from "../ImageUploader";
import { useEffect, useState } from "react";

interface Props {
  value: string[];
  max?: number;
  min?: number;
  onLoading?: (v: boolean) => void;
  onChange?: (v: string[]) => void;
}

const DEFUALT_IMAGE = { src: "", loading: false };

const ImagesUploader = ({
  value,
  max = 10,
  min = 1,
  onLoading,
  onChange,
}: Props) => {
  const [images, setImages] = useState<{ src: string; loading: boolean }[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    const newImages = value.map((v, index) => ({ src: v, loading: false }));
    setImages(newImages);
  }, [value]);

  const loadingHandler = (loadingValue: boolean, index: number) => {
    setImages((pre) => {
      const newImages = [...pre];
      newImages[index].loading = loadingValue;
      return newImages;
    });
    onLoadingHandler();
  };

  const onLoadingHandler = () => {
    if (onLoading) {
      const isLoadingTrue = Boolean(
        loading || images.find((i) => i.loading === true)
      );
      onChange && onLoading(isLoadingTrue);
    }
  };

  const srcHandler = (src: string, index: number | "NEW") => {
    const newImages = [...images];
    if (index === "NEW") {
      newImages.push({ src, loading: false });
    } else {
      newImages[index].src = src;
    }
    if (value) {
      onChange && onChange(newImages.map((image) => image.src));
    } else {
      setImages(newImages);
    }
  };

  return (
    <Stack direction="row" spacing={1}>
      {images.map((image, index) => (
        <ImageUploader
          onLoading={(loading) => loadingHandler(loading, index)}
          src={image.src}
          setSrc={(src) => {
            console.log("src: ", src);
            // srcHandler(src, index);
          }}
        />
      ))}

      {images.length < max ? (
        <ImageUploader
          onLoading={(loading) => {
            setLoading(() => loading);
            onLoadingHandler();
          }}
          src={""}
          setSrc={(src) => {
            srcHandler(src, "NEW");
          }}
        />
      ) : null}
    </Stack>
  );
};

export default ImagesUploader;
