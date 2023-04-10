import Button from "@src/components/core/Button";
import classNames from "classnames";
import React from "react";

const AdminRegisterPage = () => {
  const classes = classNames(
    "h-screen flex flex-column items-center justify-center",
    "[&>.form]:border [&>.form]:p-2 [&>.form]:rounded"
  );
  return (
    <main className={classes}>
      <form className={"form"} onSubmit={() => {}}>
        <h3>login</h3>
        <label>
          <div>username</div>
          <input type="text" placeholder="username" />
        </label>
        <label>
          <div>password</div>
          <input type="password" placeholder="****" />
        </label>
        <div>
          <Button classes="bg-blue-600">login</Button>
        </div>
      </form>
    </main>
  );
};

export default AdminRegisterPage;
