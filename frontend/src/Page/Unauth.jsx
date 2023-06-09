import { Box, Button, Heading } from "@chakra-ui/react";
import React from "react";
import { AiFillWarning } from "react-icons/ai";
import { Link } from "react-router-dom";

const Unauth = () => {
  return (
    <Box
      h="100vh"
      // position={"fixed"}
      // top="0"
      bg="#DAF5FF"
      w="100%"
      zIndex={"99"}
      display={"grid"}
      placeItems="center"
    >
      <Box
        display={"flex"}
        justifyContent="center"
        alignItems={"center"}
        flexDirection="column"
        py={10}
        px={6}
        gap="20px"
      >
        <AiFillWarning color={"orange"} fontSize="5rem" />
        <Heading
          as="h2"
          color={"#37306B"}
          fontSize={["5rem", "7rem", "10rem", "12rem"]}
          letterSpacing={"20px"}
          fontStyle={"italic"}
          mt={6}
        >
          404
        </Heading>
        <Heading
          as="h2"
          color="#66347F"
          fontSize={["1rem", "3rem", "5rem", "4rem"]}
          letterSpacing={"5px"}
        >
          Access Denied
        </Heading>
        <Link to="/">
          <Button
            colorScheme="teal"
            bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
            color="white"
            variant="solid"
          >
            Go to Home
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Unauth;
