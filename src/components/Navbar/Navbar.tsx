import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { Typography } from "../Typography/Typography";
import MenuItem from "@mui/material/MenuItem";
import { Divider } from "@mui/material";
import { HeaderProps } from "../Header/Header";
import { StyledEngineProvider } from "@mui/material/styles";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuList from "@mui/material/MenuList";
import ChevronDown from "../Icons/ChevronDown";

const Navbar = ({
  navItems,
  subTitle,
  subTitleLink,
}: Omit<HeaderProps, "title">) => {
  const [elList, setElList] = useState(
    Array<{
      id: number;
      anchorEl: HTMLElement | null;
      isOpen: boolean;
    }>,
  );

  const handleClick = (index: number, event: React.MouseEvent<HTMLElement>) => {
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
            {subTitle ? (
              <>
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
              </>
            ) : (
              <div />
            )}

            <Box sx={{ display: { xs: "none", lg: "block" } }}>
              {navItems.map((item, index) => {
                return item.items ? (
                  <>
                    <Button
                      className="pds-wds-navbar-link-button"
                      id="composition-button"
                      aria-haspopup="true"
                      onClick={(e) => handleClick(index, e)}
                      endIcon={<ChevronDown height={10} width={10} />}
                    >
                      {item.label}
                    </Button>
                    <Popper
                      className="pds-wds-navbar-popper"
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
                          <Paper className="pds-wds-navbar-paper">
                            <ClickAwayListener
                              onClickAway={() => handleClickAway(index)}
                            >
                              <MenuList
                                autoFocusItem={getIsOpen(index)}
                                id="composition-menu"
                                aria-labelledby="composition-button"
                              >
                                {item.items?.map((subItem) => {
                                  return (
                                    <Link
                                      className="pds-wds-navbar-link"
                                      key={subItem.id}
                                      href={subItem.href}
                                    >
                                      <MenuItem className="pds-wds-navbar-menu-item">
                                        <Typography
                                          className="pds-wds-navbar-link-label"
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
          </Toolbar>
        </Container>
      </AppBar>
    </StyledEngineProvider>
  );
};

export default Navbar;
