import { Box, Card } from "@mui/material";
import Img from "@src/components/core/Img";
import { ProductCategory } from "@src/types/product-category";
import Link from "next/link";
{
  /* <Link href={`/admin/product-categories/${category._id}`}></Link> */
}

interface Props {
  data: ProductCategory;
}

const RowProductCategoryCard = ({ data }: Props) => {
  const { _id, name, parent, ancestors, icon } = data;
  return (
    <Card sx={{ p: 1, mt: 2, display: "flex", gap: 2, alignItems: "center" }}>
      {/* <Box>{_id}</Box> */}
      <Box>
        <Img
          sx={{ width: "50px", height: "50px", borderRadius: "10px" }}
          sxImage={{ objectFit: "cover" }}
          src={icon}
        />
      </Box>
      <Box>{name}</Box>
      <Box>{parent?.name}</Box>
      <Box>
        {ancestors?.map((ancestor, index) => (
          <Box component={"span"} key={ancestor._id}>
            {ancestor.name}
            {index !== ancestors.length - 1 ? ", " : ""}
          </Box>
        ))}
      </Box>
    </Card>
  );
};

export default RowProductCategoryCard;
