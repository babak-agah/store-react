import { Box, Button, Divider } from "@mui/material";

import CreateProductForm from "@src/components/forms/CreateProduct";
import { getProductByIdApi } from "@src/hooks/get/get-product-by-id.api";
import { IProduct } from "@src/types/IProduct";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ProductDetails = () => {
  const [product, setProduct] = useState<IProduct>();
  const router = useRouter();
  const productId = router.query.productId as string;

  useEffect(() => {
    if (!productId) return;
    getProductByIdApi(productId).then((res) => {
      setProduct(res.data);
    });
  }, [productId]);

  return (
    <Box>
      <Box my={2}>
        {product?.categoryId ? (
          <CreateProductForm
            method={"UPDATE"}
            defaultValues={{
              name: product.name,
              description: product.description || "",
              images: product.images || [],
              configurations: product.configurations,
            }}
            categoryId={product?.categoryId}
            created={() => {}}
            productId={product._id}
          />
        ) : null}
      </Box>
      <Divider />
      <Box my={2}>
        <Button>add item</Button>
      </Box>
    </Box>
  );
};

export default ProductDetails;
