import AdminLayout from "@src/components/layouts/AdminLayout";
import React, { ReactElement } from "react";

const UsersPage = () => {
  return <div>UsersPage</div>;
};

UsersPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <AdminLayout>{page}</AdminLayout>
    </>
  );
};

export default UsersPage;
