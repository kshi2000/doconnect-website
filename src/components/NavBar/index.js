import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { Link, Outlet } from "react-router-dom";

import NavItem from "./NavItem";
import ProfileIcon from "../../icons/Profile";
import StethoScopeIcon from "../../icons/StethoScope";

const NavBar = () => {
  return (
    <>
      <Flex
        as="nav"
        w="full"
        justifyContent="space-between"
        p={5}
        borderBottom={"navBar"}
      >
        <Flex alignItems="center" mx={5}>
          <Link to="/">
            <Flex alignItems="center">
              <StethoScopeIcon />
              <Box mx={2}>
                <Heading variant="h2">DOConnect</Heading>
              </Box>
            </Flex>
          </Link>
          <Flex alignItems="center" mx={2}>
            <NavItem to="/feed">Feed</NavItem>
            <NavItem to="/events">Events</NavItem>
            <NavItem to="/patient-records">Patient Records</NavItem>
          </Flex>
        </Flex>
        <Flex alignItems="center">
          <Box>
            <Heading variant="h2">Chat</Heading>
          </Box>
          <NavItem to="/profile">
            <ProfileIcon />
          </NavItem>
        </Flex>
      </Flex>
      <Outlet />
    </>
  );
};

export default NavBar;
