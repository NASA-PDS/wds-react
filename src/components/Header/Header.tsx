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
};

export const Header = ({ navItems, title }: HeaderProps) => {
  return (
    <header>
      <TitleBar title={title} />
      <Navbar navItems={navItems} />
    </header>
  );
};

export default Header;
