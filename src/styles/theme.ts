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
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0px 0px 8px #0001",
          borderRadius: "8px",
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        root: {
          "& .MuiPaper-root": { borderRadius: "12px" },
        },
      },
    },
  },
});
