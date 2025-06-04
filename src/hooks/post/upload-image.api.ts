import { BASE_URL } from "@src/constants/api-base-url";
import { api } from "@src/lib/axios";

export const uploadImageApi = (image: File) => {
  const form = new FormData();
  form.append("files", image);
  console.log(form);
  return api.post("uploads/image", form, {
    baseURL: BASE_URL,
    headers: {
      "Content-Type": "Multipart/form-data",
    },
  });
};
