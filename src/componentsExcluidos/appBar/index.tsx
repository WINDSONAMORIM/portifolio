import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";

const pages = ["Home", "Projetos"];
const name = "Windson";
const surname = "Amorim Marana";

function ResponsiveAppBar() {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const navigation = (page: string) => {
    if (page === "Projetos") {
      navigate("/projects");
    }
    console.log(page);
  };

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl" sx={{ p: 0, m: 0 }}>
        <Toolbar disableGutters sx={{ p: 0, m: 0 }}>
          <Box
            sx={{
              display: { md: "none", lg: "flex" },
              flexDirection: { md: "none", lg: "column" },
            }}
          >
            <Typography
              variant="h5"
              noWrap
              sx={{
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
              }}
            >
              {name}
            </Typography>
            <Typography>{surname}</Typography>
          </Box>

          <Box
            p={0}
            m={0}
            sx={{
              flexGrow: 1,
              display: { md: "flex", lg: "none" },
            }}
          >
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{ fontSize: 70 }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { md: "block", lg: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography
                    variant="h6"
                    textAlign="center"
                    sx={{ fontSize: "2rem" }}
                    onClick={() => navigation(page)}
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            m={0}
            p={0}
            sx={{
              display: { md: "flex", lg: "none" },
              flexDirection: { md: "column", lg: "none" },
            }}
          >
            <Typography
              variant="h5"
              noWrap
              sx={{
                mr: 2,
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
              }}
            >
              {name}
            </Typography>
            <Typography>{surname}</Typography>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { md: "none", lg: "flex" },
              flexDirection: { md: "none", lg: "row" },
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                // onClick={handleCloseNavMenu}
                onClick={() => navigation(page)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
