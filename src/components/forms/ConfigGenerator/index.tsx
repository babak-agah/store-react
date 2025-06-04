import { Box, InputLabel } from "@mui/material";
import { IVariation } from "@src/types/Ivariation";
import Selector from "../FormGenerator/Selector";

export interface IConfigGenerator {
  values: any[];
  variationId: string;
}

interface Props {
  variations: IVariation[];
  values: IConfigGenerator[];
  onChange: (values: IConfigGenerator[]) => void;
}

const ConfigGenerator = ({ values, variations, onChange }: Props) => {
  const valuesHandler = (variationId: string) => {
    const find = values.find((v) => v.variationId === variationId);
    return find?.values || [];
  };

  const changeHandler = (variationId: string, variationValues: any[]) => {
    const newValues: IConfigGenerator[] = [...values];
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
      {variations.map((v) => (
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
