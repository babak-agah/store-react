import { LoadingButton } from "@mui/lab";
import { Box, Grid, TextField } from "@mui/material";
import ImageUploader from "@src/components/core/ImageUploader";
import {
  CreateProductCategoryForm,
  createProductCategoryApi,
  createProductCategoryValidation,
} from "@src/hooks/post/create-product-category.api";
import { IProductCategory } from "@src/types/IProduct-category";
import { useFormik } from "formik";
import { useState } from "react";

interface Props {
  parentId?: string;
  created: (productCategory: IProductCategory) => void;
}

const CreateProductCategory = ({ parentId, created }: Props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const initialValues = {
    name: "",
  };
  const {
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
    values,
    errors,
    touched,
  } = useFormik<CreateProductCategoryForm>({
    initialValues,
    validationSchema: createProductCategoryValidation,
    onSubmit: (values, helper) => {
      setLoading(true);
      createProductCategoryApi({ ...values, parent: parentId })
        .then((res) => {
          helper.resetForm({ values: initialValues });
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
          <ImageUploader
            src={values.icon}
            setSrc={(src) => setFieldValue("icon", src)}
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

export default CreateProductCategory;
