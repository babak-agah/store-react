import { LoadingButton } from "@mui/lab";
import { Box, Grid, TextField } from "@mui/material";
import ImagesUploader from "@src/components/core/ImagesUploader";

import { FormikHelpers, useFormik } from "formik";
import { useState } from "react";
import ConfigGenerator from "../ConfigGenerator";
import { IProductCategory } from "@src/types/IProduct-category";
import { IProductItem } from "@src/types/IProduct-item";
import {
  ICreateProductItemForm,
  createProductItemApi,
  createProductItemShema,
} from "@src/hooks/post/create-product-item.api";
import { updateProductItemApi } from "@src/hooks/patch/update-product-item.api";
import { IProduct } from "@src/types/IProduct";

interface Props {
  category: IProductCategory;
  defaultValues?: ICreateProductItemForm;
  method?: "CREATE" | "UPDATE";
  productId: string;
  created?: (product: IProduct) => void;
  updated?: (product: IProduct) => void;
}

const CreateAndUpdateProductItemFrom = ({
  category,
  defaultValues,
  method = "CREATE",
  productId,
  created,
  updated,
}: Props) => {
  const [loading, setLoading] = useState<boolean>(false);

  const initialValues: ICreateProductItemForm = defaultValues || {
    name: "",
    sku: "",
    price: 1,
    status: 0,
    qtyInStock: 0,
    images: [],
    configurations: [],
  };

  const onSubmit = async (
    values: ICreateProductItemForm,
    helper: FormikHelpers<ICreateProductItemForm>
  ) => {
    try {
      setLoading(true);
      if (method === "CREATE") {
        const res = await createProductItemApi(productId, values);
        helper.resetForm();
        setLoading(false);
        created && created(res.data);
      }
      if (method === "UPDATE") {
        const res = await updateProductItemApi(productId, values);
        setLoading(false);
        updated && updated(res.data);
      }
    } catch (error) {
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
  } = useFormik<ICreateProductItemForm>({
    initialValues,
    validationSchema: createProductItemShema,
    onSubmit,
  });

  return (
    <Box component={"form"} onSubmit={handleSubmit}>
      <Grid container gap={2}>
        <Grid item xs={12}>
          <TextField
            label={"sku"}
            value={values.sku}
            fullWidth
            name={"sku"}
            type={"text"}
            placeholder={"sku"}
            onChange={handleChange}
            onBlur={handleBlur}
            error={Boolean(errors.sku && touched.sku)}
            helperText={touched.sku && errors.sku}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label={"name"}
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
            label={"price"}
            value={values.price}
            fullWidth
            name={"price"}
            type={"number"}
            placeholder={"price"}
            onChange={handleChange}
            onBlur={handleBlur}
            error={Boolean(errors.price && touched.price)}
            helperText={touched.price && errors.price}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label={"status"}
            value={values.status}
            fullWidth
            name={"status"}
            type={"number"}
            placeholder={"status"}
            onChange={handleChange}
            onBlur={handleBlur}
            error={Boolean(errors.status && touched.status)}
            helperText={touched.status && errors.status}
          />
        </Grid>

        <Grid item xs={12}>
          <ImagesUploader
            value={values.images}
            onChange={(images) => {
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

export default CreateAndUpdateProductItemFrom;
