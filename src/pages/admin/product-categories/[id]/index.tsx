import AdminLayout from "@src/components/layouts/AdminLayout";
import ProductCategoryDetails from "@src/components/pages/ProductCategoryDetails";

import { ReactElement } from "react";

const ProductCategoriesPage = () => {
  return <ProductCategoryDetails />;
};

ProductCategoriesPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <AdminLayout>{page}</AdminLayout>
    </>
  );
};

export default ProductCategoriesPage;
