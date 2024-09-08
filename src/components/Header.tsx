"use client";

import {  
  Image, 
  Flex,
  Link,
  Button, 
  HStack, 
  chakra,   
} from '@chakra-ui/react';
import { HeaderMobile } from './HeaderMobile';


export const Header = () => {

  const navItems = [
    {
      label: "Our Vision",
      link: "#Vision",
    },   
    {
      label: "Concept",
      link: "#Concept",
    },
    {
      label: "Product",
      link: "#Product",
    },
    {
      label: "About Us",
      link: "#About",
    },
  ]

  return (
    <chakra.header id="header">
      <Flex
        w="100%"
        px="6"
        py="5"
        align="center"
        justify="space-between"
      >
        <Image src={""} h="50px" />
        
        <HStack as="nav" spacing="5" display={{ base: "none", md: "flex" }}>
          {navItems.map((item, i) => (
            <Link key={i}>
              <Button variant="nav"> {item.label} </Button>
            </Link>
          ))}
        </HStack>

        <HStack>
          <Button>
            Contact Us
          </Button>
          <HeaderMobile navItems={navItems}/>
        </HStack>
        
      </Flex>
    </chakra.header>
  );
}