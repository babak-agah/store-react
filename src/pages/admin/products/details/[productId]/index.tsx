import AdminLayout from "@src/components/layouts/AdminLayout";
import ProductDetails from "@src/components/pages/ProductDetails";
import { ReactElement } from "react";

const ProductDetailsPage = () => {
  return <ProductDetails />;
};

ProductDetailsPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <AdminLayout>{page}</AdminLayout>
    </>
  );
};

export default ProductDetailsPage;
