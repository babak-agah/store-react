import { Box, Card } from "@mui/material";
import { ProductCategory } from "@src/types/product-category";
import Link from "next/link";
{
  /* <Link href={`/admin/product-categories/${category._id}`}></Link> */
}

interface Props {
  data: ProductCategory;
}

const AdminProductCategoryCard = ({ data }: Props) => {
  const { _id, name, parent, ancestors } = data;
  return (
    <Card sx={{ p: 1, mt: 2, display: "flex", gap: 2 }}>
      {/* <Box>{_id}</Box> */}
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

export default AdminProductCategoryCard;
