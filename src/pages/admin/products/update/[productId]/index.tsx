import { Box, Container } from "@mui/material";
import ProductCategoryDetailsCard from "@src/components/cards/ProductCategoryDetailsCard";
import AdminLayout from "@src/components/layouts/AdminLayout";
import { getProductByIdApi } from "@src/hooks/get/get-product-by-id.api";
import { getProductCategoryByIdApi } from "@src/hooks/get/get-product-category-by-id.api";
import { IProduct } from "@src/types/IProduct";
import { ProductCategory } from "@src/types/product-category";
import { useRouter } from "next/router";
import { ReactElement, useEffect, useState } from "react";

const UpdateProductPage = () => {
  const [product, setProduct] = useState<IProduct>();
  const [category, setCategory] = useState<ProductCategory>();
  const router = useRouter();
  const productId = router.query.productId as string;

  useEffect(() => {
    if (!productId) return;
    getProductByIdApi(productId).then((res) => {
      setProduct(res.data);
    });
  }, [productId]);

  //   useEffect(() => {
  //     if (!product?.categoryId) return;

  //     getProductCategoryByIdApi(product.categoryId).then((res) => {
  //       setCategory(res.data);
  //     });
  //   }, [product?.categoryId]);

  return (
    <Container>
      {product?.categoryId ? (
        <ProductCategoryDetailsCard categoryId={product?.categoryId} />
      ) : null}
      <Box>name: {product?.name}</Box>
    </Container>
  );
};

UpdateProductPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <AdminLayout>{page}</AdminLayout>
    </>
  );
};

export default UpdateProductPage;
