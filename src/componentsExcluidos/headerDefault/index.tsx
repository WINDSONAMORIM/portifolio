import { Box } from "@mui/material";

export const HeaderDefault = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      {children}
    </Box>
  );
};
