import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: { main: "#000" },
  },

  components: {
    // Name of the component ⚛️
    MuiButtonBase: {
      defaultProps: {
        // The props to apply
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
    },
  },
});
