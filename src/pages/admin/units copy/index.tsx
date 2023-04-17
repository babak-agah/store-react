import AdminLayout from "@src/components/layouts/AdminLayout";
import { ReactElement } from "react";

const UnitsPage = () => {
  return <div>UnitsPage</div>;
};

UnitsPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <AdminLayout>{page}</AdminLayout>
    </>
  );
};

export default UnitsPage;
