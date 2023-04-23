import React from "react";

const FormGenerator = () => {
  return <div>FormGenerator</div>;
};

export default FormGenerator;

const form = [
  {
    name: "size",
    initialValue: ["xl"],
    model: "select",
    options: ["xl", "xm", "sm"],
  },
  {
    name: "name",
    initialValue: ["hi"],
    model: "text",
  },
];
