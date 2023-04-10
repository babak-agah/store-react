import { ReactElement } from "react";
import AdminLayout from "@src/components/layouts/AdminLayout";

function AdminPage() {
  return <main className="p-4">this is admin index</main>;
}

AdminPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <AdminLayout>{page}</AdminLayout>
    </>
  );
};

export default AdminPage;
