import { MouseEvent, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ExpandCircleDownOutlinedIcon from "@mui/icons-material/ExpandCircleDownOutlined";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Divider } from "@mui/material";
import { HeaderProps } from "../Header/Header";
import { StyledEngineProvider } from "@mui/material/styles";

const Navbar = ({ navItems }: HeaderProps) => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElSubNav, setAnchorElSubNav] = useState<null | Record<
    string,
    HTMLElement
  >>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenSubNavMenu = (
    index: number,
    event: MouseEvent<HTMLElement>,
  ) => {
    setAnchorElSubNav({ [index]: event.currentTarget });
  };

  const handleCloseSubNavMenu = () => {
    setAnchorElSubNav(null);
  };

  return (
    <StyledEngineProvider injectFirst>
      <Divider
        variant="fullWidth"
        orientation="horizontal"
        className="pds-wds-navbar-top-divider"
      />
      <AppBar component="nav" position="static" className="pds-wds-navbar">
        <Container maxWidth="xl">
          <Toolbar disableGutters className="pds-wds-navbar-toolbar">
            <div />
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              {navItems.map((item, index) => {
                return item.items ? (
                  <>
                    <Button
                      className="pds-wds-navbar-link-button"
                      endIcon={<ExpandCircleDownOutlinedIcon />}
                      key={item.id}
                      id={item.label + "MenuButton"}
                      onClick={(e) => handleOpenSubNavMenu(index, e)}
                    >
                      {item.label}
                    </Button>
                    <Menu
                      className="pds-wds-navbar-menu"
                      id={item.label + "Menu"}
                      key={index}
                      anchorEl={anchorElSubNav && anchorElSubNav[index]}
                      open={Boolean(anchorElSubNav && anchorElSubNav[index])}
                      onClose={handleCloseSubNavMenu}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                      elevation={0}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "right",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      disablePortal
                      sx={{
                        zIndex: 1350,
                      }}
                    >
                      {item.items.map((subItem) => {
                        return (
                          <Link
                            className="pds-wds-navbar-link"
                            key={subItem.id}
                            href={subItem.href}
                          >
                            <MenuItem
                              onClick={handleCloseSubNavMenu}
                              className="pds-wds-navbar-menu-item"
                            >
                              <Typography
                                className="pds-wds-navbar-link-label"
                                textAlign="center"
                              >
                                {subItem.label}
                              </Typography>
                            </MenuItem>
                          </Link>
                        );
                      })}
                    </Menu>
                  </>
                ) : (
                  <Link href={item.href}>
                    <Button
                      className="pds-wds-navbar-link-button-single"
                      key={item.id}
                    >
                      {item.label}
                    </Button>
                  </Link>
                );
              })}
            </Box>

            <Box sx={{ display: { sm: "block", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <ExpandCircleDownOutlinedIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {navItems.map((item) => (
                  <Link key={item.id} href={item.href}>
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{item.label}</Typography>
                    </MenuItem>
                  </Link>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </StyledEngineProvider>
  );
};

export default Navbar;
