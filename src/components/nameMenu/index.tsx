import { Box, Typography } from "@mui/material";

interface PropsNameMenu {
  name: string;
  surname: string;
}

export const NameMenu = ({ name, surname }: PropsNameMenu) => {
  return (
    <Box
      paddingRight={5}
    >
      <Typography
        variant="h5"
        noWrap
        sx={{
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "white",
        }}
      >
        {name}
      </Typography>
      <Typography
        sx={{
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "white",
        }}
      >
        {surname}
      </Typography>
    </Box>
  );
};
