import { Box, Chip, Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { Variation } from "@src/types/variation";

interface Props {
  data: Variation;
}

const VariaitionCard = ({ data }: Props) => {
  const { _id, name, options, units, model } = data;
  return (
    <Grid item key={_id}>
      <Typography variant={"h6"}>{name}</Typography>
      <Typography variant={"caption"}>{model}</Typography>
      <Stack spacing={{ xs: 1 }} direction="row" useFlexGap flexWrap="wrap">
        {options.map((o, index) => (
          <Chip
            key={index}
            label={JSON.stringify(o)}
            variant={"outlined"}
            size={"small"}
          />
        ))}
      </Stack>

      <Box>
        <Stack direction="row" spacing={1}>
          {units.map((u, index) => (
            <Chip
              key={u._id}
              label={u.name}
              variant={"outlined"}
              size={"small"}
            />
          ))}
        </Stack>
      </Box>
    </Grid>
  );
};

export default VariaitionCard;
