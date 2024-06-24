import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";
import { FaCartShopping } from "react-icons/fa6";
import { AcmeLogo } from "./AcmeLogo.jsx";
import Cart from "../Cart/Cart.jsx";
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [showcartitem, setShowcartitem] = useState(false);

  const handlecartitem = () =>{
    setShowcartitem(!showcartitem);
  }

  const menuItems = [
    { label: "Explorer", route: "/explorer" },
    { label: "Chapéus", route: "/hats" },
    { label: "Tênis", route: "/sneakers" },
    { label: "Jaquetas", route: "/jackets" },
    { label: "Masculino", route: "/male" },
    { label: "Feminino", route: "/female" },
    { label: "Sair", action: exit }
  ];

  function exit() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('Googletoken');
    window.location.reload();
  }

  return (
    <div className="flex justify-end items-center relative">
      <FaCartShopping onClick={handlecartitem} className="text-white z-50 text-xl lg:text-2xl absolute mr-10 cursor-pointer"/>

      <Navbar className="bg-dark py-3" onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden text-white bg-dark"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
          <NavbarBrand>
            <Link href="#/">
              <AcmeLogo />
              <p className="text-xl font-bold lg:text-2xl text-inherit text-white">CLUB CLOTHING</p>
            </Link>
          </NavbarBrand>
        </NavbarContent>
          <div>
            {showcartitem && <Cart />}
          </div>

        <NavbarContent justify="end" className="hidden sm:flex gap-8 justify-center">
          {menuItems.map((item, index) => (
            <NavbarItem key={index}>
              {item.route ? (
                <Link color="primary" href={`#${item.route}`}>
                  {item.label}
                </Link>
              ) : (
                <Button onClick={item.action} color="primary" variant="flat">
                  {item.label}
                </Button>
              )}
            </NavbarItem>
          ))}
        </NavbarContent>

        <NavbarMenu style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          {menuItems.map((item, index) => (
            <NavbarMenuItem className="mt-10" key={`${item.label}-${index}`}>
              {item.route ? (
                <Link
                  color={index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "primary"}
                  className="w-full"
                  href={`#${item.route}`}
                  size="lg"
                >
                  {item.label}
                </Link>
              ) : (
                <Button onClick={item.action} color="primary" variant="flat" className="w-full">
                  {item.label}
                </Button>
              )}
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </div>
  );
}
