import { LoadingButton } from "@mui/lab";
import { Box, Grid, TextField } from "@mui/material";
import ImageUploader from "@src/components/core/ImageUploader";
import {
  CreateProductCategoryForm,
  createProductCategoryValidation,
} from "@src/hooks/post/create-product-category.api";
import { updateProductCategoryApi } from "@src/hooks/post/update-product-category.api";
import { IProductCategory } from "@src/types/IProduct-category";
import { useFormik } from "formik";
import { useState } from "react";

interface Props {
  category: IProductCategory;

  updated: (productCategory: IProductCategory) => void;
}

const UpdateProductCategory = ({ category, updated }: Props) => {
  const [loading, setLoading] = useState<boolean>(false);

  const {
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
    values,
    errors,
    touched,
  } = useFormik<CreateProductCategoryForm>({
    initialValues: { name: category.name, icon: category.icon },
    validationSchema: createProductCategoryValidation,
    onSubmit: (values, helper) => {
      setLoading(true);
      updateProductCategoryApi(category._id, { ...values })
        .then((res) => {
          helper.resetForm();
          updated(res.data);
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
            value={values.name}
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
            update
          </LoadingButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UpdateProductCategory;
