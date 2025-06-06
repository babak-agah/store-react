import { Box, IconButton, Toolbar, Typography } from "@mui/material";
import { ReactElement, useState } from "react";
import AdminDrawerContent from "../AdminDrawerContent";
import { HiArrowLeft } from "react-icons/hi2";

interface Props {
  children: ReactElement;
}

const DEFAULT_WIDTH = 280;

const MINI_WIDTH = 90;

const AdminLayout = ({ children }: Props) => {
  const [open, setOpen] = useState<boolean>(true);
  const width = open ? DEFAULT_WIDTH : "0";
  return (
    <>
      <Box sx={{ display: "flex", gap: open ? "2px" : "0", transition: ".3s" }}>
        <Box
          sx={{
            transition: ".3s",
            height: "100vh",
            width: width,
            minWidth: width,
            position: "sticky",
            top: 0,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              height: "calc(100vh - 20px)",
              width: `calc(${DEFAULT_WIDTH}px - 10px)`,
              right: "0",
              borderRadius: "12px",
              boxShadow: "0 0 25px 0px #eee",
              padding: 1,
              overflow: "auto",
            }}
          >
            <AdminDrawerContent />
          </Box>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Box
            sx={{
              width: "100%",
              position: "sticky",
              top: 0,
              height: "80px",
              padding: "10px",
              zIndex: 10,
            }}
          >
            <Toolbar
              sx={{
                borderRadius: "12px",
                boxShadow: "0 0 25px 0px #eee",
                background: "#fff",
              }}
            >
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={() => setOpen((v) => !v)}
                edge="start"
                sx={{
                  marginRight: 5,
                  transition: "0.3s",
                  transform: open ? "" : "rotate(180deg)",
                }}
              >
                <HiArrowLeft />
              </IconButton>

              <Typography variant="h6" noWrap component="div">
                store
              </Typography>
            </Toolbar>
          </Box>

          <Box component="main" sx={{ p: 3 }}>
            {children}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AdminLayout;
