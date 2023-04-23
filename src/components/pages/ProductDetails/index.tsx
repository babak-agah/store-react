import { Box, Button, Divider } from "@mui/material";
import CreateAndUpdateProductForm from "@src/components/forms/CreateAndUpdateProduct";
import CreateAndUpdateProductItemFrom from "@src/components/forms/CreateAndUpdateProductItem";

import { getProductByIdApi } from "@src/hooks/get/get-product-by-id.api";
import { getProductCategoryByIdApi } from "@src/hooks/get/get-product-category-by-id.api";
import { IProduct } from "@src/types/IProduct";
import { IProductCategory } from "@src/types/IProduct-category";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ProductDetails = () => {
  const [product, setProduct] = useState<IProduct>();
  const [category, setCategory] = useState<IProductCategory>();
  const router = useRouter();
  const productId = router.query.productId as string;

  const getData = async (productId: string) => {
    try {
      const res = await getProductByIdApi(productId);
      setProduct(res.data);
      const res2 = await getProductCategoryByIdApi(res.data.categoryId);
      setCategory(res2.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!productId) return;
    getData(productId);
  }, [productId]);

  return (
    <>
      {product?.categoryId && category ? (
        <Box>
          <Box my={2}>
            <CreateAndUpdateProductForm
              method={"UPDATE"}
              defaultValues={{
                name: product.name,
                description: product.description || "",
                images: product.images || [],
                configurations: product.configurations,
              }}
              category={category}
              created={() => {}}
              productId={product._id}
            />
          </Box>
          <Divider />
          <Box my={2}>
            {product.productItems.map((productItem) => (
              <Box my={2} key={productItem.sku}>
                <CreateAndUpdateProductItemFrom
                  method="UPDATE"
                  defaultValues={productItem}
                  productId={product._id}
                  category={category}
                  updated={() => {}}
                />
              </Box>
            ))}
            <Divider />
            <Box my={2}>
              <CreateAndUpdateProductItemFrom
                productId={product._id}
                category={category}
                created={(data) => {
                  const newProduct = { ...product };
                  newProduct.productItems = data.productItems;
                  setProduct(newProduct);
                }}
              />
            </Box>
          </Box>
        </Box>
      ) : null}
    </>
  );
};

export default ProductDetails;
