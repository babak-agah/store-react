import { LoadingButton } from "@mui/lab";
import { Box, Grid, TextField } from "@mui/material";
import ImagesUploader from "@src/components/core/ImagesUploader";
import {
  ICreateProductApi,
  createProductApi,
  createProductShema,
} from "@src/hooks/post/create-product.api";

import { useFormik } from "formik";
import { useState } from "react";

interface Props {
  categoryId: string;
  created: (product: any) => void;
}

const CreateProductForm = ({ categoryId, created }: Props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const initialValues = {
    name: "",
    description: "",
    images: [],
  };
  const {
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
    values,
    errors,
    touched,
  } = useFormik<ICreateProductApi>({
    initialValues,
    validationSchema: createProductShema,
    onSubmit: (values, helper) => {
      setLoading(true);
      createProductApi(categoryId, values)
        .then((res) => {
          helper.resetForm();
          created(res.data);
        })
        .catch(console.log)
        .finally(() => setLoading(false));
    },
  });
  return (
    <Box component={"form"} onSubmit={handleSubmit}>
      <Grid container gap={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            name={"name"}
            type={"text"}
            placeholder={"name"}
            onChange={handleChange}
            onBlur={handleBlur}
            error={Boolean(errors.name && touched.name)}
            helperText={touched.name && errors.name}
          />
        </Grid>

        <Grid item xs={12}>
          <ImagesUploader
            value={values.images}
            onChange={(images) => {
              console.log(images);
              setFieldValue("images", images);
            }}
            onLoading={setLoading}
          />
        </Grid>

        <Grid item xs={12}>
          <LoadingButton
            variant={"contained"}
            fullWidth={true}
            type={"submit"}
            loading={loading}
          >
            create
          </LoadingButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CreateProductForm;
