import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  useColorModeValue,
  useDisclosure,
  VStack,
  HStack,
  Button,
  Image,
} from "@chakra-ui/react";
import React from "react";
import { MdClose } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LOGOUT } from "../Redux/actiontypes/auth.types";

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Box boxShadow=" rgba(0, 0, 0, 0.16) 0px 1px 4px" py="2">
        <Flex
          w="90%"
          mx="auto"
          bg={useColorModeValue("white", "gray.800")}
          color={useColorModeValue("gray.600", "white")}
          align={"center"}
        >
          <Flex
            flex={{ base: 1, md: "auto" }}
            display={{ base: "flex", md: "none" }}
          >
            <IconButton
              fontSize={"23px"}
              onClick={onToggle}
              icon={
                isOpen ? (
                  <MdClose w={3} h={3} />
                ) : (
                  <GiHamburgerMenu w={5} h={5} />
                )
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
            <Flex
              display={{ base: "none", md: "flex" }}
              alignItems={"center"}
              color="#242f65"
              fontWeight="500"
              fontSize={"15px"}
              py="5px"
              px="30px"
              w="100%"
              mx="auto"
            >
              <DesktopNav />
            </Flex>
            <Stack
              flex={{ base: 1, md: 0 }}
              justify={"flex-end"}
              direction={"row"}
              spacing={4}
              alignItems={"center"}
              fontSize="20px"
              mr="10px"
            >
              <Link to="/">
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHjptLPNNVp23c9RHZpm3Gp56mdDU8UfbBgQ&usqp=CAU"
                  alt="logo"
                  height="7vh"
                />
              </Link>
            </Stack>
          </Flex>
        </Flex>
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    </>
  );
};

export default Navbar;

const DesktopNav = () => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.auth);

  return (
    <HStack
      w="100%"
      spacing={"25px"}
      alignItems="center"
      justifyContent="space-between"
    >
      <Link to={"/"}>
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHjptLPNNVp23c9RHZpm3Gp56mdDU8UfbBgQ&usqp=CAU"
          alt="logo"
          height="10vh"
        />
      </Link>
      <HStack
        w="20%"
        mx="auto"
        spacing={"25px"}
        alignItems="center"
        justifyContent="space-between"
      >
        <Link to={"/inventoryall"}>
          <Text
            _hover={{
              transform: "scale(1.2)",
              borderBottom: "1px solid #F2CD5C",
            }}
          >
            Showroom
          </Text>
        </Link>
        <Link to={"/addcar"}>
          <Text
            _hover={{
              transform: "scale(1.2)",
              borderBottom: "1px solid #F2CD5C",
            }}
          >
            Add Car
          </Text>
        </Link>
      </HStack>

      <Link to="/login">
        {!isAuth ? (
          <Button
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg={"pink.400"}
            _hover={{
              bg: "pink.300",
            }}
          >
            Sign In
          </Button>
        ) : (
          <Button
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg={"pink.400"}
            _hover={{
              bg: "pink.300",
            }}
            onClick={() => {
              dispatch({ type: LOGOUT });
            }}
          >
            Log-Out
          </Button>
        )}
      </Link>
      <Link to="/signup">
        <Button
          display={{ base: "none", md: "inline-flex" }}
          fontSize={"sm"}
          fontWeight={600}
          color={"white"}
          bg={"pink.400"}
          _hover={{
            bg: "pink.300",
          }}
        >
          Sign Up
        </Button>
      </Link>
    </HStack>
  );
};

const MobileNav = () => {
  return (
    <Stack p={4} display={{ md: "none" }}>
      <Box>
        <VStack fontWeight={"600"}>
          <Link to={"/inventoryall"}>Showroom</Link>
          <Link to={"/addcar"}>Add Cars's</Link>
        </VStack>
      </Box>
    </Stack>
  );
};
