import { MouseEvent, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ExpandCircleDownOutlinedIcon from "@mui/icons-material/ExpandCircleDownOutlined";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import NasaLogo from "../../assets/nasa.svg";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Link from "@mui/material/Link";

const pages = [
  {
    id: "pds-nodes",
    label: "PDS Nodes",
    items: [
      {
        id: "atmospheres",
        label: "Atmospheres (ATM)",
        href: "https://pds-atmospheres.nmsu.edu",
      },
      {
        id: "geosciences",
        label: "Geosciences (GEO)",
        href: "https://pds-geosciences.wustl.edu",
      },
      {
        id: "imaging",
        label: "Cartography and Imaging Sciences (IMG)",
        href: "https://pds-imaging.jpl.nasa.gov",
      },
      {
        id: "naif",
        label: "Navigational and Ancillary Information (NAIF)",
        href: "https://naif.jpl.nasa.gov/naif",
      },
      {
        id: "ppi",
        label: "Planetary Plasma Interactions (PPI)",
        href: "https://pds-ppi.igpp.ucla.edu",
      },
      {
        id: "rings",
        label: "Ring-Moon Systems (RMS)",
        href: "https://pds-rings.seti.org",
      },
      {
        id: "bodies",
        label: "Ring-Moon Systems (RMS)",
        href: "https://pds-smallbodies.astro.umd.edu",
      },
    ],
  },
  {
    id: "explore-pds",
    label: "Explore PDS",
    href: "/",
  },
];

const StyledMenu = styled(Menu)(({ theme }) => ({
  "& .MuiPaper-root": {
    backgroundColor: "black",
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
    backgroundColor: "black",
    "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
      color: "#64B6F7",
      textDecoration: "none",
    },
    "& .MuiLink-underlineHover": {
      textDecoration: "none",
    },
  },
  "&:focus": {
    backgroundColor: "black",
    "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
      color: "#64B6F7",
      textDecoration: "none",
    },
    "& .MuiLink-underlineFocus": {
      textDecoration: "none",
    },
  },
}));

const TitleBar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElSubNav, setAnchorElSubNav] = useState<null | Record<
    string,
    HTMLElement
  >>(null);

  const handleOpenSubNavMenu = (
    index: number,
    event: MouseEvent<HTMLElement>,
  ) => {
    setAnchorElSubNav({ [index]: event.currentTarget });
  };

  const handleCloseSubNavMenu = () => {
    setAnchorElSubNav(null);
  };

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    borderColor: "#2E2E32",
    borderWidth: "1px",
    borderStyle: "solid",
    backgroundColor: "black",
    "&:hover": {
      color: "white",
      borderColor: "#959599",
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("md")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  const SearchIconWrapper = styled("div")(() => ({
    color: "#B9B9BB",
    padding: "2px 12px 2px 12px",
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "black",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link href="https://www.nasa.gov/" target="_blank">
            <Box
              component="img"
              sx={{
                display: { xs: "none", md: "flex" },
                height: 42,
                py: "4px",
                mr: "11.65px",
              }}
              alt="NASA logo."
              src={NasaLogo}
            />
          </Link>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", lg: "flex" },
              fontFamily: "Inter",
              fontWeight: 700,
              letterSpacing: "-0.03125rem",
              lineHeight: "26px",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Planetary Data System
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex", lg: "none" },
              fontSize: "1.125rem",
              fontFamily: "Inter",
              fontWeight: 700,
              letterSpacing: "-0.5px",
              lineHeight: "23px",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Planetary Data System
          </Typography>
          <Link href="https://www.nasa.gov/" target="_blank">
            <Box
              component="img"
              sx={{
                display: { xs: "flex", md: "none" },
                height: 35,
                py: "2px",
                mr: "7.69px",
              }}
              alt="NASA logo."
              src={NasaLogo}
            />
          </Link>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              fontSize: "1rem",
              flexGrow: 1,
              fontFamily: "Inter",
              fontWeight: 700,
              letterSpacing: "-0.5px",
              lineHeight: "20px",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Planetary Data System
          </Typography>
          <Box
            sx={{
              justifyContent: "flex-end",
              flexGrow: 1,
              display: { xs: "none", lg: "flex" },
            }}
          >
            {pages.map((item, index) => {
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
                  <Divider
                    variant="middle"
                    orientation="vertical"
                    sx={{
                      bgcolor: "#58585B",
                      mr: "16px",
                    }}
                    flexItem
                  />
                </>
              ) : (
                <>
                  <Button
                    sx={{
                      fontSize: "0.875rem",
                      fontWeight: 400,
                      lineHeight: "1.1875rem",
                      letterSpacing: "-0.25px",
                      color: "#fff",
                      mr: "16px",
                      textTransform: "none",
                    }}
                    endIcon={<ExpandCircleDownOutlinedIcon />}
                    key={item.id}
                    id={item.label + "MenuButton"}
                    onClick={(e) => handleOpenSubNavMenu(index, e)}
                  >
                    {item.label}
                  </Button>
                  <Divider
                    variant="middle"
                    orientation="vertical"
                    sx={{
                      bgcolor: "#58585B",
                      mr: "16px",
                    }}
                    flexItem
                  />
                </>
              );
            })}

            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Box>
          <Box
            sx={{
              justifyContent: "flex-end",
              flexGrow: 1,
              display: { xs: "none", md: "flex", lg: "none" },
            }}
          >
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <Divider
              variant="middle"
              orientation="vertical"
              sx={{ bgcolor: "#58585B", mx: "16px" }}
              flexItem
            />
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
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
              {pages.map((page) => (
                <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              justifyContent: "flex-end",
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="site search"
              aria-controls="menu-searchbar"
              aria-haspopup="true"
              color="inherit"
            >
              <SearchIcon />
            </IconButton>
            <Divider
              variant="middle"
              orientation="vertical"
              sx={{ bgcolor: "#58585B", mx: "16px" }}
              flexItem
            />
            <IconButton
              size="large"
              aria-label="site navigation menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
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
              {pages.map((page) => (
                <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default TitleBar;
