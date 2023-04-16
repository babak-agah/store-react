import { api } from "@src/lib/axios";
import { Unit } from "@src/types/unit";

export const getUnitsApi = () => api.get<Unit[]>("units");
