import { LoadingButton } from "@mui/lab";
import {
  Autocomplete,
  Box,
  Chip,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { VARIATION_MODELS } from "@src/constants/variaition-models";

import {
  CreateVariationForm,
  createVariationApi,
  createVariationValidation,
} from "@src/hooks/post/create-variation.api";

import { Variation } from "@src/types/variation";
import { useFormik } from "formik";
import { useState } from "react";

interface Props {
  categoryId: string;
  created: (productCategory: Variation) => void;
}

const CreateVariation = ({ categoryId, created }: Props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const initialValues: CreateVariationForm = {
    name: "",
    model: "text",
    options: [],
    units: [],
  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik<CreateVariationForm>({
    initialValues,
    validationSchema: createVariationValidation,
    onSubmit: (values, helper) => {
      setLoading(true);
      createVariationApi(categoryId, values)
        .then((res) => {
          helper.resetForm({ values: initialValues });
          created(res.data);
        })
        .catch(console.log)
        .finally(() => setLoading(false));
    },
  });

  return (
    <Box component={"form"} onSubmit={handleSubmit} sx={{ py: 1 }}>
      <Grid container gap={2}>
        <Grid item xs={12}>
          <TextField
            value={values.name || ""}
            fullWidth
            name={"name"}
            type={"text"}
            label={"name"}
            placeholder={"name"}
            onChange={handleChange}
            onBlur={handleBlur}
            error={Boolean(errors.name && touched.name)}
            helperText={touched.name && errors.name}
            size={"small"}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl sx={{ width: "100%" }} size="small">
            <InputLabel id="model-selector">variation</InputLabel>
            <Select
              id="model-selector"
              fullWidth
              name={"model"}
              label="variation"
              placeholder="variation"
              value={values.model || VARIATION_MODELS[0]}
              defaultValue={VARIATION_MODELS[0]}
              onChange={handleChange}
              error={Boolean(errors.model && touched.model)}
              onBlur={handleBlur}
            >
              {VARIATION_MODELS.map((v) => (
                <MenuItem key={v} value={v}>
                  {v}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          {values.model === "select" ? (
            <Autocomplete
              value={values.options || ""}
              size={"small"}
              multiple
              options={[]}
              freeSolo
              onChange={(e, v) => {
                setFieldValue("options", v);
              }}
              renderTags={(value: readonly string[], getTagProps) =>
                value.map((option: string, index: number) => (
                  <Chip
                    variant="outlined"
                    label={option}
                    {...getTagProps({ index })}
                  />
                ))
              }
              renderInput={(params) => (
                <TextField
                  name={"options"}
                  {...params}
                  variant="outlined"
                  label="options"
                  onBlur={handleBlur}
                  error={Boolean(errors.options && touched.options)}

                  // placeholder=""
                />
              )}
            />
          ) : null}
          {/* <TextField
            fullWidth
            name={"options"}
            type={"text"}
            placeholder={"options"}
            onChange={handleChange}
            onBlur={handleBlur}
            size={"small"}
            error={Boolean(errors.options && touched.options)}
            helperText={
              touched.options
              ? Array.isArray(errors.options)
              ? `${errors.options}`
              : errors.options || ""
              : ""
            }
          /> */}
        </Grid>
        {/* <Grid xs={12}>
          <TextField
            fullWidth
            name={"name"}
            type={"text"}
            label={"name"}
            placeholder={"name"}
            onChange={handleChange}
            onBlur={handleBlur}
            error={Boolean(errors.name && touched.name)}
            helperText={touched.name && errors.name}
            size={"small"}
          />
        </Grid> */}

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

export default CreateVariation;
