import * as yup from "yup";
import { maxDescription, minDescription } from ".";

interface Props {
  min?: number;
  max?: number;
  required?: boolean;
}

export const textValidation = ({ min, max, required = true }: Props) => {
  const v = yup.string();
  if (required) {
    v.required("required");
  }
  if (min) {
    v.min(min, minDescription(min));
  }
  if (max) {
    v.max(max, maxDescription(max));
  }
  return v;
};
