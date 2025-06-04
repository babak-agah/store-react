import * as yup from "yup";
import { api } from "@src/lib/axios";
import { Unit } from "@src/types/unit";

export interface CreateUnitFormApi {
  name: string;
}

export const createUnitApi = (form: CreateUnitFormApi) =>
  api.post<Unit>("units", form);

export const createUnitValidation = yup.object().shape({
  name: yup.string().required("required").min(2).max(20),
});
