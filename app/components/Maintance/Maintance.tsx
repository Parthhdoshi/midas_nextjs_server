import { Box, CircularProgress, Typography } from "@mui/material";
import React from "react";

const Maintenance = () => {
  return (
    <>
      { true  && (
        <Box
          sx={{
            position: "fixed",
            top: "0vh",
            left: "0vw",
            height: "100%",
            width: "100%",
            zIndex: 10000,
            backgroundColor: "#ffff",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              mx: "auto",
              display: "flex",
              justifyContent: "center",
              pb: 1,
            }}
          >
            <CircularProgress />
          </Box>
          <Box>
            <Typography variant="h5" fontWeight={700} className="text-black">
              The midas academy site will live soon.
            </Typography>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Maintenance;
