import { LoadingButton } from "@mui/lab";
import { Box, Grid, TextField } from "@mui/material";
import ImagesUploader from "@src/components/core/ImagesUploader";
import { updateProductApi } from "@src/hooks/patch/update-product.api";
import {
  ICreateProductApi,
  createProductApi,
  createProductShema,
} from "@src/hooks/post/create-product.api";

import { FormikHelpers, useFormik } from "formik";
import { useEffect, useState } from "react";
import ConfigGenerator from "../ConfigGenerator";
import { getProductCategoryByIdApi } from "@src/hooks/get/get-product-category-by-id.api";
import { IProductCategory } from "@src/types/IProduct-category";

interface Props {
  category: IProductCategory;
  defaultValues?: ICreateProductApi;
  method?: "CREATE" | "UPDATE";
  productId?: string;
  created: (product: any) => void;
}

const CreateAndUpdateProductForm = ({
  category,
  defaultValues,
  method = "CREATE",
  productId,
  created,
}: Props) => {
  const [loading, setLoading] = useState<boolean>(false);

  const initialValues: ICreateProductApi = defaultValues || {
    name: "",
    description: "",
    images: [],
    configurations: [],
  };

  const onSubmit = (
    values: ICreateProductApi,
    helper: FormikHelpers<ICreateProductApi>
  ) => {
    setLoading(true);
    if (method === "CREATE") {
      createProductApi(category._id, values)
        .then((res) => {
          helper.resetForm();
          created(res.data);
        })
        .catch(console.log)
        .finally(() => setLoading(false));
    } else if (method === "UPDATE" && productId) {
      updateProductApi(productId, values)
        .then((res) => {
          console.log(res.data);
        })
        .catch(console.log)
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik<ICreateProductApi>({
    initialValues,
    validationSchema: createProductShema,
    onSubmit,
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
          <TextField
            value={values.description}
            fullWidth
            name={"description"}
            type={"text"}
            placeholder={"description"}
            onChange={handleChange}
            onBlur={handleBlur}
            error={Boolean(errors.description && touched.description)}
            rows={4}
            multiline
            helperText={touched.description && errors.description}
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
        {category?.variations?.length ? (
          <Grid item xs={12}>
            <ConfigGenerator
              values={values.configurations || []}
              variations={category.variations}
              onChange={(v) => setFieldValue("configurations", v)}
            />
          </Grid>
        ) : null}

        <Grid item xs={12} md={2} lg={1}>
          <LoadingButton
            variant={"contained"}
            fullWidth={true}
            type={"submit"}
            loading={loading}
            disableElevation
            sx={{ borderRadius: "8px" }}
          >
            accept
          </LoadingButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CreateAndUpdateProductForm;
