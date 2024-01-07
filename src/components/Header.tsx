import { ReactNode } from "react";

interface image {
  src: string;
  alt: string;
}

interface HeaderProps {
  image: image;
  children: ReactNode;
}

const Header = ({ image, children }: HeaderProps) => {
  return (
    <header>
      <img
        src={image.src}
        alt={image.alt}
      />
      {children}
    </header>
  );
};

export default Header;
