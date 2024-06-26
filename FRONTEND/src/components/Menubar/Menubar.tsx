import React, { useContext, useEffect } from "react";
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
import { FaCartShopping } from "react-icons/fa6";
import Context from "../../context/Context.js";
import Cart from "../Cart/Cart.js";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const {setShowCartItem,showCartItem, products } = useContext(Context)
  const quantity = products.length

  const menuItems = [
    { label: "Explorer", route: "/explorer" },
    { label: "Chapéus", route: "/hats" },
    { label: "Tênis", route: "/sneakers" },
    { label: "Jaquetas", route: "/jackets" },
    { label: "Masculino", route: "/male" },
    { label: "Feminino", route: "/female" },
  ];

  const handlecartitem = () =>{
    setShowCartItem(!showCartItem);
  }

    const handlemodal = (event: any) =>{
    if(event.target.id === 'modalcart'){
      setShowCartItem(false)
    }
  }

  useEffect(() => {
    if (showCartItem) {
        document.body.style.overflowY = 'hidden'; 
    } else {
        document.body.style.overflowY = 'auto'; 
    }
}, [showCartItem]);

  return (
    <div  onClick={handlemodal} id='modalcart' className="flex justify-end items-center flex-row-reverse relative">
      <div className="absolute right-0 mr-10 flex flex-row-reverse mt-2">
          <FaCartShopping onClick={handlecartitem} className="text-white z-50 text-xl lg:text-2xl absolute mr-10 cursor-pointer"/>
        <span className="text-base text-white z-50">{quantity}</span>
      </div>
       <Navbar className="bg-dark">
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden text-white bg-dark z-30"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
          <NavbarBrand>
           <Link href='#/'> <AcmeLogo />
           <p className="text-xl font-bold lg:text-2xl text-inherit text-white">CLUB CLOTHING</p></Link>
          </NavbarBrand>
        </NavbarContent>
        {showCartItem && <Cart />}

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
