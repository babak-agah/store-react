import { Box, InputLabel } from "@mui/material";
import { IVariation } from "@src/types/Ivariation";
import Selector from "../FormGenerator/Selector";
import { IConfiguration } from "@src/types/IConfiguration";

interface Props {
  variaitions: IVariation[];
  values: IConfiguration[];
  onChange: (values: IConfiguration[]) => void;
}

const ConfigGenerator = ({ values, variaitions, onChange }: Props) => {
  const valuesHandler = (variaitionId: string) => {
    const find = values.find((v) => v.variationId === variaitionId);
    return find?.values || [];
  };

  const changeHandler = (variationId: string, variationValues: any[]) => {
    const newValues: IConfiguration[] = [...values];
    const index = newValues.findIndex((v) => v.variationId === variationId);
    if (index !== -1) {
      newValues[index].values = variationValues;
    } else {
      newValues.push({ variationId, values: variationValues });
    }
    onChange(newValues);
  };

  return (
    <Box>
      {variaitions.map((v) => (
        <Box key={v._id}>
          {v.model === "select" ? (
            <>
              <InputLabel>{v.name}</InputLabel>
              <Selector
                name={v._id}
                options={v.options}
                values={valuesHandler(v._id)}
                onChange={changeHandler}
              />
            </>
          ) : null}
        </Box>
      ))}
    </Box>
  );
};

export default ConfigGenerator;
