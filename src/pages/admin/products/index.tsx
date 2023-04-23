import { ReactElement, useEffect, useState } from "react";
import AdminLayout from "@src/components/layouts/AdminLayout";
import { getProductsApi } from "@src/hooks/get/get-products.api";
import { Box } from "@mui/material";
import { IProduct } from "@src/types/IProduct";
import Link from "next/link";

function ProductsPage() {
  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    getProductsApi({ count: 100, page: 1 })
      .then((res) => {
        setProducts(res.data.items);
      })
      .catch(console.log);
  }, []);
  return (
    <Box>
      {products.map((product) => (
        <Box key={product._id}>
          <Link href={`/admin/products/details/${product._id}`}>
            {product.name}
          </Link>
        </Box>
      ))}
    </Box>
  );
}

ProductsPage.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default ProductsPage;
