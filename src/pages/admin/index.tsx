import { ReactElement } from "react";
import AdminLayout from "@src/components/layouts/AdminLayout";
import { SELECT_USER } from "@src/store/slices/profile";

function AdminPage() {
  const user = SELECT_USER();

  return <main className="p-4">hello {user.username}</main>;
}

AdminPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <AdminLayout>{page}</AdminLayout>
    </>
  );
};

export default AdminPage;
