import { MouseEvent, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import { Typography } from "../Typography/Typography";
import Divider from "@mui/material/Divider";
import InputBase from "@mui/material/InputBase";
import NasaLogo from "../../assets/nasa.svg";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Link from "@mui/material/Link";
import { StyledEngineProvider } from "@mui/material/styles";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuList from "@mui/material/MenuList";
import ArrowCircleDown from "../Icons/ArrowCircleDown";
import ChevronDown from "../Icons/ChevronDown";

const pages = [
  {
    id: "explore-pds",
    label: "Explore PDS",
    href: "/",
  },
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
];

export type TitleBarProps = {
  title: string;
};

const TitleBar = ({ title }: TitleBarProps) => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElSubNav, setAnchorElSubNav] = useState<null | Record<
    string,
    HTMLElement
  >>(null);

  const [elList, setElList] = useState(
    Array<{
      id: number;
      anchorEl: HTMLElement | null;
      isOpen: boolean;
    }>,
  );

  const handleClick = (index: number, event: MouseEvent<HTMLElement>) => {
    setElList((prevArray) => {
      const idx = prevArray.findIndex((x) => x.id === index);
      const a = [...prevArray];

      if (idx < 0) {
        a.push({
          id: index,
          isOpen: true,
          anchorEl: event.currentTarget,
        });
      }

      if (idx > -1) {
        const copyAnchor = a[idx].anchorEl;
        const copyid = a[idx].id;
        const newIsOpen = !a[idx].isOpen;

        a.splice(idx, 1);

        a.push({
          id: copyid,
          isOpen: newIsOpen,
          anchorEl: copyAnchor,
        });
      }

      return a;
    });
  };

  const handleClickAway = (index: number) => {
    setElList((prevArray) => {
      const idx = prevArray.findIndex((x) => x.id === index);
      const a = [...prevArray];

      if (idx > -1) {
        const copyAnchor = a[idx].anchorEl;
        const copyid = a[idx].id;

        a.splice(idx, 1);

        a.push({
          id: copyid,
          isOpen: false,
          anchorEl: copyAnchor,
        });
      }

      return a;
    });
  };

  const getIsOpen = (index: number) => {
    const idx = elList.findIndex((x) => x.id === index);

    if (idx > -1) {
      return elList[idx].isOpen;
    }

    return false;
  };

  const getAnchor = (index: number) => {
    const idx = elList.findIndex((x) => x.id === index);

    if (idx > -1) {
      return elList[idx].anchorEl;
    }

    return null;
  };

  const handleOpenSubNavMenu = (
    index: number,
    event: MouseEvent<HTMLElement>,
  ) => {
    setAnchorElSubNav({ [index]: event.currentTarget });
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
                  display: { xs: "none", sm: "flex" },
                }}
                alt="NASA logo."
                src={NasaLogo}
              />
            </Link>
            <Link
              href="https://www.nasa.gov/"
              target="_blank"
              className="pds-wds-titlebar-titlelink"
            >
              <Typography
                variant="h3"
                weight="bold"
                noWrap
                sx={{
                  display: { xs: "none", md: "flex" },
                }}
              >
                {title}
              </Typography>
            </Link>

            <Link href="https://www.nasa.gov/" target="_blank">
              <Box
                className="pds-wds-titlebar-title-md"
                component="img"
                sx={{
                  display: { xs: "flex", sm: "none" },
                }}
                alt="NASA logo."
                src={NasaLogo}
              />
            </Link>
            <Link
              href="https://www.nasa.gov/"
              target="_blank"
              className="pds-wds-titlebar-titlelink"
            >
              <Typography
                className="pds-wds-titlebar-title-xs"
                variant="h3"
                weight="bold"
                noWrap
                sx={{
                  display: { xs: "flex", md: "none" },
                }}
              >
                {title}
              </Typography>
            </Link>
            <Box
              className="pds-wds-titlebar-links"
              sx={{
                display: { xs: "none", sm: "flex" },
              }}
            >
              {pages.map((item, index) => {
                return item.items ? (
                  <>
                    <Button
                      className="pds-wds-titlebar-link-button"
                      id="composition-button"
                      aria-haspopup="true"
                      onClick={(e) => handleClick(index, e)}
                      endIcon={<ChevronDown height={10} width={10} />}
                    >
                      {item.label}
                    </Button>
                    <Popper
                      className="pds-wds-titlebar-popper"
                      open={getIsOpen(index)}
                      anchorEl={getAnchor(index)}
                      role={undefined}
                      placement="bottom-start"
                      transition
                      disablePortal
                    >
                      {({ TransitionProps, placement }) => (
                        <Grow
                          {...TransitionProps}
                          style={{
                            transformOrigin:
                              placement === "bottom-start"
                                ? "left top"
                                : "left bottom",
                          }}
                        >
                          <Paper className="pds-wds-titlebar-paper">
                            <ClickAwayListener
                              onClickAway={() => handleClickAway(index)}
                            >
                              <MenuList
                                autoFocusItem={getIsOpen(index)}
                                id="composition-menu"
                                aria-labelledby="composition-button"
                              >
                                {item.items.map((subItem) => {
                                  return (
                                    <Link
                                      className="pds-wds-titlebar-link"
                                      key={subItem.id}
                                      href={subItem.href}
                                    >
                                      <MenuItem className="pds-wds-titlebar-menu-item">
                                        <Typography
                                          className="pds-wds-titlebar-link-label"
                                          variant="body2"
                                          weight="regular"
                                          textAlign="center"
                                        >
                                          {subItem.label}
                                        </Typography>
                                      </MenuItem>
                                    </Link>
                                  );
                                })}
                              </MenuList>
                            </ClickAwayListener>
                          </Paper>
                        </Grow>
                      )}
                    </Popper>
                  </>
                ) : (
                  <>
                    <Button
                      className="pds-wds-titlebar-link-button"
                      endIcon={<ArrowCircleDown className="icon" />}
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
                display: { xs: "flex", sm: "none" },
              }}
            >
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
                    <Typography
                      variant="body2"
                      weight="regular"
                      textAlign="center"
                    >
                      {page.label}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box
              className="pds-wds-titlebar-links"
              sx={{
                display: { xs: "flex", sm: "none" },
              }}
            >
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
                  display: { xs: "block", sm: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                    <Typography
                      variant="body2"
                      weight="regular"
                      textAlign="center"
                    >
                      {page.label}
                    </Typography>
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
