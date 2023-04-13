import { LoadingButton } from "@mui/lab";
import { Box, Container, Grid, TextField } from "@mui/material";
import { API_BASE_URL } from "@src/constants/api-base-url";
import { refreshTokenApi } from "@src/hooks/post/refreshtoken-api";
import {
  SigninFormApi,
  signinApi,
  signinFormValidation,
} from "@src/hooks/post/signin.api";
import { api } from "@src/lib/axios";
import { updateUser } from "@src/store/slices/profile";
import { setupAxios } from "@src/utils/setup-axios";
import { FormikHelpers, useFormik } from "formik";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";

const AdminRegisterPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const onSubmit: (
    values: SigninFormApi,
    formikHelpers: FormikHelpers<SigninFormApi>
  ) => void = async (values, formikHelpers) => {
    try {
      setLoading(true);

      const { accessToken, refreshToken, user } = await signinApi(values).then(
        (res) => res.data
      );
      await refreshTokenApi({ refreshToken });

      localStorage.setItem("token", accessToken);
      setupAxios({
        axiosInstance: api,
        token: accessToken,
        baseUrl: API_BASE_URL,
      });
      dispatch(updateUser(user));

      setLoading(false);
      formikHelpers.resetForm();
      router.replace("/admin");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const { errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik<SigninFormApi>({
      initialValues: { username: "", password: "" },
      validationSchema: signinFormValidation,
      onSubmit: onSubmit,
    });

  return (
    <Container
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box
        component={"form"}
        className={"form"}
        onSubmit={handleSubmit}
        sx={{ maxWidth: 360 }}
      >
        <Grid container gap={4}>
          <Grid item xs={12} sx={{ textAlign: "center" }}>
            <h3>login</h3>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name={"username"}
              type={"text"}
              placeholder={"username"}
              onChange={handleChange}
              onBlur={handleBlur}
              error={Boolean(errors.username && touched.username)}
              helperText={touched.username && errors.username}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              name={"password"}
              type={"password"}
              placeholder={"****"}
              onChange={handleChange}
              onBlur={handleBlur}
              error={Boolean(errors.password && touched.password)}
              helperText={touched.password && errors.password}
            />
          </Grid>

          <Grid item xs={12}>
            <LoadingButton
              loading={loading}
              type={"submit"}
              variant={"contained"}
              fullWidth
              disableElevation
            >
              login
            </LoadingButton>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default AdminRegisterPage;
