import { ReactElement } from "react";
import AdminLayout from "@src/components/layouts/AdminLayout";

function ProductsPage() {
  return <main className="p-4">this is admin products</main>;
}

ProductsPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <AdminLayout>{page}</AdminLayout>
    </>
  );
};

export default ProductsPage;
