import AdminLayout from "@src/components/layouts/AdminLayout";
import { ReactElement } from "react";

const CreateProductPage = () => {
  return <div>CreateProductPage</div>;
};

CreateProductPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <AdminLayout>{page}</AdminLayout>
    </>
  );
};

export default CreateProductPage;
