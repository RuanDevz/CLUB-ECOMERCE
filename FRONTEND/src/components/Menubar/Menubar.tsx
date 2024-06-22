import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button
} from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo.jsx";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { label: "Explorer", route: "/explorer" },
    { label: "Chapéus", route: "/hats" },
    { label: "Tênis", route: "/sneakers" },
    { label: "Jaquetas", route: "/jackets" },
    { label: "Masculino", route: "/male" },
    { label: "Feminino", route: "/female" },
  ];

  return (
    <div>
      <Navbar className="bg-dark">
        <NavbarContent>
          <NavbarMenuToggle
            className="sm:hidden text-white bg-dark z-30"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
          <NavbarBrand>
            <AcmeLogo />
            <p className="text-xl font-bold lg:text-2xl text-inherit text-white">CLUB CLOTHING</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-8 justify-center">
          {menuItems.map((item, index) => (
            <NavbarItem key={index}>
              <Link color="primary" href={`#${item.route}`}>
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="#/login">Entrar</Link>
          </NavbarItem>
          <NavbarItem className="hidden lg:flex">
            <Button as={Link} color="primary" href="#/register" variant="flat">
              Criar conta
            </Button>
          </NavbarItem>
        </NavbarContent>

        {isMenuOpen && (
          <NavbarMenu
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          >
            <NavbarMenuItem className="mt-10 pb-4">
              <Link color="primary" href="#/login">Entrar</Link>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <Link color="primary" href="#/register">
                Criar conta
              </Link>
            </NavbarMenuItem>
            {menuItems.map((item, index) => (
              <NavbarMenuItem className="mt-5" key={`${item.label}-${index}`}>
                <Link
                  color={index === 0 ? "primary" : "primary"}
                  className="w-full"
                  href={`#${item.route}`}
                  size="lg"
                >
                  {item.label}
                </Link>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
        )}
      </Navbar>
    </div>
  );
}
