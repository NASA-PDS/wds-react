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
import InputBase from "@mui/material/InputBase";
import NasaLogo from "../../assets/nasa.svg";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Link from "@mui/material/Link";
import { StyledEngineProvider } from "@mui/material/styles";

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

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <StyledEngineProvider injectFirst>
      <AppBar className="pds-wds-titlebar" position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Link href="https://www.nasa.gov/" target="_blank">
              <Box
                className="pds-wds-titlebar-nasa-logo-md"
                component="img"
                sx={{
                  display: { xs: "none", md: "flex" },
                }}
                alt="NASA logo."
                src={NasaLogo}
              />
            </Link>
            <Typography
              className="pds-wds-titlebar-title-lg"
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                display: { xs: "none", lg: "flex" },
              }}
            >
              Planetary Data System
            </Typography>
            <Typography
              className="pds-wds-titlebar-title-md"
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                display: { xs: "none", md: "flex", lg: "none" },
              }}
            >
              Planetary Data System
            </Typography>
            <Link href="https://www.nasa.gov/" target="_blank">
              <Box
                className="pds-wds-titlebar-nasa-logo-xs"
                component="img"
                sx={{
                  display: { xs: "flex", md: "none" },
                }}
                alt="NASA logo."
                src={NasaLogo}
              />
            </Link>
            <Typography
              className="pds-wds-titlebar-title-xs"
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                display: { xs: "flex", md: "none" },
              }}
            >
              Planetary Data System
            </Typography>
            <Box
              className="pds-wds-titlebar-links"
              sx={{
                display: { xs: "none", lg: "flex" },
              }}
            >
              {pages.map((item, index) => {
                return item.items ? (
                  <>
                    <Button
                      className="pds-wds-titlebar-link-button"
                      endIcon={<ExpandCircleDownOutlinedIcon />}
                      key={item.id}
                      id={item.label + "MenuButton"}
                      onClick={(e) => handleOpenSubNavMenu(index, e)}
                    >
                      {item.label}
                    </Button>
                    <Menu
                      className="pds-wds-titlebar-menu"
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
                            className="pds-wds-titlebar-link"
                            key={subItem.id}
                            href={subItem.href}
                          >
                            <MenuItem
                              className="pds-wds-titlebar-menu-item"
                              onClick={handleCloseSubNavMenu}
                            >
                              <Typography
                                className="pds-wds-titlebar-link-label"
                                textAlign="center"
                              >
                                {subItem.label}
                              </Typography>
                            </MenuItem>
                          </Link>
                        );
                      })}
                    </Menu>
                    <Divider
                      className="pds-wds-titlebar-link-divider"
                      variant="middle"
                      orientation="vertical"
                      flexItem
                    />
                  </>
                ) : (
                  <>
                    <Button
                      className="pds-wds-titlebar-link-button"
                      endIcon={<ExpandCircleDownOutlinedIcon />}
                      key={item.id}
                      id={item.label + "MenuButton"}
                      onClick={(e) => handleOpenSubNavMenu(index, e)}
                    >
                      {item.label}
                    </Button>
                    <Divider
                      className="pds-wds-titlebar-link-divider"
                      variant="middle"
                      orientation="vertical"
                      flexItem
                    />
                  </>
                );
              })}

              <div className="pds-wds-titlebar-search">
                <div className="pds-wds-titlebar-search-icon-wrapper">
                  <SearchIcon />
                </div>
                <InputBase
                  className="pds-wds-titlebar-input-base"
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                  sx={{
                    "& .MuiInputBase-input": {
                      padding: (theme) => theme.spacing(1, 1, 1, 0),
                      // vertical padding + font size from searchIcon
                      paddingLeft: (theme) => `calc(1em + ${theme.spacing(4)})`,
                      transition: (theme) => theme.transitions.create("width"),
                      '[theme.breakpoints.up("sm")]': {
                        width: "12ch",
                        "&:focus": {
                          width: "20ch",
                        },
                      },
                    },
                  }}
                />
              </div>
            </Box>

            <Box
              className="pds-wds-titlebar-links"
              sx={{
                display: { xs: "none", md: "flex", lg: "none" },
              }}
            >
              <div className="pds-wds-titlebar-search">
                <div className="pds-wds-titlebar-search-icon-wrapper">
                  <SearchIcon />
                </div>
                <InputBase
                  className="pds-wds-titlebar-input-base"
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                  sx={{
                    "& .MuiInputBase-input": {
                      padding: (theme) => theme.spacing(1, 1, 1, 0),
                      // vertical padding + font size from searchIcon
                      paddingLeft: (theme) => `calc(1em + ${theme.spacing(4)})`,
                      transition: (theme) => theme.transitions.create("width"),
                      '[theme.breakpoints.up("sm")]': {
                        width: "12ch",
                        "&:focus": {
                          width: "20ch",
                        },
                      },
                    },
                  }}
                />
              </div>
              <Divider
                className="pds-wds-titlebar-link-divider"
                variant="middle"
                orientation="vertical"
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
              className="pds-wds-titlebar-links"
              sx={{
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
                className="pds-wds-titlebar-link-divider"
                variant="middle"
                orientation="vertical"
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
    </StyledEngineProvider>
  );
};

export default TitleBar;
