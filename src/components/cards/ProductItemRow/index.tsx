import { Box, Card, Grid } from "@mui/material";
import Img from "@src/components/core/Img";
import { IProductItem } from "@src/types/IProduct-item";

interface Props {
  data: IProductItem;
}
const ProductItemRow = ({ data }: Props) => {
  const { sku, name, price, qtyInStock, images, configurations } = data;
  return (
    <Card sx={{ padding: "20px" }}>
      <Grid container alignItems={"center"}>
        <Grid xs={2} item>
          <Box>{sku}</Box>
        </Grid>
        <Grid xs={2} item>
          {images.length ? (
            <Img
              src={images[0]}
              sx={{
                width: "50px",
                height: "50px",
                objectFit: "contain",
                borderRadius: "6px",
              }}
            />
          ) : null}
        </Grid>
        <Grid xs={2} item>
          <Box>{name}</Box>
        </Grid>
        <Grid xs={2} item>
          <Box>{price}</Box>
        </Grid>
        <Grid xs={2} item>
          <Box>{qtyInStock}</Box>
        </Grid>
        <Grid xs={2} item container>
          {configurations.map((v) => (
            <Box key={v.variationId}>
              {v.name}: {JSON.stringify(v.values)}
            </Box>
          ))}
        </Grid>
      </Grid>
    </Card>
  );
};

export default ProductItemRow;
