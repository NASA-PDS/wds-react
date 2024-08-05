import { MouseEvent, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import { Typography } from "../Typography/Typography";
import Divider from "@mui/material/Divider";
import InputBase from "@mui/material/InputBase";
import NasaLogo from "../../assets/nasa.svg";
import Link from "@mui/material/Link";
import { StyledEngineProvider } from "@mui/material/styles";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuList from "@mui/material/MenuList";
import ArrowCircleDownIcon from "../Icons/ArrowCircleDown";
import ChevronDownIcon from "../Icons/ChevronDown";
import MenuIcon from "../Icons/Menu";
import SearchIcon from "../Icons/Search";
import CloseIcon from "../Icons/Close";
import { HeaderProps } from "../Header/Header";
import ArrowCircleUpIcon from "../Icons/ArrowCircleUp";

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
        label: "Small Bodies Node (SBN)",
        href: "https://pds-smallbodies.astro.umd.edu",
      },
    ],
  },
];

export type TitleBarProps = {
  title: string;
  titleLink: string;
};

const TitleBar = ({
  title,
  titleLink,
  navItems,
  subTitle,
  subTitleLink,
}: HeaderProps) => {
  const [isSmallMenuOpen, setIsSmallMenuOpen] = useState(false);
  const [elList, setElList] = useState(
    Array<{
      id: number;
      anchorEl: HTMLElement | null;
      isOpen: boolean;
    }>,
  );
  const [activeNavSmallMenuIndices, setActiveNavSmallMenuIndices] = useState(
    new Set(),
  );
  const [activeTitleSmallMenuIndices, setActiveTitleSmallMenuIndices] =
    useState(new Set());

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

  const handleToggleSmallMenu = () => {
    setIsSmallMenuOpen(!isSmallMenuOpen);
  };

  const handleOpenNavSmallMenuSubNav = (index: number) => {
    const newIndices = new Set(activeNavSmallMenuIndices);
    if (activeNavSmallMenuIndices.has(index)) {
      newIndices.delete(index);
    } else {
      newIndices.add(index);
    }
    setActiveNavSmallMenuIndices(newIndices);
  };

  const handleOpenTitleSmallMenuSubNav = (index: number) => {
    const newIndices = new Set(activeTitleSmallMenuIndices);
    if (activeTitleSmallMenuIndices.has(index)) {
      newIndices.delete(index);
    } else {
      newIndices.add(index);
    }
    setActiveTitleSmallMenuIndices(newIndices);
  };

  return (
    <StyledEngineProvider injectFirst>
      <AppBar className="pds-wds-titlebar" position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Link href={titleLink} target="_blank">
              <Box
                className="pds-wds-titlebar-nasa-logo-md"
                component="img"
                sx={{
                  display: { xs: "none", lg: "flex" },
                }}
                alt="NASA logo."
                src={NasaLogo}
              />
            </Link>
            <Link
              href={titleLink}
              target="_blank"
              className="pds-wds-titlebar-titlelink"
            >
              <Typography
                variant="h3"
                weight="bold"
                noWrap
                sx={{
                  display: { xs: "none", lg: "flex" },
                }}
              >
                {title}
              </Typography>
            </Link>

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
                      id="composition-button"
                      aria-haspopup="true"
                      onClick={(e) => handleClick(index, e)}
                      endIcon={<ChevronDownIcon height={10} width={10} />}
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
                    <Divider
                      className="pds-wds-titlebar-link-divider-mid"
                      variant="middle"
                      orientation="vertical"
                      flexItem
                    />
                  </>
                ) : (
                  <>
                    <Button
                      className="pds-wds-titlebar-link-button"
                      endIcon={<ArrowCircleDownIcon className="icon" />}
                      key={item.id}
                      id={item.label + "MenuButton"}
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

            <Link href={titleLink} target="_blank">
              <Box
                className="pds-wds-titlebar-nasa-logo-md"
                component="img"
                sx={{
                  display: { xs: "none", md: "flex", lg: "none" },
                }}
                alt="NASA logo."
                src={NasaLogo}
              />
            </Link>
            <Link
              href={titleLink}
              target="_blank"
              className="pds-wds-titlebar-titlelink"
            >
              <Typography
                variant="h3"
                weight="bold"
                noWrap
                sx={{
                  display: { xs: "none", md: "flex", lg: "none" },
                }}
              >
                {title}
              </Typography>
            </Link>

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
                className="pds-wds-titlebar-link-divider-mid"
                variant="middle"
                orientation="vertical"
                flexItem
              />

              <Button
                className="pds-wds-titlebar-link-button-md"
                endIcon={<MenuIcon className="icon" />}
                onClick={handleToggleSmallMenu}
              ></Button>
            </Box>

            <Link href={titleLink} target="_blank">
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
            <Link
              href={titleLink}
              target="_blank"
              className="pds-wds-titlebar-titlelink"
            >
              <Typography
                variant="h4"
                weight="semibold"
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
                display: { xs: "flex", md: "none" },
              }}
            >
              <Button
                className="pds-wds-titlebar-link-button-md"
                endIcon={<SearchIcon className="icon" />}
                onClick={handleToggleSmallMenu}
              ></Button>

              <Divider
                className="pds-wds-titlebar-link-divider-mid"
                variant="middle"
                orientation="vertical"
                flexItem
              />

              <Button
                className="pds-wds-titlebar-link-button-md"
                endIcon={<MenuIcon className="icon" />}
                onClick={handleToggleSmallMenu}
              ></Button>
            </Box>

            {isSmallMenuOpen ? (
              <Box
                className="pds-wds-titlebar-small-menu"
                sx={{
                  display: { xs: "block", lg: "none" },
                }}
              >
                <Box
                  sx={{
                    display: { xs: "none", md: "flex", lg: "none" },
                  }}
                >
                  <Container maxWidth="xl">
                    <Toolbar
                      disableGutters
                      className="pds-wds-titlebar-small-menu-toolbar"
                    >
                      <div className="pds-wds-titlebar-small-menu-container">
                        <Link href={titleLink} target="_blank">
                          <Box
                            className="pds-wds-titlebar-nasa-logo-md"
                            component="img"
                            sx={{
                              display: { xs: "none", md: "flex", lg: "none" },
                            }}
                            alt="NASA logo."
                            src={NasaLogo}
                          />
                        </Link>
                        <Link
                          href={titleLink}
                          target="_blank"
                          className="pds-wds-titlebar-titlelink"
                        >
                          <Typography
                            variant="h3"
                            weight="bold"
                            noWrap
                            sx={{
                              display: { xs: "none", md: "flex", lg: "none" },
                            }}
                          >
                            {title}
                          </Typography>
                        </Link>
                      </div>

                      <Button
                        className="pds-wds-titlebar-link-button-md"
                        endIcon={<CloseIcon className="icon" />}
                        onClick={handleToggleSmallMenu}
                      ></Button>
                    </Toolbar>
                  </Container>
                </Box>

                <Box
                  sx={{
                    display: { xs: "flex", md: "none" },
                  }}
                >
                  <Container maxWidth="xl">
                    <Toolbar
                      disableGutters
                      className="pds-wds-titlebar-small-menu-toolbar"
                    >
                      <div className="pds-wds-titlebar-small-menu-container">
                        <Link href={titleLink} target="_blank">
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
                        <Link
                          href={titleLink}
                          target="_blank"
                          className="pds-wds-titlebar-titlelink"
                        >
                          <Typography
                            variant="h4"
                            weight="semibold"
                            noWrap
                            sx={{
                              display: { xs: "flex", md: "none" },
                            }}
                          >
                            {title}
                          </Typography>
                        </Link>
                      </div>

                      <Button
                        className="pds-wds-titlebar-link-button-md"
                        endIcon={<CloseIcon className="icon" />}
                        onClick={handleToggleSmallMenu}
                      ></Button>
                    </Toolbar>
                  </Container>
                </Box>

                {subTitle ? (
                  <>
                    <Divider
                      variant="fullWidth"
                      orientation="horizontal"
                      className="pds-wds-navbar-top-divider"
                    />
                    <Container maxWidth="xl">
                      <Toolbar
                        disableGutters
                        className="pds-wds-titlebar-toolbar"
                      >
                        <Link
                          href={subTitleLink}
                          target="_blank"
                          className="pds-wds-navbar-titlelink"
                          sx={{
                            display: { xs: "none", lg: "flex" },
                          }}
                        >
                          <Typography variant="h3" weight="bold" noWrap>
                            {subTitle}
                          </Typography>
                        </Link>

                        <Link
                          href={subTitleLink}
                          target="_blank"
                          className="pds-wds-navbar-titlelink"
                          sx={{
                            display: { xs: "flex", lg: "none" },
                          }}
                        >
                          <Typography variant="h4" weight="semibold" noWrap>
                            {subTitle}
                          </Typography>
                        </Link>
                      </Toolbar>
                    </Container>
                  </>
                ) : (
                  <div />
                )}

                <Container maxWidth="xl" className="pds-wds-titlebar-small-menu-search-container">
                  <Box className="pds-wds-titlebar-links-search">
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
                            display: "flex",
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
                </Container>

                <Box
                  className="pds-wds-titlebar-small-menu-md"
                  sx={{
                    display: { xs: "block", lg: "none" },
                  }}
                >
                  {navItems.map((item, index) => {
                    return item.items ? (
                      <div>
                        <Box
                          onClick={() => handleOpenNavSmallMenuSubNav(index)}
                          className={
                            activeNavSmallMenuIndices.has(index)
                              ? "pds-wds-titlebar-small-menu-link-open"
                              : "pds-wds-titlebar-small-menu-link"
                          }
                        >
                          <Typography
                            className="pds-wds-titlebar-link-label"
                            variant="h4"
                            weight="semibold"
                            textAlign="left"
                          >
                            {item.label}
                          </Typography>
                          {activeNavSmallMenuIndices.has(index) ? (
                            <ArrowCircleUpIcon className="icon" />
                          ) : (
                            <ArrowCircleDownIcon className="icon" />
                          )}
                        </Box>

                        {activeNavSmallMenuIndices.has(index) ? (
                          <div>
                            <Divider className="pds-wds-titlebar-small-menu-link-divider" />
                            {item.items.map((subItem) => {
                              return (
                                <div
                                  className="pds-wds-titlebar-small-menu-sub-link"
                                  key={subItem.id}
                                >
                                  <Link
                                    className="pds-wds-titlebar-link"
                                    key={subItem.id}
                                    href={subItem.href}
                                  >
                                    <Typography
                                      className="pds-wds-titlebar-link-label"
                                      variant="body1"
                                      weight="regular"
                                      textAlign="left"
                                    >
                                      {subItem.label}
                                    </Typography>
                                  </Link>
                                </div>
                              );
                            })}
                          </div>
                        ) : (
                          <></>
                        )}
                      </div>
                    ) : (
                      <div className="pds-wds-titlebar-small-menu-link">
                        <Typography
                          className="pds-wds-titlebar-link-label"
                          variant="h4"
                          weight="semibold"
                          textAlign="left"
                        >
                          {item.label}
                        </Typography>
                      </div>
                    );
                  })}
                </Box>

                <Box
                  className="pds-wds-titlebar-small-menu-md"
                  sx={{
                    display: { xs: "block", lg: "none" },
                  }}
                >
                  <Divider className="pds-wds-titlebar-small-menu-link-divider" />
                  {pages.map((item, index) => {
                    return item.items ? (
                      <div>
                        <Box
                          onClick={() => handleOpenTitleSmallMenuSubNav(index)}
                          className={
                            activeTitleSmallMenuIndices.has(index)
                              ? "pds-wds-titlebar-small-menu-link-open"
                              : "pds-wds-titlebar-small-menu-link"
                          }
                        >
                          <Typography
                            className="pds-wds-titlebar-link-label"
                            variant="h4"
                            weight="semibold"
                            textAlign="left"
                          >
                            {item.label}
                          </Typography>
                          {activeTitleSmallMenuIndices.has(index) ? (
                            <ArrowCircleUpIcon className="icon" />
                          ) : (
                            <ArrowCircleDownIcon className="icon" />
                          )}
                        </Box>

                        {activeTitleSmallMenuIndices.has(index) ? (
                          <div>
                            <Divider className="pds-wds-titlebar-small-menu-link-divider" />
                            {item.items.map((subItem) => {
                              return (
                                <div
                                  className="pds-wds-titlebar-small-menu-sub-link"
                                  key={subItem.id}
                                >
                                  <Link
                                    className="pds-wds-titlebar-link"
                                    key={subItem.id}
                                    href={subItem.href}
                                  >
                                    <Typography
                                      className="pds-wds-titlebar-link-label"
                                      variant="body1"
                                      weight="regular"
                                      textAlign="center"
                                    >
                                      {subItem.label}
                                    </Typography>
                                  </Link>
                                </div>
                              );
                            })}
                          </div>
                        ) : (
                          <></>
                        )}
                      </div>
                    ) : (
                      <div className="pds-wds-titlebar-small-menu-link">
                        <Typography
                          className="pds-wds-titlebar-link-label"
                          variant="body1"
                          weight="regular"
                          textAlign="left"
                        >
                          {item.label}
                        </Typography>
                      </div>
                    );
                  })}
                </Box>
              </Box>
            ) : (
              <></>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </StyledEngineProvider>
  );
};

export default TitleBar;
