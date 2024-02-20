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
import { styled } from "@mui/material/styles";

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

  const StyledMenu = styled(Menu)(({ theme }) => ({
    "& .MuiPaper-root": {
      backgroundColor: "#17171B",
      borderRadius: "0 0 3px 3px",
      paddingTop: "15px",
      "& .MuiList-padding": {
        padding: "11px 5px 11px 5px",
      },
      color: "white",
    },
  }));

  const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
    "&:hover": {
      backgroundColor: "#17171B",
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: "#64B6F7",
        textDecoration: "none",
      },
      "& .MuiLink-underlineHover": {
        textDecoration: "none",
      },
    },
    "&:focus": {
      backgroundColor: "#17171B",
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: "#64B6F7",
        textDecoration: "none",
      },
      "& .MuiLink-underlineFocus": {
        textDecoration: "none",
      },
    },
  }));

  return (
    <>
      <Divider
        variant="fullWidth"
        orientation="horizontal"
        sx={{ bgcolor: "#58585B" }}
      />
      <AppBar
        component="nav"
        position="static"
        sx={{
          backgroundColor: "#17171B",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            <div />
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              {navItems.map((item, index) => {
                return item.items ? (
                  <>
                    <Button
                      sx={{
                        fontSize: "0.875rem",
                        fontWeight: 400,
                        lineHeight: "1.1875rem",
                        letterSpacing: "-0.25px",
                        color: "#fff",
                        mr: "32px",
                        textTransform: "none",
                      }}
                      endIcon={<ExpandCircleDownOutlinedIcon />}
                      key={item.id}
                      id={item.label + "MenuButton"}
                      onClick={(e) => handleOpenSubNavMenu(index, e)}
                    >
                      {item.label}
                    </Button>

                    <StyledMenu
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
                            key={subItem.id}
                            href={subItem.href}
                            sx={{
                              textDecoration: "none",
                              "&:hover": {
                                textDecoration: "underline",
                                textDecorationColor: "white",
                                textDecorationStyle: "dashed",
                              },
                            }}
                          >
                            <StyledMenuItem onClick={handleCloseSubNavMenu}>
                              <Typography
                                textAlign="center"
                                sx={{
                                  color: "white",
                                  "&:hover": {
                                    color: "white",
                                  },
                                }}
                              >
                                {subItem.label}
                              </Typography>
                            </StyledMenuItem>
                          </Link>
                        );
                      })}
                    </StyledMenu>
                  </>
                ) : (
                  <Link href={item.href}>
                    <Button
                      key={item.id}
                      sx={{
                        fontSize: "0.875rem",
                        fontWeight: 400,
                        lineHeight: "1.1875rem",
                        letterSpacing: "-0.25px",
                        color: "#fff",
                        mr: "32px",
                        textTransform: "none",
                      }}
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
    </>
  );
};

export default Navbar;
