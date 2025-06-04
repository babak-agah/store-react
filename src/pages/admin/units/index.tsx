import { LoadingButton } from "@mui/lab";
import { Box, TextField } from "@mui/material";
import AdminLayout from "@src/components/layouts/AdminLayout";
import { getUnitsApi } from "@src/hooks/get/get-units.api";
import {
  CreateUnitFormApi,
  createUnitApi,
  createUnitValidation,
} from "@src/hooks/post/create-unit.api";
import { Unit } from "@src/types/unit";
import { useFormik } from "formik";
import { ReactElement, useEffect, useState } from "react";

const UnitsPage = () => {
  const [units, setUnits] = useState<Unit[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik<CreateUnitFormApi>({
      initialValues: { name: "" },
      validationSchema: createUnitValidation,
      onSubmit: (values, helper) => {
        setLoading(true);
        createUnitApi(values)
          .then((res) => {
            helper.resetForm();
            setUnits((preUnits) => [res.data, ...preUnits]);
          })
          .catch(console.log)
          .finally(() => setLoading(false));
      },
    });

  useEffect(() => {
    getUnitsApi()
      .then((res) => {
        setUnits(res.data);
      })
      .catch(console.log);
  }, []);

  return (
    <>
      <Box
        component={"form"}
        onSubmit={handleSubmit}
        sx={{ display: "flex", alignItems: "center", gap: 1 }}
      >
        <TextField
          name={"name"}
          onChange={handleChange}
          onBlur={handleBlur}
          error={Boolean(errors.name && touched.name)}
          helperText={touched.name && errors.name}
        />
        <LoadingButton loading={loading} type="submit" variant={"contained"}>
          add unit
        </LoadingButton>
      </Box>
      <Box>
        {units.map((unit, index) => (
          <Box key={index}>{unit.name}</Box>
        ))}
      </Box>
    </>
  );
};

UnitsPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <AdminLayout>{page}</AdminLayout>
    </>
  );
};

export default UnitsPage;
