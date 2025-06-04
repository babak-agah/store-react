import { Box, SxProps, styled } from "@mui/material";
import { uploadImageApi } from "@src/hooks/post/upload-image.api";
import React, { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { BASE_URL } from "@src/constants/api-base-url";

const Root = styled(Box)(({ theme }) => ({
  position: "relative",
  border: "1px solid #ddd",
  borderRadius: "10px",
  height: "100px",
  width: "100px",
  cursor: "pointer",
  overflow: "hidden",
  "& input": {
    width: "100%",
    height: "100%",
    opacity: 0,
    cursor: "pointer",
    zIndex: 1,
  },
  "& img": {
    position: "absolute",
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  "& .loading": {
    position: "absolute",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
  },
}));

interface Props {
  sx?: SxProps;
  prefix?: string;
  src?: string;
  setSrc: (src: string) => void;
  onLoading?: (v: boolean) => void;
}

const ImageUploader = ({
  prefix = `${BASE_URL}/images/`,
  src,
  sx,
  setSrc,
  onLoading,
}: Props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) return;
    if (loading) return;
    setLoading(true);
    onLoading && onLoading(true);
    uploadImageApi(e.target.files[0])
      .then((res) => {
        setSrc(res.data.url);
      })
      .catch(console.log)
      .finally(() => {
        onLoading && onLoading(false);
        setLoading(false);
      });
  };
  return (
    <Root sx={sx}>
      {loading ? (
        <div className={"loading"}>
          <CircularProgress disableShrink />
        </div>
      ) : null}
      {src ? <img src={prefix + src} alt={"hi"} /> : null}
      <input type={"file"} onChange={changeHandler} />
    </Root>
  );
};

export default ImageUploader;
