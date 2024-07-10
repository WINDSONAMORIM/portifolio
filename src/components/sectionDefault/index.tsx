import React from "react";
import { Box } from "@mui/material";

export const SectionDefault = ({ children }: { children: React.ReactNode }) => {
  return (
  <Box display="flex" alignItems="center" justifyContent="space-between"
  flexDirection={{lg:"row"}} bgcolor={'blue'}>
    {children}
  </Box>
  );
};