import TitleBar from "../TitleBar/TitleBar";
import Navbar from "../Navbar/Navbar";

export type HeaderProps = {
  navItems: [
    {
      id: string;
      label: string;
      href: string;
      items: [
        {
          id: string;
          label: string;
          href: string;
        },
      ];
    },
  ];
};

export const Header = ({ navItems }: HeaderProps) => {
  return (
    <header>
      <TitleBar />
      <Navbar navItems={navItems} />
    </header>
  );
};

export default Header;
