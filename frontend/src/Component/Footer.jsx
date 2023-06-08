import { Box, Divider, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Divider h="0.3px" bg="#ebedf8" mt={["2rem", "3rem", "3rem"]} />

      <SimpleGrid columns={2} spacing={[1, 2, 5]} w="85%" mx="auto" mt="10">
        <Box
          fontWeight="700"
          color="#242f65"
          fontSize={{ base: "15px", sm: "17px", md: "29px" }}
        >
          <Link to="/">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHjptLPNNVp23c9RHZpm3Gp56mdDU8UfbBgQ&usqp=CAU"
              alt="logo"
              height="7vh"
            />
          </Link>
        </Box>

        <Box
          fontWeight={"500"}
          color="#555873"
          fontSize={{ base: "0.4rem", sm: "0.6rem", md: "1rem" }}
          display="flex"
          justifyContent={"flex-end"}
          textAlign="center"
        >
          <Text>
            Copyright © 2023 <br /> All Rights Reserved
          </Text>
        </Box>
      </SimpleGrid>
    </>
  );
};

export default Footer;
