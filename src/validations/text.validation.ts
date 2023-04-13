import * as yup from "yup";
import { max, min } from ".";

export const textValidation = (mn: number, mx: number) =>
  yup.string().required("required").min(mn, min(mn)).max(mx, max(mx));
