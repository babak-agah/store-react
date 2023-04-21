import AdminLayout from "@src/components/layouts/AdminLayout";
import { ReactElement } from "react";

const ProductDetailsAdmin = () => {
  return <div>ProductDetailsAdmin</div>;
};

ProductDetailsAdmin.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <AdminLayout>{page}</AdminLayout>
    </>
  );
};

export default ProductDetailsAdmin;
