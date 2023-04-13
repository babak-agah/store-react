import { User } from "@src/types/user";
import { api } from "@src/lib/axios";

export const meApi = () => api.get<User>("users/me");
