import TitleBar from "../TitleBar/TitleBar";
import Navbar from "../Navbar/Navbar";
import Box from "@mui/material/Box";

export type HeaderProps = {
  navItems: [
    {
      id: string;
      label: string;
      href: string;
      items?: [
        {
          id: string;
          label: string;
          href: string;
        },
      ];
    },
  ];
  title: string;
  titleLink: string;
  subTitle?: string;
  subTitleLink?: string;
};

export const Header = ({
  navItems,
  title,
  titleLink,
  subTitle,
  subTitleLink,
}: HeaderProps) => {
  return (
    <header>
      <TitleBar
        title={title}
        titleLink={titleLink}
        navItems={navItems}
        subTitle={subTitle}
        subTitleLink={subTitleLink}
      />

      {subTitle ? (
        <Navbar
          navItems={navItems}
          subTitle={subTitle}
          subTitleLink={subTitleLink}
        />
      ) : (
        <>
          <Box
            sx={{
              display: { xs: "none", lg: "block" },
            }}
          >
            <Navbar
              navItems={navItems}
              subTitle={subTitle}
              subTitleLink={subTitleLink}
            />
          </Box>
        </>
      )}
    </header>
  );
};

export default Header;
