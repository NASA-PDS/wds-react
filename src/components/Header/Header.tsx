import TitleBar from "../TitleBar/TitleBar";
import Navbar from "../Navbar/Navbar";

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
};

export const Header = ({ navItems, title, titleLink }: HeaderProps) => {
  return (
    <header>
      <TitleBar title={title} titleLink={titleLink} />
      <Navbar navItems={navItems} />
    </header>
  );
};

export default Header;
