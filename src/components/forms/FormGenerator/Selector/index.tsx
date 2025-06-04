import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { ChangeEvent } from "react";

interface Props {
  name: string;
  options: string[];
  values: string[];
  onChange: (name: string, v: string[]) => void;
}

const Selector = ({ name, options, values, onChange }: Props) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValues = [...values];
    const index = newValues.findIndex((v) => v === event.target.name);
    if (index !== -1) {
      newValues.splice(index, 1);
    } else {
      newValues.push(event.target.name);
    }
    onChange(name, newValues);
  };

  return (
    <FormGroup row>
      {options.map((o, index) => (
        <FormControlLabel
          name={name}
          key={index}
          control={
            <Checkbox
              checked={values.includes(o)}
              onChange={handleChange}
              name={o}
            />
          }
          label={o}
        />
      ))}
    </FormGroup>
  );
};

export default Selector;
