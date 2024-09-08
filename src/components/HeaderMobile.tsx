"use client";

import React from 'react';
import { 
  useDisclosure, 
  Drawer, 
  DrawerBody, 
  DrawerFooter,
  DrawerHeader, 
  DrawerOverlay, 
  DrawerContent,
  DrawerCloseButton,
  Flex, 
  Button, 
  VStack, 
  Link,
  Text,
} from "@chakra-ui/react";
import { NavItem } from '../types';
import { IoMdMenu } from "react-icons/io";


export const HeaderMobile = ({navItems}: {navItems: NavItem[]}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef(null);

  return (
    <Flex display={{ base: "flex", md: "none" }}>
      <Button ref={btnRef} onClick={onOpen}>
        <IoMdMenu size="26px" />
      </Button>
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent alignItems="center">
          <DrawerCloseButton alignSelf="end" mx={15} my={15} />
          <DrawerHeader my={15}>
            <Text as="p">Beaming Displays</Text>
          </DrawerHeader>
          <DrawerBody>
            <VStack alignItems="left">
              {navItems.map((item, i) => (
                <Link key={i}>
                  <Button variant='text' > {item.label} </Button>
                </Link>
              ))}
            </VStack>
          </DrawerBody>
          <DrawerFooter></DrawerFooter>
          </DrawerContent>
      </Drawer>
    </Flex>
  );
};