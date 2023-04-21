import CreateProductForm from "@src/components/forms/CreateProduct";
import AdminLayout from "@src/components/layouts/AdminLayout";
import { IProduct } from "@src/types/IProduct";
import { useRouter } from "next/router";
import { ReactElement } from "react";

const CreateProductPage = () => {
  const router = useRouter();
  const categoryId = router.query.categoryId as string;
  return (
    <div>
      <CreateProductForm categoryId={categoryId} created={(product:IProduct) => {
        router.replace(`/admin/products/update/${product._id}`)
      }} />
    </div>
  );
};

CreateProductPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <AdminLayout>{page}</AdminLayout>
    </>
  );
};

export default CreateProductPage;
